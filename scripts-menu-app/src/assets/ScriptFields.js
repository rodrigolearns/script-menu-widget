import React from 'react';
import '../App.css'; // Ensure styles are applied

function ScriptFields({ script, onBack }) {
  return (
    <div className="script-detail">
      <div className="card script-card-large" style={{ backgroundImage: `linear-gradient(${script.gradient})`, position: 'relative' }}> {/* Add position: 'relative' here */}
        <div className="card-img-container">
          <h2 className="card-title">{script.title}</h2>
          <p className="script-instructions">Instructions: (To be added)</p>
          <p className="script-fields">Fields: (To be added)</p>
          <a href={script.github} className="github-icon-link">
            {/* Ensure the class used here is the same as in the list view to keep the icon size consistent */}
            <img src="/github-icon.svg" alt="GitHub Link" className="github-icon" />
          </a>
        </div>
        {/* Position the "Back" button at the bottom right */}
        <button onClick={onBack} style={{ position: 'absolute', bottom: '10px', right: '10px' }}>Back</button>
      </div>
    </div>
  );
}

export default ScriptFields;