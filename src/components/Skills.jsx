import React from 'react'
import { skills } from '../../data'
function Skills() {
    const {skillsHeadingEN, skillsHeadingTR, currentSkills} = skills
  return (
    <div>
      <h2>{skillsHeadingEN}</h2>
      <section>
                {currentSkills.map((skill, index) => (
                    
                    <div key={index}>
                        <img src={`images/${skill.toLowerCase()}-logo.png`} alt={`${skill}Logo`} />
                        <span>{skill}</span>
                    </div>
                ))}
            </section>
    </div>
  )
}

export default Skills
