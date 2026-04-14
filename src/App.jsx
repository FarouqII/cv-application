import { useState, useEffect } from "react";
import {DEF_NAME, DEF_EMAIL, DEF_CITY, DEF_CNTRY, DEF_TEL} from './placeholders.js';
import PersonalInfoForm from "./components/PersonalInfoForm";
import SummaryForm from "./components/SummaryForm";
import EducationForm from "./components/EducationForm.jsx";
import ExperienceForm from "./components/ExperienceForm.jsx";
import CVPreview from "./components/CVPreview";
import Navigation from "./components/Navigation";
import SplashScreen from "./components/SplashScreen";

export default function App() {
  // State
  const [personalInfo, setPersonalInfo] = useState({
    name: DEF_NAME,
    email: DEF_EMAIL,
    city: DEF_CITY,
    country: DEF_CNTRY,
    tel: DEF_TEL,
  });

  const [summary, setSummary] = useState({
    summary: "",
  })

  const [experience, setExperience] = useState([]);

  const [education, setEducation] = useState({
    school: "",
    degree: "",
    courses: [],
  });

  const [currentSection, setCurrentSection] = useState("personal");

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleReset = () => {
    setPersonalInfo({
      name: DEF_NAME,
      email: DEF_EMAIL,
      city: DEF_CITY,
      country: DEF_CNTRY,
      tel: DEF_TEL,
    });
    setEducation({
      school: "",
      degree: "",
      courses: [],
    });
    setExperience([]);
    setSummary({ summary: "" });
    setCurrentSection("personal");
  };

  const handlePrint = () => {
    window.print();
  };

  // Render correct form
  const renderForm = () => {
    switch (currentSection) {
      case "personal":
        return (
          <PersonalInfoForm
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
          />
        );

      case "summary":
        return (
          <SummaryForm
            summary={summary}
            setSummary={setSummary}
          />
        );

      case "experience":
        return (
          <ExperienceForm
            experience={experience}
            setExperience={setExperience}
          />
        );

      case "education":
        return (
          <EducationForm
            education={education}
            setEducation={setEducation}
          />
        );

      case "final":
        return (
          <div className="final-actions">
            <button className="btn-99" onClick={handleReset}>Reset</button>
            <button className="btn-41" onClick={handlePrint}>Print</button>
          </div>
        )

      default:
        return null;
    }
  };

  return (
    <div id="content">
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <aside>
        <Navigation
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />

        {renderForm()}
      </aside>

      <div id="previewContainer">
        <div id="camera" className={currentSection}>
          <CVPreview
            personalInfo={personalInfo}
            summary={summary}
            education={education}
            experience={experience}
            currentSection = {currentSection}
          />
        </div>
      </div>
    </div>
  );
}