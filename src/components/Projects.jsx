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
import { languageData } from "../../Data";

function Projects() {
  const { theme } = useTheme();
  const { projectsHeading, firstProject, firstProjectTags, secondProject, secondProjectTags } = languageData.en.projects

  const projects = [
    {
      title: firstProject[0],
      description: firstProject[1],
      tags: firstProjectTags,
      github: "https://github.com/berk-karademir/witflix",
      live: "https://witflix-iota.vercel.app/", 
      img: "./images/witflix.png", 
      bgColor: theme === "dark" ? "#2D3235" :"#DDEEFE", 
    },
    {
      title: secondProject[0],
      description: secondProject[1],
      tags: secondProjectTags,
      github: "#", 
      live: "https://s8-pizza-project.vercel.app/", 
      img: "./images/pizza.png", 
      bgColor: theme === "dark" ? "#495351" :"#D9F6F1",    },
  ];

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#484148" : "#ffffff",
        color: theme === "dark" ? "white" : "black",
        padding: "5rem 5rem",
      }}
    >
      <h2 className="text-center pb-14 text-4xl">{projectsHeading}</h2>

      <div className="flex justify-center max-h-[700px]">
        <CardGroup className="flex justify-center w-5/6 gap-11 flex-wrap">
          {projects.map((project, index) => (
            <Card
            key={index}
            style={{
              backgroundColor: project.bgColor,
              border: "none",
              borderRadius: "8px",
              maxWidth: "350px",
              display: "flex",
              flexDirection: "column", // Kart içeriği yukarıdan aşağıya düzenlenir
              height: "100%", // Kartların boyutlarının eşit olması için
            }}
          >
            <CardBody
              className="flex flex-col justify-between p-7 flex-grow"
              style={{ flex: 1 }} // Gövde alanı esner ve img'yi en alta iter
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
                        backgroundColor: theme === "dark" ? "#525252" : "#ffffff",
                        color: theme === "dark" ? "#ffffff" : "#000000",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <CardLink
                  href={project.github}
                  className="font-bold"
                >
                  View on Github
                </CardLink>
                <CardLink
                  href={project.live}
                  className="font-bold"
                >
                  Go to app →
                </CardLink>
              </div>
            </CardBody>
            <CardImg
              alt={`${project.title} preview`}
              src={project.img}
              bottom
              style={{
                borderRadius: "0 0 8px 8px",
                objectFit: "cover", // Görseller düzgün kesilirse orantılı kalır
                maxHeight: "200px", // Görsellerin yüksekliğini sabitlemek için
                width: "100%", // Görseller kart genişliğine uyar
              }}
            />
          </Card>
          ))}
        </CardGroup>
      </div>
    </div>
  );
}

export default Projects;
