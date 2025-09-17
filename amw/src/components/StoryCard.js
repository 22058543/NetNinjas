import React, { useState } from 'react';

function StoryCard({ title, chapters, moments, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [storyTitle, setStoryTitle] = useState(title);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleTitleChange = (e) => {
    setStoryTitle(e.target.value);
  };

  return (
    <div className="story-card">
      {isEditing ? (
        <input 
          type="text" 
          value={storyTitle} 
          onChange={handleTitleChange} 
          className="editable-title-input" 
        />
      ) : (
        <h3>{storyTitle}</h3>
      )}
      <p>{chapters} Chapters | {moments} Moments</p>
      <div className="card-actions">
        <button className="view-button">View</button>
        <button className="edit-button" onClick={handleEditClick}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button className="delete-button" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default StoryCard;