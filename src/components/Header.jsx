import { languageData } from "../../data.js";
import { useTheme } from "../context/ThemeContext.jsx";

function Header() {
  const {
    languageLabelHeading,
    themeSwitchHeading,
    name,
    introText,
    headerImgLocalPath,
    headerLinkImages,
    currentWorkingStatusText,
    courseLinkHref,
    courseNameText,
    navToContactText,
    eMail,
    eMailContactHref,
    sendMailText,
    greeting,
  } = languageData.en.header

  // Custom hook kullanımı
  const { theme, toggleTheme } = useTheme();
  return (
    <section
      className={`flex flex-row gap-8 pt-5 pb-20 justify-center w-full`}
      style={{
        backgroundColor: theme === "dark" ? "#2A262B" : "#F4F4F4",
        color: theme === "dark" ? "white" : "black",
        
      }}
    >
      {/* LEFT COLUMN: INTRO, LINKS, CONTACT */}
      <div className="flex flex-col gap-4">
        {/* Intro Text */}
        <p className="w-[500px] text-2xl pt-20">
          {greeting}
          <br />
          {introText(name)}
        </p>

        {/* Dynamic Links */}
        <div className="flex gap-4">
          {headerLinkImages.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={link.src}
                alt={link.alt}
                className="hover:scale-[120%] transition-transform"
              />
            </a>
          ))}
        </div>

        {/* Current Working Status */}
        <p>
          {currentWorkingStatusText}
          <a
            href={courseLinkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 underline"
          >
            {courseNameText}
          </a>
        </p>

        {/* Contact Info */}
        <p>
          {navToContactText}
          <a
            href={`${eMailContactHref}`}
            className="text-blue-500 underline hover:text-blue-700"
          >
            {sendMailText + eMail}
          </a>
        </p>
      </div>

      {/* RIGHT COLUMN: THEME SWITCH, LANGUAGE SELECT, HEADER IMAGE */}
      <div>
        {/* Language Selector and Theme Switch */}
        <div className="flex justify-evenly pb-5">
          <input
            type="checkbox"
            class="checkbox"
            id="checkbox"
            onChange={toggleTheme}
          />
          <label
            style={{
              backgroundColor: theme === "dark" ? "black" : "#E92577",
            }}
            htmlFor="checkbox"
            className="checkbox-label"
          >
            <i className="fas fa-moon"></i>
            <i className="fas fa-sun"></i>
            <span className="ball"></span>
          </label>
          <p className="font-bold">
            <span className="pr-1 ">
              {theme === "dark" ? "LIGHT MODE |" : " DARK MODE |"}
            </span>
            <span className="text-[#E92577]">TÜRKÇE</span>'YE GEÇ
          </p>
        </div>

        {/* Header Image */}
        <div className="pt-20">
        <img
          src={headerImgLocalPath}
          width={"275px"}
          alt="Header Image"
          className="rounded-[22px] pt-4 pl-4 ml-10 bg-[#E92577]"
        />
        </div>
      </div>
    </section>
  );
}

export default Header;
