import React, { useState } from 'react';

function StoryCard({ story, chapters, moments, onDelete, onUpdateTitle, onEdit }) {
  const { id, title } = story;
  
  const [isEditing, setIsEditing] = useState(false);
  const [storyTitle, setStoryTitle] = useState(title);
  const [isSaving, setIsSaving] = useState(false);

  const handleEditClick = async () => {
    if (isEditing) {
      if (storyTitle.trim() === title) {
        setIsEditing(false);
        return;
      }
      
      // Temporarily store original title for rollback
      const originalTitle = title;

      setIsSaving(true);
      try {
        await onUpdateTitle(id, storyTitle.trim());
        setIsEditing(false);
      } catch (error) {
        console.error("Failed to update story title:", error);
        // CRITICAL FIX: Replaced alert() with console error and local state rollback
        console.error("Failed to save title. Story title reverted to original."); 
        setStoryTitle(originalTitle); 
      } finally {
        setIsSaving(false);
      }
    } else {
      setIsEditing(true);
    }
  };

  const handleTitleChange = (e) => {
    setStoryTitle(e.target.value);
  };
  
  const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
          handleEditClick();
          e.currentTarget.blur(); 
      }
      if (e.key === 'Escape') {
          setStoryTitle(title);
          setIsEditing(false);
      }
  };

  return (
    <div className="story-card">
      {isEditing ? (
        <input 
          type="text" 
          value={storyTitle} 
          onChange={handleTitleChange}
          onKeyDown={handleKeyDown} 
          className="editable-title-input" 
          disabled={isSaving}
          autoFocus 
        />
      ) : (
        <h4 className="story-title">{storyTitle}</h4>
      )}
      
      <p className="story-meta">{chapters} Chapters | {moments} Moments</p>
      
      <div className="card-actions">
        {/* The View button should navigate to the Story Editor page */}
        <button className="view-button" onClick={() => onEdit(id)} disabled={isEditing || isSaving}>
          View/Edit
        </button>
        
        {/* The Edit button now controls the inline editing state */}
        <button 
          className="edit-button" 
          onClick={handleEditClick} 
          disabled={isSaving}
        >
          {isSaving ? 'Saving...' : (isEditing ? 'Save' : 'Rename')}
        </button>
        
        <button className="delete-button" onClick={() => onDelete(id)} disabled={isEditing || isSaving}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default StoryCard;
