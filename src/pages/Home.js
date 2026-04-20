import React from "react";
import profilePic from "../Nayana.png";

function Home() {
  return (
    <div className="container">
        
      <h1>About Me</h1>

      <img src={profilePic} alt="profile" className="profile" />

      <p style={{ textAlign: "center" }}>
        I am a student passionate about technology and web development.
      </p>

      <h2>Research Interests</h2>
      <p>AI, Machine Learning, Web Development</p>

      <h2>Personal Details</h2>
      <ul>
        <li><strong>Name:</strong> Sankuratri Nayanasakhi</li>
        <li><strong>Phone:</strong> 7842341650</li>
        <li><strong>Email:</strong> sakhins3@gmail.com</li>
        <li><strong>College Email:</strong> se23umcs056@mahindrauniversity.edu.in</li>
        <li><strong>Skills:</strong> HTML, CSS, JavaScript, React</li>
      </ul>
    </div>
  );
}

export default Home;