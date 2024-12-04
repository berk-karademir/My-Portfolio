import React from "react";
import {
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardLink,
  CardSubtitle,
  CardTitle,
  CardText,
} from "reactstrap";
import { languageData } from "../../data";

function Projects() {
  const { projectsHeading } = languageData.en.projects;
  return (
    <div style={{width:"1024px"}}>
      <h2> {projectsHeading}</h2>
      <CardGroup>
        {/* -----------  1st Card  -------------*/}
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="80%"
          />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Card Link</CardLink>
          </CardBody>
        </Card>

        {/* -----------  2nd Card  -------------*/}
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Card Link</CardLink>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Projects;
