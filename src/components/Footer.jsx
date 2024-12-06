import React from "react";
import { useTheme } from "../context/ThemeContext";
import { languageData } from "../../data.js"

function Footer() {
  const { footerText, linkHeadings, footerLinksHrefs } = languageData.en.footer;
  const { theme } = useTheme();


  const linkColors = ["#1769FF", "#0A0A14", "#0077B5", "#AF0C48"];

  return (
    <>
    <div
      className="text-center flex justify-center items-center pt-20 pb-20"
      style={{
        backgroundColor: theme === "dark" ? "#484148" : "#ffffff",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      <p className="text-3xl w-80 ">{footerText}</p>

      <div className="flex flex-col pl-12 font-[700] text-[1.5rem]" >
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
      
    </div>
    <p className="text-center italic text-[12px] font-bold bg-inherit text-inherit">Berk Karademir</p>
    </>
  );
}

export default Footer;
