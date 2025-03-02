import React from "react";
import {
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardLink,
  CardTitle,
  CardText,
} from "reactstrap";
import { useTheme } from "../context/ThemeContext";
import { languageData } from "../../myData.js";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function Projects() {
  
  const { currentTheme } = useTheme();
  const { currentLanguage } = useContext(LanguageContext);

  const { projects } = languageData[currentLanguage];
  const cardsBgColors = {dark: ["#2D3235", "#3B4C49"], light: ["#DDEEFE", "#D9F6F1"],};

  return (
    <div
      style={{
        backgroundColor: currentTheme === "dark" ? "#2F3B4C" : "#ffffff",
        color: currentTheme === "dark" ? "white" : "black",
        padding: "5rem 5rem",
      }}
    >
      <h2 className="text-center pb-14 text-4xl max-w-[700px] mx-auto">{projects[0].header}</h2>

      <div className="flex justify-center max-h-[700px]">
        <CardGroup className="flex justify-center w-5/6 gap-11 flex-wrap">
          {projects.slice(1).map((project, index) => (
            <>
            
            <Card
              key={index}
              style={{
                backgroundColor: cardsBgColors[currentTheme][index % cardsBgColors[currentTheme].length],
                border: "none",
                borderRadius: "8px",
                maxWidth: "350px",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <CardBody
                className="flex flex-col justify-between p-7 flex-grow"
                style={{ flex: 1 }}
              >
                <div>
                  <CardTitle
                    tag="h5"
                    className="font-bold text-2xl"
                    style={{
                      fontFamily: "Playfair Display",
                    }}
                  >
                    {project.title}
                  </CardTitle>
                  <CardText className="my-3 indent-3">{project.description}</CardText>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-sm px-3 py-1 rounded-full shadow font-[600]"
                        style={{
                          fontSize: "0.85rem",
                          fontFamily: "Playfair Display",
                          backgroundColor: currentTheme === "dark" ? "#525252" : "#ffffff",
                          color: currentTheme === "dark" ? "#ffffff" : "#000000",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-around items-center">
                  {project.links.map((link, idx) => (
                    <CardLink
                      key={idx}
                      href={link.href}
                      target="_blank"
                      className={`
                        font-bold 
                        px-4 py-2 mt-2
                        rounded-lg 
                        transition-all 
                        duration-300 
                        ease-in-out 
                        hover:scale-110 
                        active:scale-95 
                        shadow-md 
                        hover:shadow-lg 
                        ${
                          currentTheme === "dark"
                            ? "bg-gray-700 text-white hover:bg-gray-600"
                            : "bg-blue-500 text-white hover:bg-blue-600"
                        }
                      `}
                    >
                      {link.name} &nbsp; &#129157;
                      
                    </CardLink>
                  ))}
                </div>
              </CardBody>
              <CardImg
                alt={project.img.alt}
                src={project.img.src}
                bottom
                style={{
                  borderRadius: "0 0 8px 8px",
                  objectFit: "cover",
                  maxHeight: "200px",
                  width: "100%",
                }}
              />
            </Card>
            </>
          ))}
         
        </CardGroup>
      </div>
    </div>
  );
}

export default Projects;