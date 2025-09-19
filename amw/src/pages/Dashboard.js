import React, { useState } from 'react';
import StoryCard from '../components/StoryCard.js';
import '../styles/Dashboard.css';

function Dashboard() {
  const [stories, setStories] = useState([]);

  const handleAddStory = () => {
    const newStory = {
      id: Date.now(),
      title: 'New Story',
      chapters: 0,
      moments: 0,
    };
    setStories([...stories, newStory]);
  };

  const handleDeleteStory = (storyId) => {
    setStories(stories.filter(story => story.id !== storyId));
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>A Moment With ...</h2>
        <button className="add-story-button" onClick={handleAddStory}>+ Add Story</button>
      </div>
      <div className="story-grid">
        {stories.map(story => (
          <StoryCard
            key={story.id}
            title={story.title}
            chapters={story.chapters}
            moments={story.moments}
            onDelete={() => handleDeleteStory(story.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;