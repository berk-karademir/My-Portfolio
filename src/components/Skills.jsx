import React from "react";
import { useTheme } from "../context/ThemeContext";
import { languageData } from "../../Data";

function Skills() {
  const { skillsHeading, currentSkills } = languageData.en.skills
  const { theme } = useTheme();

  return (
    <div
      className="text-center w-full"
      style={{
        backgroundColor: theme === "dark" ? "#484148" : "#ffffff",
        color: theme === "dark" ? "#D9D9D9" : "black",
      }}
    >
      <h2 className="py-16 text-4xl">{skillsHeading}</h2>
      <div className="flex flex-row justify-center">
        <section className="flex gap-4 text-center pb-24">
          {currentSkills.map((skill, index) => (
            <div key={index} className="font-bold text-l">
              <img
                src={`images/${skill.toLowerCase()}-logo.png`}
                alt={`${skill} Logo`}
              />
              <span className="text-[#777777]">{skill}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Skills;
