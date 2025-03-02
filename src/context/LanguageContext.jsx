import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { languageData } from "../../myData.js";


export const LanguageContext = createContext();

export const LanguageContextProvider = ({children}) => {
    const [data, setData] = useState(languageData);

    const [currentLanguage, setCurrentLanguage] = useState(() => {
      const storedLang = localStorage.getItem("currentLanguage");
      if (storedLang) {
          return storedLang;
      } else {
          const browserLang = navigator.language || navigator.languages[0];
          return browserLang.startsWith("tr") ? "tr" : "en";
      }
    });

    useEffect(() => {
      if (currentLanguage) {
          localStorage.setItem("currentLanguage", currentLanguage);
      }
    }, [currentLanguage]);

    useEffect(() => {
      if (data) {
        axios
          .post("https://reqres.in/api/workintech", data)
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }, [currentLanguage, data, setData]);

    const toggleLanguage = () => {
      setCurrentLanguage((prev) => (prev === "en" ? "tr" : "en"));
    }

    return (
        <LanguageContext.Provider value={{data, setData, currentLanguage, toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}