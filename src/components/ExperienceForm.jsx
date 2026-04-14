import { useState } from "react";

export default function ProfessionalForm({ experience, setExperience }) {

  //=== LOCAL STATE VARIABLES ===
  const [newExperience, setNewExperience] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    bullets: [],
  })

  const [bulletInput, setBulletInput] = useState({description: ""});

  //=== HANDLERS ===
  const handleChange = (e) => {
    const {name, value} = e.target;

    setNewExperience({
      ...newExperience,
      [name]: value,
    });
  }

  const handleDescButton = () => {
    if (bulletInput.description.length == 0) return;
    if (newExperience.bullets.length === 3) return;

    setNewExperience({
      ...newExperience,
      bullets: [...newExperience.bullets, bulletInput.description]
    })

    setBulletInput({description: ""});
  }

  const handleSubmit = () => {
    if (
      newExperience.company.trim() === "" ||
      newExperience.position.trim() === "" ||
      newExperience.startDate === ""
    ) {
      return;
    }

    setExperience(prev => [...prev, newExperience]);

    setNewExperience({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      bullets: [],
    });

    setBulletInput({description: ""});
  };

  //=== RETURN STATEMENT ===
  return (
    <div className="form">
      <h2>Professional Experience</h2>

      <input
        type="text"
        name="company"
        placeholder="Company"
        value={newExperience.company}
        onChange={handleChange}
        autoComplete="off"
      />

      <input
        type="text"
        name="position"
        placeholder="Position"
        value={newExperience.position}
        onChange={handleChange}
        autoComplete="off"
      />

      <input
        type="date"
        name="startDate"
        placeholder="Start Date"
        value={newExperience.startDate}
        onChange={handleChange}
        autoComplete="off"
      />

      <input
        type="date"
        name="endDate"
        placeholder="End Date"
        value={newExperience.endDate}
        onChange={handleChange}
        autoComplete="off"
      />

      <div id="bulletpoints">
        <input
          type="text"
          name="description"
          value={bulletInput.description}
          onChange={(e) => {
            const {name, value} = e.target;

            setBulletInput({
              ...bulletInput,
              [name]: value,
            });
          }}
          placeholder="Job Description..."
          autoComplete="off"
        />

        <button id="descButton" onClick={handleDescButton} type="button">+ Bulletpoint</button>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={!newExperience.company || !newExperience.position}
      >Submit Experience</button>
    </div>
  );
}