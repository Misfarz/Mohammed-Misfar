import React from 'react';
import './Skills.css';
import downloadImage from '../../assets/download.png';  // Direct import
import Intern from '../../assets/Hostupcloud Tecnologies private Internship.pdf';

const experience = [
  {
    imageSrc: downloadImage,
    organisation: "HostUpCloud",
    role: "Internship",
    startDate: "Feb 2024",
    endDate: "May 2024",
  },
];

function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-content">
        <div className="skills-left">
          <h2 className='skills-text'>Skills</h2>
          <div className="skills-cards">
            <div className="skills-card">
              <h3>Programming Languages</h3>
              <p>Python, JavaScript, Visual Basic</p>
            </div>
            <div className="skills-card">
              <h3>Frontend</h3>
              <p>HTML, CSS, React</p>
            </div>
            <div className="skills-card">
              <h3>Multimedia</h3>
              <p>After Effects, Premiere Pro, CapCut</p>
            </div>
            <div className="skills-card">
              <h3>UI/UX Design</h3>
              <p>Photoshop, Figma</p>
            </div>
            <div className="skills-card">
              <h3>Office Suite Tools</h3>
              <p>Excel, PowerPoint, Word</p>
            </div>
          </div>
        </div>
        <div className="skills-right">
          <h2>Experience</h2>
          <ul className="exp-container">
            {experience.map((historyItem, id) => (
              <li key={id} className="exp-item">
                <a href="https://www.hostupcloud.com/" target="_blank" rel="noopener noreferrer">
                  <img
                    src={historyItem.imageSrc}  // Use the imported image directly
                    alt={`${historyItem.organisation} logo`}
                    className="company-logo"
                  />
                </a>
                <div className="exp-details">
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <a className="intern" href={Intern} download>
                    Certificate of Completion
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
