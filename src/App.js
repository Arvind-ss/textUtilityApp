import "./App.css";
import Alert from "./Components/Alert";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AboutDeveloper from "./Components/AboutDeveloper";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState("");

  //Dark mode
  let toogleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#1F3E34";
      
      showAlert("Dark Mode is Active", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light Mode is Active", "success ");
    }
  };
  // Dark Shade
  let toogleShade = (shade) => {
    if (mode === "dark") {
      document.body.style.backgroundColor = shade;
    }
  };

  //Alert
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(" ");
    }, 2000);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={
            <>
              <NavBar
                title="Text Utility App"
                about="About the App"
                mode={mode}
                toogleMode={toogleMode}
              />
                <Alert alert={alert} />
              
                <TextForm
                  heading="Enter the Text to analyze"
                  mode={mode}
                  toogleMode={toogleMode}
                  showAlert={showAlert}
                />
           
            </>
          }
        />        

        <Route
          path="/about"
          element={
            <>
            <NavBar
              title="Text Utility App"
              about="About the App"
              mode={mode}
              toogleMode={toogleMode}
             />
            <About mode={mode} toogleMode={toogleMode}/>          
             </>}
          />
          {/* <Route
            path="/aboutDeveloper"
            element={
              <>
              <NavBar
              title="Text Utility App"
              about="About the App"
              mode={mode}
              toogleMode={toogleMode}
              toogleShade={toogleShade}
             />
              <AboutDeveloper/>
              </>
            }
          /> */}
      </Routes>

      
    </>
  );
}

export default App;
