import React, { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import { getCurrentUser } from 'aws-amplify/auth';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';
import '../styles/Dashboard.css';

const client = generateClient();

function Dashboard({ showNotification }) { 
    const [stories, setStories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [userId, setUserId] = useState(null);
    const [sortOrder, setSortOrder] = useState('newest');
    const [filterMine, setFilterMine] = useState('all');
    const navigate = useNavigate();

    const handleError = (message) => {
        showNotification(message, 'error');
    };

    useEffect(() => {
        const getUser = async () => {
            try {
                const user = await getCurrentUser();
                setUserId(user.username);
            } catch (err) {
                console.error('Failed to get current user:', err);
                handleError('Failed to load user information.');
            }
        };
        getUser();
    }, []); 

    const fetchStories = async () => {
        setIsLoading(true);
        try {
            const storyData = await client.graphql({ 
                query: queries.listStories,
            });
            const storyList = storyData.data.listStories.items;
            setStories(storyList.filter(s => s !== null));
        } catch (err) {
            console.error('Error fetching stories:', err);
            handleError('Could not load stories. Please check your network or try again.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchStories();

        const createSub = client.graphql({ query: subscriptions.onCreateStory }).subscribe({
            next: ({ data }) => {
                const newStory = data.onCreateStory;
                setStories(prev => 
                    prev.some(s => s.id === newStory.id) ? prev : [newStory, ...prev]
                );
            },
            error: err => console.warn('Create subscription error:', err),
        });

        const updateSub = client.graphql({ query: subscriptions.onUpdateStory }).subscribe({
            next: ({ data }) => {
                const updatedStory = data.onUpdateStory;
                setStories(prev =>
                    prev.map(story => (story.id === updatedStory.id ? updatedStory : story))
                );
            },
            error: err => console.warn('Update subscription error:', err),
        });

        const deleteSub = client.graphql({ query: subscriptions.onDeleteStory }).subscribe({
            next: ({ data }) => {
                const deletedStory = data.onDeleteStory;
                setStories(prev => prev.filter(story => story.id !== deletedStory.id));
            },
            error: err => console.warn('Delete subscription error:', err),
        });

        return () => {
            createSub.unsubscribe();
            updateSub.unsubscribe();
            deleteSub.unsubscribe();
        };
    }, []);

    const handleAddStory = async () => {
        if (!userId) {
            handleError('User data is missing. Please log in again.');
            return;
        }
        
        try {
            const newStoryInput = {
                title: 'Untitled Story',
                inviteCode: uuidv4(),
                inviteCodeForOwner: uuidv4(),
                userId: userId,
            };

            const result = await client.graphql({
                query: mutations.createStory,
                variables: { input: newStoryInput },
            });
            
            const createdStory = result.data.createStory;
            
            // Navigate to the newly created story's edit page
            navigate(`/story/${createdStory.id}`);
        } catch (err) {
            console.error('Error creating story:', err);
            handleError('Failed to create new story.');
        }
    };

    const handleDeleteStory = (storyId) => {
        const performDeletion = async () => {
            try {
                await client.graphql({
                    query: mutations.deleteStory,
                    variables: { input: { id: storyId } },
                });
                await fetchStories();
            } catch (err) {
                console.error('Error deleting story:', err);
                handleError('Failed to delete story.');
            }
        };

        showNotification(
            'This action cannot be undone. Are you sure you want to permanently delete this story?',
            'confirm',
            performDeletion
        );
    };

    const toggleLock = (story) => {
        showNotification('Lock/Unlock feature coming soon!', 'error');
    };

    const filteredStories = stories
        .filter(story => {
            if (filterMine === 'mine') return story.userId === userId;
            return true;
        })
        .sort((a, b) => {
            if (sortOrder === 'newest') {
                return new Date(b.createdAt) - new Date(a.createdAt);
            } else {
                return new Date(a.createdAt) - new Date(b.createdAt);
            }
        });

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: '2-digit' });
    };

    const isReady = !isLoading && userId;

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h2>Dashboard</h2>
                <div className="dashboard-buttons">
                    <button 
                        onClick={handleAddStory}
                        disabled={isLoading || !userId}
                        className="add-story-button"
                    >
                        Create a New Story
                    </button>
                    <button className="join-story-button">
                        Join an Existing Story
                    </button>
                </div>
            </div>

            <div className="dashboard-stats">
                <div className="stat-card">
                    <div className="stat-number">{stories.length}</div>
                    <div className="stat-label">Stories</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">
                        {stories.filter(s => s.userId === userId).length}
                    </div>
                    <div className="stat-label">Connections</div>
                </div>
            </div>

            <div className="dashboard-filters">
                <label className="filter-label">
                    Mine: 
                    <select 
                        value={filterMine}
                        onChange={(e) => setFilterMine(e.target.value)}
                        className="filter-select"
                    >
                        <option value="all">All</option>
                        <option value="mine">Mine Only</option>
                    </select>
                </label>

                <label className="filter-label">
                    Sort: 
                    <select 
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="filter-select"
                    >
                        <option value="newest">Newest - Oldest</option>
                        <option value="oldest">Oldest - Newest</option>
                    </select>
                </label>
            </div>

            {!isReady && isLoading && (
                <div className="loading-state">Loading your stories...</div>
            )}

            {isReady && filteredStories.length === 0 && (
                <div className="empty-state">
                    No stories found. Create your first story to get started!
                </div>
            )}

            {isReady && filteredStories.length > 0 && (
                <div className="stories-table-container">
                    <table className="stories-table">
                        <thead>
                            <tr>
                                <th>Story</th>
                                <th className="center">Owner</th>
                                <th className="center">Members</th>
                                <th className="center">Category</th>
                                <th className="center">Chapters</th>
                                <th className="center">Edit</th>
                                <th className="center">Lock/Unlock</th>
                                <th className="center">Created</th>
                                <th className="center">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredStories.map((story) => (
                                <tr key={story.id}>
                                    <td>
                                        <div className="story-cell">
                                            <div className="story-icon">
                                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                                </svg>
                                            </div>
                                            <span className="story-title">{story.title}</span>
                                        </div>
                                    </td>
                                    <td className="center">
                                        <div className="owner-cell">
                                            <div className="owner-avatar">
                                                {story.userId ? story.userId.substring(0, 2).toUpperCase() : '?'}
                                            </div>
                                            <span className="owner-label">
                                                {story.userId === userId ? 'You' : 'User'}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="center">
                                        {story.userIds?.length || 1}
                                    </td>
                                    <td className="center">
                                        General
                                    </td>
                                    <td className="center">
                                        <strong>{story.chapters?.items?.length || 0}</strong>
                                    </td>
                                    <td className="center">
                                        <button 
                                            onClick={() => navigate(`/story/${story.id}`)}
                                            className="action-button"
                                            title="Edit Story"
                                        >
                                            <svg className="edit-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </button>
                                    </td>
                                    <td className="center">
                                        <button 
                                            onClick={() => toggleLock(story)}
                                            className="action-button"
                                            title={story.locked ? "Locked" : "Unlocked"}
                                        >
                                            {story.locked ? (
                                                <svg className="lock-icon locked" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm-3 5c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z"/>
                                                </svg>
                                            ) : (
                                                <svg className="lock-icon unlocked" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2C9.243 2 7 4.243 7 7v2H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm6 9v9H6v-9h12zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9V7z"/>
                                                </svg>
                                            )}
                                        </button>
                                    </td>
                                    <td className="center">
                                        <span className="date-text">{formatDate(story.createdAt)}</span>
                                    </td>
                                    <td className="center">
                                        <span className="status-badge live">
                                            LIVE
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <div className="dashboard-footer">
                <span className="sync-status">
                    <svg className="sync-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Synced
                </span>
            </div>
        </div>
    );
}

export default Dashboard;