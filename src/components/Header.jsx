import { Form, FormGroup, Label, Input } from "reactstrap";
import { languageData } from "../../data";
import { useState } from "react";

function Header() {
  const {
    name,
    introText,
    headerImgLocalPath,
    gitHubLogoLocalPath,
    currentWorkingStatusText,
    courseLinkHref,
    eMailContact,
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
*/
  return (
    <div >
      <p>{introText(name)}</p>
      <img
        src={headerImgLocalPath}
        width="400px"
        height="400px"
        alt="Header Image"
      />

      <p>
        My Github Profile
        <a
          href="https://github.com/berk-karademir"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={gitHubLogoLocalPath}
            alt="Github Link"
            height="64px"
            width="64px"
          />
        </a>
      </p>

      <p>
        {currentWorkingStatusText}

        <a href={courseLinkHref} target="_blank" className="text-red-500">
          Workintech
        </a>
      </p>

      <p>
        Contact me from here ➜
        <a href={`mailto:${eMailContact}`}>Send Mail to: {eMailContact}</a>
        
      </p>
    </div>
  );
}

export default Header;
