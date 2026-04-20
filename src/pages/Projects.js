import React from "react";

function Projects() {
  return (
    <div className="container">
      <h1>My Projects</h1>

      <div className="project">
        <h3>Library Management System</h3>
        <p>A system to manage library records ans d issue/return</p>
        <a href="https://github.com/sakhins-design/Library-Management-System.git">GitHub Link</a>
      </div>

      <div className="project">
        <h3>NLP Automated Text Summarizer</h3>
        <p>Text summarization system</p>
        <a href="https://github.com/sakhins-design/NLP-Automated-Text-Summarizer.git">GitHub Link</a>
      </div>

    </div>
  );
}

export default Projects;