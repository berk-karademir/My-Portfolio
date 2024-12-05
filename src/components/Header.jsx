import { Form, FormGroup, Label, Input } from "reactstrap";
import { languageData } from "../../data.jsx";
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
  } = languageData.en.header;

  // Custom hook kullanımı
  const { theme, toggleTheme } = useTheme();
  return (
    <section
      className={`flex flex-row gap-8 p-4 justify-center w-full`}
      style={{
        backgroundColor: theme === "dark" ? "#2A262B" : "#F4F4F4",
        color: theme === "dark" ? "white" : "black",
        paddingTop: "5rem",
      }}
    >
      {/* LEFT COLUMN: INTRO, LINKS, CONTACT */}
      <div className="flex flex-col gap-4">
        {/* Intro Text */}
        <p className="w-96">
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
                className="hover:scale-105 transition-transform"
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
            class="checkbox-label"
          >
            <i class="fas fa-moon"></i>
            <i class="fas fa-sun"></i>
            <span class="ball"></span>
          </label>
          <p>
            <span className="pr-1">
              {theme === "dark" ? "LIGHT MODE |" : " DARK MODE |"}
            </span>
            <span className="text-[#E92577]">TÜRKÇE'YE GEÇ</span>
          </p>
        </div>

        {/* Header Image */}
        <img
          src={headerImgLocalPath}
          width="400px"
          height="400px"
          alt="Header Image"
          className="rounded-md shadow-md"
        />
      </div>
    </section>
  );
}

export default Header;
