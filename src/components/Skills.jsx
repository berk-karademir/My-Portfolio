import React, { useContext, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { languageData } from "../../myData.js";
import { LanguageContext } from "../context/LanguageContext";

function Skills() {
  const { currentLanguage } = useContext(LanguageContext);
  const { currentTheme } = useTheme();
  const { skillsHeading, currentSkills } = languageData[currentLanguage].skills;
  const [expanded, setExpanded] = useState(false);

  const visibleSkills = expanded ? currentSkills : currentSkills.slice(0, 8);

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
        <div className="flex justify-center gap-6 text-center pb-6 max-w-[700px] flex-wrap">
          {visibleSkills.map((skill, index) => (
            <div key={index} className="font-bold text-l">
              <img
                src={`images/${skill.toLowerCase()}-logo.png`}
                alt={`${skill} Logo`}
                width={"128px"}
                className="rounded-2xl"
              />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
      {currentSkills.length > 8 && (
        <button
          className="px-4 py-2 mb-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less ▲" : "Expand All ▼"}
        </button>
      )}
    </section>
  );
}

export default Skills;
