import React, { useContext } from "react";
import { useTheme } from "../context/ThemeContext";
import { languageData } from "../../myData.js";
import { LanguageContext } from "../context/LanguageContext";

function Footer() {
  const { currentTheme } = useTheme();
  const { currentLanguage } = useContext(LanguageContext);
  
  const { footerText, linkHeadings, footerLinksHrefs } = languageData[currentLanguage].footer;
  const linkColors = ["#1769FF", "#0A0A14", "#0077B5", "#AF0C48"];

  return (
    <>
      <footer
        className="text-center flex justify-center items-center pt-20 pb-20"
        style={{
          backgroundColor: currentTheme === "dark" ? "#121212" : "#ffffff",
          color: currentTheme === "dark" ? "white" : "black",
        }}
      >
        <p className="text-3xl w-80 ">{footerText}</p>

        <div className="flex flex-col pl-12 font-[700] text-[1.5rem]">
          {linkHeadings.map((heading, index) => (
            <a
              key={index}
              href={footerLinksHrefs[index]}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: linkColors[index] || "#000000",
              }}
            >
              {heading}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}

export default Footer;
