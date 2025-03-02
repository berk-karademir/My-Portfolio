import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { LanguageContextProvider } from "./context/LanguageContext";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function AppContent() {
  const currentTheme = useTheme();
  console.log("Current theme in ThemeProvider:", currentTheme);

  return (
    <>
      <Header />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
   <ToastContainer toastStyle={{ backgroundColor: "crimson" }} />

    <LanguageContextProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </LanguageContextProvider>
    </> 
  );
}

export default App;