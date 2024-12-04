import { Form, FormGroup, Label, Input } from "reactstrap";
import { languageData } from "../../data.jsx";

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
  } = languageData.en.header;

  return (
    <section className="flex flex-col gap-8 p-4 md:flex-row">
      {/* LEFT COLUMN: INTRO, LINKS, CONTACT */}
      <div className="flex flex-col gap-4">
        {/* Intro Text */}
        <p className="indent-8 text-lg">{introText(name)}</p>

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
      <div className="flex flex-col items-center gap-4">
        {/* Language Selector and Theme Switch */}
        <Form className="w-full">
          <FormGroup>
            <Label htmlFor="languageSelect" className="block font-bold">
              {languageLabelHeading}
            </Label>
            <Input
              id="languageSelect"
              name="languageSelect"
              type="select"
              className="w-full border border-gray-300 rounded-md"
            >
              {languageData.langOptions.map((lang, index) => (
                <option key={index} value={lang}>
                  {lang}
                </option>
              ))}
            </Input>
          </FormGroup>

          <FormGroup switch>
            <Label check htmlFor="toggleDarkTheme">
              {themeSwitchHeading}
            </Label>
            <Input
              id="toggleDarkTheme"
              name="toggleDarkTheme"
              type="switch"
              role="switch"
            />
          </FormGroup>
        </Form>

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
