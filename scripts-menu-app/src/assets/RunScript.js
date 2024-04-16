import React from 'react';
import '../App.css'; // Ensure this is imported to apply the styles

const scripts = [
  { title: 'Data Migration Script', img: 'https://via.placeholder.com/150', github: 'https://github.com/example/data-migration' },
  { title: 'User Analysis Script', img: 'https://via.placeholder.com/150', github: 'https://github.com/example/user-analysis' },
  { title: 'Server Cleanup Script', img: 'https://via.placeholder.com/150', github: 'https://github.com/example/server-cleanup' }
];

function RunScript() {
  return (
    <div className="script-list">
      {scripts.map(script => (
        <div className="card script-card" key={script.title}>
          <div className="card-img-container">
            <img className="card-img-top" src={script.img} alt={script.title} />
            <h5 className="card-title">{script.title}</h5>
          </div>
          <div className="github-link">
            <a href={script.github} className="btn btn-primary">GitHub Link</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RunScript;