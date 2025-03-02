import { useContext } from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { languageData } from "../../myData.js";
function Header() {

  const { currentTheme, toggleTheme } = useTheme();
  const { currentLanguage, toggleLanguage } = useContext(LanguageContext);

  const {en, tr} = languageData.langOptions;
  const {
    
    introText,
    currentStatusText,
    greeting,
    name,
    headerImgLocalPath,
    headerLinksImages,
    courseLinkHref,
    navToContactText,
    sendMailText,
    eMail,
    eMailContactHref,
    courseName,
  } = languageData[currentLanguage].header;
  return (
    <header
      className="flex justify-evenly pt-10 px-96"
      style={{
        backgroundColor: currentTheme === "dark" ? "#121212" : "#F4F4F4",
        color: currentTheme === "dark" ? "white" : "black",
      }}
    >
      <div className="flex flex-col justify-center">
        {/* Intro Text */}
        <p className="text-2xl max-w-3xl">
          {greeting}
          <br />
          {introText(name)}
        </p>

        {/* Current Working Status */}
        <p className="text-xl mt-4">
          <a
            href={courseLinkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 underline"
          ></a>
          {currentStatusText(courseName)}
        </p>

        {/* Contact Info */}
        <p className="text-xl">
          {navToContactText}
          <a
            href={`${eMailContactHref}`}
            className="text-blue-500 underline hover:text-blue-700"
          >
            {sendMailText + eMail}
          </a>
        </p>
        <span className="flex gap-3 my-2">
          {Object.entries(headerLinksImages).map(([key, link], index) => {
            const linkData =
              key === "github"
                ? currentTheme === "dark"
                  ? link.light
                  : link.dark
                : link;

            return (
              <a
                key={index}
                href={linkData.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkData.src}
                  alt={linkData.alt}
                  className="hover:scale-[120%] transition-transform max-w-[50px]"
                />
              </a>
            );
          })}
        </span>
      </div>

      <div className="flex flex-col items-center font-bold">
        <div className="flex gap-1">
          <input
            type="checkbox"
            class="checkbox"
            id="checkbox"
            onChange={toggleTheme}
          />
          <label
            style={{
              backgroundColor: currentTheme === "dark" ? "black" : "#E92577",
            }}
            htmlFor="checkbox"
            className="checkbox-label"
          >
            <i className="fas fa-moon"></i>
            <i className="fas fa-sun"></i>
            <span className="ball"></span>
          </label>

          <span>
          {currentTheme === "dark"
              ? currentLanguage === "tr"
                ? "AÇIK TEMA |"
                : "LIGHT MODE |"
              : currentLanguage === "tr"
              ? "KARANLIK TEMA |"
              : "DARK MODE |"}
          </span>

          {/* lang toggler */}
          <div className="flex gap-1" onClick={toggleLanguage}>
            <img
              src="https://www.svgrepo.com/show/348388/language.svg"
              alt="lang-ico"
              className={`w-5 h-7 pb-1 ${
                currentTheme === "dark" ? "invert" : ""
              }`}
            />
            {currentLanguage === "en" ? tr : en}
          </div>
        </div>

        <span>
          <img
            src={headerImgLocalPath}
            alt=""
            width={"275px"}
            className="bg-blue-900 pl-5 pt-5 rounded-2xl "
          />
        </span>
      </div>
    </header>
  );
}

export default Header;
