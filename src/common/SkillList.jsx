import React from 'react';

function SkillList({ src, Skill }) {
  return (
    <span className="container-skill1">
      <img src={src} alt="checkmark-icon" />
      <p>{Skill}</p>
    </span>
  );
}

export default SkillList;