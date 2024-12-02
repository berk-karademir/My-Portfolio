import React from 'react'
import { languageData } from '../../Data'
function Skills() {
    const {skillsHeading, currentSkills} = languageData.en.skills
  return (
    <div>
      <h2>{skillsHeading}</h2>
      <section>
                {currentSkills.map((skill, index) => (
                    //image files' name must be correct: skillname-logo.png
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
