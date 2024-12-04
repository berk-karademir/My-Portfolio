import React from "react";
import { languageData } from "../../data";

function Footer() {
  const { footerText, linkHeadings, footerLinksHrefs } = languageData.en.footer;

  return (
    <div className="text-center">
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
