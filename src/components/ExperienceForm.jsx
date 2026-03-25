export default function ProfessionalForm({ experience, setExperience }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setExperience({
      ...experience,
      [name]: value,
    });
  };

  return (
    <div className="form">
      <h2>Professional Experience</h2>

      <input
        type="text"
        name="company"
        placeholder="Company"
        value={experience.company}
        onChange={handleChange}
      />

      <input
        type="text"
        name="position"
        placeholder="Position"
        value={experience.position}
        onChange={handleChange}
      />
    </div>
  );
}