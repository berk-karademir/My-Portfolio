import React from 'react'
import { languageData } from '../../data'
function Skills() {
    const {skillsHeading, currentSkills} = languageData.en.skills
  return (
    <div>
      <h2>{skillsHeading}</h2>
      <section className='flex gap-4 text-center'>
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
