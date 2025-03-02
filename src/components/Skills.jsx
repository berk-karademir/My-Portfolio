import React, { useContext } from "react";
import { useTheme } from "../context/ThemeContext";
import { languageData } from "../../myData.js";
import { LanguageContext } from "../context/LanguageContext";

function Skills() {
  const { currentLanguage } = useContext(LanguageContext);
  const { currentTheme } = useTheme();
  const { skillsHeading, currentSkills } = languageData[currentLanguage].skills;

  return (
    <section
      className="text-center w-full"
      style={{
        backgroundColor: currentTheme === "dark" ? "#2F3B4C" : "#ffffff",
        color: currentTheme === "dark" ? "white" : "black",
      }}
    >
      <h2 className="py-16 text-4xl">{skillsHeading}</h2>
      <div className="flex flex-row justify-center">
        <div className="flex gap-4 text-center pb-24">
          {currentSkills.map((skill, index) => (
            <div key={index} className="font-bold text-l">
              <img
                src={`images/${skill.toLowerCase()}-logo.png`}
                alt={`${skill} Logo`}
              />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
