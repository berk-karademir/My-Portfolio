import React from "react";
import { languageData } from "../../data";
import { useTheme } from "../context/ThemeContext";

function Footer() {
  const { footerText, linkHeadings, footerLinksHrefs } = languageData.en.footer;
  const {theme} = useTheme();
  return (
    <div className="text-center"
    style={{
      backgroundColor: theme === "dark" ? "#484148" : "#ffffff",
      color: theme === "dark" ? "#D9D9D9" : "#777777",
      width:"100%",
    }}>
      <p>{footerText}</p>

      <div>
        {linkHeadings.map((heading, index) => (
          <a
            key={index}
            href={footerLinksHrefs[index]}
            target="_blank"
            rel="noopener noreferrer"
          >
            {heading}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer;
