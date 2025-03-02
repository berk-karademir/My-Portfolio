import React, { useContext } from "react";
import { useTheme } from "../context/ThemeContext";
import { languageData } from "../../myData.js";
import { LanguageContext } from "../context/LanguageContext";

function Profile() {
  
  const { currentLanguage } = useContext(LanguageContext);
  const { currentTheme } = useTheme();

  const {
    profileHeading,
    basicInfoText,
    dateOfBirth,
    currentLocation,
    education,
    preferredRole,
    aboutMe,
  } = languageData[currentLanguage].profile

  return (
    <section
      style={{
        backgroundColor: currentTheme === "dark" ? "#121212" : "#F4F4F4",
        color: currentTheme === "dark" ? "#ffffff" : "#000000",
        paddingBottom: "5rem",
      }}
    >
      <h2 className="text-center py-12 text-4xl">{profileHeading}</h2>
      <div className="flex justify-center gap-32">
        <div
          style={{
            backgroundColor:
            currentTheme === "dark" ? "rgba(82,82,82,1)" : "rgba(255,255,255,1)",
            color: currentTheme === "dark" ? "#ffffff" : "#000000",
            boxShadow: `10px 10px 1px ${
              currentTheme === "dark" ? "rgba(82,82,82,0.5)" : "rgba(82,82,82,0.5)"
            }`,
            padding: "3rem",
            borderRadius: "8px",
          }}
        >
          <h4 className="text-2xl pb-10 text-[#EA2678]" style={{
            fontFamily:"Playfair Display"
            
          }}>{basicInfoText}</h4>
          <table>
            <tbody>
              <tr>
                <td className="pr-20 pb-6">
                  <strong>{dateOfBirth[0]}</strong>
                </td>
                <td className="pb-6">{dateOfBirth[1]}</td>
              </tr>
              <tr>
                <td>
                  <strong>{currentLocation[0]}</strong>
                </td>
                <td>{currentLocation[1]}</td>
              </tr>
              <tr>
                <td>
                  <strong>{education[0]}</strong>
                </td>
                <td>
                  <br />
                  {education[1]}
                  <br /> {education[2]}
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <strong>{preferredRole[0]}</strong>
                </td>
                <td>{preferredRole[1]}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col justify-center pl-7 max-w-[500px]">
          <h3 className="text-2xl pb-5" style={{
            fontFamily:"Playfair Display"
          }}>{aboutMe[0]}</h3>
          <p className="pb-5 "
          />
          {aboutMe[1]}
          <p>{aboutMe[2]}</p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
