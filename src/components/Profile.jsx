import React from "react";
import { languageData } from "../../data";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Table,
} from "reactstrap";
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
  return (
    <section>
      <div >
      <h2>{profileHeading}</h2>
      <Table borderless >
        <tbody>
          <tr>
            <td><strong>{dateOfBirth[0]}</strong></td>
            <td>{dateOfBirth[1]}</td>
          </tr>
          <tr>
            <td><strong>{currentLocation[0]}</strong></td>
            <td>{currentLocation[1]}</td>
          </tr>
          <tr>
            <td><strong>{education[0]}</strong></td>
            <td>{education[1]}</td>
          </tr>
          <tr>
            <td><strong>{preferredRole[0]}</strong></td>
            <td>{preferredRole[1]}</td>
          </tr>
        </tbody>
      </Table>
    </div>
    </section>
  );
}

export default Profile;
