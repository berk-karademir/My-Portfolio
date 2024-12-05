import React from "react";
import { languageData } from "../../data";
import { useTheme } from "../context/ThemeContext";

const {
  profileHeading,
  basicInfoText,
  dateOfBirth,
  currentLocation,
  education,
  preferredRole,
  aboutMe,
} = languageData.en.profile;

function Profile() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#2A262B" : "#F4F4F4",
        color: theme === "dark" ? "#ffffff" : "#000000",
        paddingBottom: "5rem",
      }}
    >
      <h2 className="text-center py-12 text-4xl">{profileHeading}</h2>
      <section className="flex justify-center gap-10">
        <div
          style={{
            backgroundColor:
              theme === "dark" ? "rgba(82,82,82,1)" : "rgba(255,255,255,1)",
            color: theme === "dark" ? "#ffffff" : "#000000",
            boxShadow: `10px 10px 1px ${
              theme === "dark" ? "rgba(82,82,82,0.5)" : "rgba(82,82,82,0.5)"
            }`,
            padding: "3rem",
            borderRadius: "8px",
          }}
        >
          <h4 className="text-lg pb-10">{basicInfoText}</h4>
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

        <div className="flex flex-col justify-center">
          <h3 className="text-2xl pb-5" style={{
            fontFamily:"Playfair Display"
          }}>{aboutMe[0]}</h3>
          <p className="pb-5"
            dangerouslySetInnerHTML={{
              __html: aboutMe[1]
                .replace(
                  "I graduated in 2020 from university,",
                  "I graduated in 2020 from university,<br />"
                )
                .replace(
                  "i have worked in chain-store brand in retail industry about 3 years.",
                  "i have worked in chain-store brand in retail industry about 3 years.<br />"
                )
                .replace(
                  "I have been in a full-stack web developer bootcamp since September 2024.",
                  "I have been in a full-stack web developer bootcamp since September 2024.<br />"
                ),
            }}
          />
          <p>{aboutMe[2]}</p>
        </div>
      </section>
    </div>
  );
}

export default Profile;
