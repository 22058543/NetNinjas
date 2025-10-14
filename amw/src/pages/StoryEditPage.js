import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { generateClient } from 'aws-amplify/api';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import '../styles/StoryEditPage.css';

const client = generateClient();

const StoryEditPage = ({ showNotification }) => {
    const { id } = useParams(); 
    const navigate = useNavigate();

    const [storyData, setStoryData] = useState(null);
    const [storyTitle, setStoryTitle] = useState('');
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('Family');
    const [coverImage, setCoverImage] = useState(null);
    const [isLocked, setIsLocked] = useState(false);
    const [chapters, setChapters] = useState([]);
    
    const [isLoading, setIsLoading] = useState(true);
    const [isSavingTitle, setIsSavingTitle] = useState(false);

    const handleError = (message) => {
        if (showNotification) {
            showNotification(message, 'error');
        }
    };

    useEffect(() => {
        const fetchStory = async () => {
            try {
                const storyResult = await client.graphql({
                    query: queries.getStory,
                    variables: { id },
                });

                const story = storyResult.data.getStory;
                if (story) {
                    setStoryData(story);
                    setStoryTitle(story.title);
                    setIsLocked(story.locked || false);
                    
                    const chaptersList = story.chapters?.items || [];
                    setChapters(chaptersList.sort((a, b) => (a.order || 0) - (b.order || 0)));
                } else {
                    handleError('Story not found.');
                    navigate('/');
                }
            } catch (error) {
                console.error('Error fetching story:', error);
                handleError('Failed to load story data.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchStory();
    }, [id, navigate]);

    const handleSaveTitle = async () => {
        if (!storyTitle.trim()) {
            handleError('Story title cannot be empty.');
            return;
        }

        setIsSavingTitle(true);
        try {
            const updateInput = {
                id: storyData.id,
                title: storyTitle.trim(),
            };

            if (storyData._version) {
                updateInput._version = storyData._version;
            }

            const result = await client.graphql({
                query: mutations.updateStory,
                variables: { input: updateInput },
            });

            setStoryData(result.data.updateStory);
            setIsEditingTitle(false);
            showNotification('Story title updated successfully!', 'success');
        } catch (error) {
            console.error('Error updating title:', error);
            handleError('Failed to update story title.');
        } finally {
            setIsSavingTitle(false);
        }
    };

    const handleTitleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSaveTitle();
        } else if (e.key === 'Escape') {
            setStoryTitle(storyData.title);
            setIsEditingTitle(false);
        }
    };

    const handleAddChapter = async () => {
        try {
            const newChapter = await client.graphql({
                query: mutations.createChapter,
                variables: {
                    input: {
                        title: 'New Chapter',
                        storyId: id,
                        order: chapters.length + 1,
                        isDefault: false,
                    }
                }
            });
            
            setChapters([...chapters, newChapter.data.createChapter]);
            showNotification('Chapter added successfully!', 'success');
        } catch (error) {
            console.error('Error adding chapter:', error);
            handleError('Failed to add chapter.');
        }
    };

    const handleEditChapter = (chapterId) => {
        showNotification('Chapter editing coming soon!', 'error');
    };

    const handleReorderChapter = (chapterId, direction) => {
        showNotification('Chapter reordering coming soon!', 'error');
    };

    const toggleLock = async () => {
        try {
            await client.graphql({
                query: mutations.updateStory,
                variables: {
                    input: {
                        id: storyData.id,
                        locked: !isLocked
                    }
                }
            });
            setIsLocked(!isLocked);
            showNotification(`Story ${!isLocked ? 'locked' : 'unlocked'} successfully!`, 'success');
        } catch (error) {
            console.error('Error toggling lock:', error);
            handleError('Failed to toggle lock status.');
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: '2-digit' });
    };

    if (isLoading) {
        return <div className="loading-container">Loading story...</div>;
    }

    return (
        <div className="story-edit-container">
            <button 
                className="back-button"
                onClick={() => navigate('/')}
            >
                ← Return to Dashboard
            </button>

            <div className="story-layout">
                {/* Left Sidebar */}
                <aside className="story-sidebar">
                    <div className="cover-image-section">
                        <div className="cover-image-placeholder">
                            <svg className="upload-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                        </div>
                        <button className="upload-button">Upload a Cover Image</button>
                    </div>

                    <div className="sidebar-section">
                        <label className="sidebar-label">Description</label>
                        <textarea
                            className="sidebar-textarea"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Memories from different parts of our family's life, small details, shared experiences, and the moments that stuck with us."
                            rows="4"
                        />
                    </div>

                    <div className="sidebar-section">
                        <label className="sidebar-label">Created</label>
                        <input
                            type="text"
                            className="sidebar-input"
                            value={formatDate(storyData?.createdAt)}
                            readOnly
                        />
                    </div>

                    <div className="sidebar-section">
                        <label className="sidebar-label">Category</label>
                        <select
                            className="sidebar-select"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="Family">Family</option>
                            <option value="Travel">Travel</option>
                            <option value="Friends">Friends</option>
                            <option value="General">General</option>
                        </select>
                    </div>

                    <div className="sidebar-section lock-section">
                        <label className="sidebar-label">
                            {isLocked ? 'Locked' : 'Unlocked'}
                        </label>
                        <button 
                            className={`lock-toggle ${isLocked ? 'locked' : 'unlocked'}`}
                            onClick={toggleLock}
                        >
                            <div className={`toggle-switch ${!isLocked ? 'active' : ''}`}>
                                <div className="toggle-knob"></div>
                            </div>
                            <svg className="lock-icon-small" fill="currentColor" viewBox="0 0 24 24">
                                {isLocked ? (
                                    <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm-3 5c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z"/>
                                ) : (
                                    <path d="M12 2C9.243 2 7 4.243 7 7v2H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm6 9v9H6v-9h12zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9V7z"/>
                                )}
                            </svg>
                        </button>
                    </div>

                    <div className="sidebar-section">
                        <label className="sidebar-label">Members ({storyData?.userIds?.length || 1})</label>
                        <div className="members-grid">
                            {[...Array(Math.min(storyData?.userIds?.length || 1, 12))].map((_, i) => (
                                <div key={i} className="member-avatar">
                                    <div className="avatar-circle">
                                        {String.fromCharCode(65 + i)}
                                    </div>
                                    <span className="member-name">User{i + 1}</span>
                                </div>
                            ))}
                        </div>
                        <button className="see-all-button">See All</button>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="story-main">
                    {isEditingTitle ? (
                        <div className="title-edit-container">
                            <input
                                type="text"
                                className="story-title-input"
                                value={storyTitle}
                                onChange={(e) => setStoryTitle(e.target.value)}
                                onKeyDown={handleTitleKeyDown}
                                onBlur={handleSaveTitle}
                                disabled={isSavingTitle}
                                autoFocus
                            />
                            <div className="title-edit-buttons">
                                <button 
                                    className="title-save-btn"
                                    onClick={handleSaveTitle}
                                    disabled={isSavingTitle}
                                >
                                    {isSavingTitle ? 'Saving...' : '✓ Save'}
                                </button>
                                <button 
                                    className="title-cancel-btn"
                                    onClick={() => {
                                        setStoryTitle(storyData.title);
                                        setIsEditingTitle(false);
                                    }}
                                    disabled={isSavingTitle}
                                >
                                    ✕ Cancel
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="story-title-display">
                            <h1 className="story-main-title">{storyTitle}</h1>
                            <button 
                                className="edit-title-btn"
                                onClick={() => setIsEditingTitle(true)}
                                title="Edit title"
                            >
                                <svg className="edit-title-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </button>
                        </div>
                    )}

                    <div className="chapters-table-container">
                        <table className="chapters-table">
                            <thead>
                                <tr>
                                    <th>Chapter</th>
                                    <th className="text-center">Moments</th>
                                    <th className="text-center">Sequence</th>
                                    <th className="text-center">Order</th>
                                    <th className="text-center">Edit</th>
                                    <th className="text-center">Created</th>
                                </tr>
                            </thead>
                            <tbody>
                                {chapters.map((chapter, index) => (
                                    <tr key={chapter.id}>
                                        <td>
                                            <div className="chapter-cell">
                                                <input type="radio" name="chapter-select" />
                                                <div className="chapter-icon">
                                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                    </svg>
                                                </div>
                                                <span className="chapter-title">{chapter.title}</span>
                                            </div>
                                        </td>
                                        <td className="text-center">{chapter.moments?.items?.length || 0}</td>
                                        <td className="text-center">{index + 1}</td>
                                        <td className="text-center">
                                            <button 
                                                className="order-button"
                                                onClick={() => handleReorderChapter(chapter.id, 'up')}
                                            >
                                                <svg className="order-icon" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M7 14l5-5 5 5H7z"/>
                                                </svg>
                                            </button>
                                        </td>
                                        <td className="text-center">
                                            <button 
                                                className="edit-chapter-button"
                                                onClick={() => handleEditChapter(chapter.id)}
                                            >
                                                <svg className="edit-chapter-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </button>
                                        </td>
                                        <td className="text-center date-cell">
                                            {formatDate(chapter.createdAt)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <button 
                            className="add-chapter-button"
                            onClick={handleAddChapter}
                        >
                            + Add Chapter
                        </button>
                    </div>

                    {/* Action Buttons */}
                    <div className="action-buttons">
                        <button className="action-btn play-story">
                            <svg className="action-icon" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                            <span>Play Story</span>
                        </button>
                        <button className="action-btn play-social">
                            <svg className="action-icon" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                            </svg>
                            <span>Play Social</span>
                        </button>
                        <button className="action-btn play-slideshow">
                            <svg className="action-icon" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7l6 3.82v-7.64L11 12z"/>
                            </svg>
                            <span>Play Slideshow</span>
                        </button>
                        <button className="action-btn create-video">
                            <svg className="action-icon" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                            </svg>
                            <span>Create Video</span>
                        </button>
                    </div>

                    <div className="sync-status-bottom">
                        <svg className="sync-icon-bottom" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        Synced
                    </div>
                </main>
            </div>
        </div>
    );
};

export default StoryEditPage;