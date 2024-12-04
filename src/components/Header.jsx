import { Form, FormGroup, Label, Input } from "reactstrap";
import { languageData } from "../../data.jsx";

function Header() {
  const {
    languageLabelHeading,
    themeSwitchHeading,
    name,
    introText,
    headerImgLocalPath,
    navToGitHubText,
    gitHubLogoLocalPath,
    currentWorkingStatusText,
    courseLinkHref,
    courseNameText,
    navToContactText,
    eMailContact,
    sendMailText,
  } = languageData.en.header;

  /*
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode((darkMode) => !darkMode); // Dark mode durumunu tersine çevirir
  };
  <div className="fixed top-2.5 right-3.5 scroll-pt-2.5">
        <Form>
          <FormGroup switch>
            <Input type="switch" role="switch" checked={darkMode} onChange={handleClick} />
            <Label check> {`Dark Mode ${darkMode ? "ON" : "OFF"}`} </Label>
          </FormGroup>
        </Form>
      </div>
      https://reactstrap.github.io/?path=/docs/components-forms--input
*/
  return (
    <div className="flex flex-row">

      {/* INTRO & GITHUB & CONTACT */}
      <div>
        <p className="indent-8">{introText(name)}</p>

        {navToGitHubText}
        <a
          href="https://github.com/berk-karademir"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={gitHubLogoLocalPath}
            alt="GithubLink"
            height="64px"
            width="64px"
          />
        </a>

        <p>
          {currentWorkingStatusText}

          <a href={courseLinkHref} target="_blank" className="text-red-500">
            {courseNameText}
          </a>
        </p>

        <p>
          {navToContactText}
          <a href={`${eMailContact}`}>
            {sendMailText} {eMailContact}
          </a>
        </p>
      </div>

      {/* THEME SWITCH & LANGUAGE SELECT & HEADER IMG */}
      <div>
        <Form className="flex">
          <FormGroup>
            {/* checked = {} ve value = {}  bakmayı unutma*/}
            <Label htmlFor="languageSelect">{languageLabelHeading}</Label>
            <Input id="languageSelect" name="languageSelect" type="select">
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

        <img
          src={headerImgLocalPath}
          width="400px"
          height="400px"
          alt="HeaderImage"
        />
      </div>
    </div>
  );
}

export default Header;
