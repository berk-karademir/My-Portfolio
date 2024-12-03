import React from "react";
import { languageData } from "../../Data";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
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
      <h2>{profileHeading}</h2>
      <div>
      <Card >
      <CardBody>
        <CardTitle tag="h3">
          {basicInfoText}
        </CardTitle>
        <CardText>
          <p>{dateOfBirth[0]}{dateOfBirth[1]}</p>
        </CardText>
        <CardText>
          <p>{currentLocation[0]}{currentLocation[1]}</p> 
        </CardText>
        <CardText>
          <p>{education[0]}{education[1]}</p> 
        </CardText>
        <CardText>
          <p>{preferredRole[0]} {preferredRole[1]} </p> 
        </CardText>
      </CardBody>
    </Card>
    <div>
        <h4>{aboutMe[0]}</h4>
        <p>{aboutMe[1]}</p>
        <p>{aboutMe[2]}</p>
    </div>
      </div>
    </section>
  );
}

export default Profile;
