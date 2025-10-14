import React, { useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { getCurrentUser } from 'aws-amplify/auth';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import * as mutations from '../graphql/mutations';

const client = generateClient();

// The component now accepts showNotification as a prop
function CreateStory({ showNotification }) {
    const [title, setTitle] = useState('');
    // Removed: const [error, setError] = useState(null); // Local error state is no longer needed
    const [isSaving, setIsSaving] = useState(false);
    const navigate = useNavigate();

    // Helper function to trigger the modal for errors
    const handleError = (message) => {
        if (showNotification) {
            showNotification(message, 'error');
        } else {
            console.error('Notification system not available:', message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setError(null); // No longer needed

        if (title.trim().length === 0) {
            handleError('Story title cannot be empty.');
            return;
        }

        setIsSaving(true);
        try {
            const { username } = await getCurrentUser();

            const newStoryInput = {
                title: title.trim(),
                inviteCode: uuidv4(),
                inviteCodeForOwner: uuidv4(),
                userId: username,
            };

            const result = await client.graphql({
                query: mutations.createStory,
                variables: { input: newStoryInput },
            });

            const createdStory = result.data.createStory;
            // Optionally, show a success message before navigating, or rely on the next page loading.
            // showNotification(`Story "${title.trim()}" created successfully!`, 'success'); 
            
            navigate(`/story/${createdStory.id}`);
        } catch (err) {
            console.error('Error creating story:', err);
            handleError('Failed to create story. Please check your network and try again.');
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="create-story-container">
            <h2>Create a New Story</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="storyTitle">Story Title</label>
                <input
                    id="storyTitle"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    disabled={isSaving}
                    placeholder="Enter your story title"
                />
                {/* Removed: {error && <p className="error-message">{error}</p>} */}
                
                <button type="submit" disabled={isSaving}>
                    {isSaving ? 'Creating...' : 'Create Story'}
                </button>
            </form>
        </div>
    );
}

export default CreateStory;