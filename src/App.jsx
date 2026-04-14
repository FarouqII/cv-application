import { useState } from "react";
import {DEF_NAME, DEF_EMAIL, DEF_CITY, DEF_CNTRY, DEF_TEL} from './placeholders.js';
import PersonalInfoForm from "./components/PersonalInfoForm";
import SummaryForm from "./components/SummaryForm";
import EducationForm from "./components/EducationForm.jsx";
import ExperienceForm from "./components/ExperienceForm.jsx";
import CVPreview from "./components/CVPreview";
import Navigation from "./components/Navigation";

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

      default:
        return null;
    }
  };

  return (
    <div id="content">
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