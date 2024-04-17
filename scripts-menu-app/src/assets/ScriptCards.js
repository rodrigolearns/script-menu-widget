import React, { useState } from 'react';
import '../App.css';
import scripts from './ScriptList';
import ScriptFields from './ScriptFields';

function ScriptCards() {
  const [selectedScript, setSelectedScript] = useState(null);

  const handleCardClick = (script) => {
      setSelectedScript(script);
  };

  if (selectedScript) {
    return <ScriptFields script={selectedScript} onBack={() => setSelectedScript(null)} />;
  }

  return (
    <div className="script-list">
      {scripts.map((script, index) => (
        <div className="card script-card" key={script.title} style={{ backgroundImage: `linear-gradient(${script.gradient})` }} onClick={() => handleCardClick(script)}>
          <div className="card-img-container">
            <h5 className="card-title">{script.title}</h5>
            <a href={script.github} className="github-icon-link">
              <img src="/github-icon.svg" alt="GitHub Link" className="github-icon" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ScriptCards;