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
import { useTheme } from "../context/ThemeContext";

function Projects() {
  const { projectsHeading } = languageData.en.projects;
  const { theme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#484148" : "#ffffff",
        color: theme === "dark" ? "white" : "black",
        padding: "5rem 5rem",
      }}
    >
      <h2 className="text-center pb-14 text-4xl"> {projectsHeading}</h2>

      <div className="flex justify-center">
        <CardGroup className="flex justify-center w-5/6 gap-11">
          {/* -----------  1st Card  -------------*/}
          <Card borderless>
            <CardImg
              alt="Card image cap"
              src="https://picsum.photos/318/180"
              top
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
    </div>
  );
}

export default Projects;
