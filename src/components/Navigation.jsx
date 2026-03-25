export default function Navigation({ currentSection, setCurrentSection }) {
  return (
    <nav>
      <button onClick={() => setCurrentSection("personal")}>
        Personal
      </button>

      <button onClick={() => setCurrentSection("summary")}>
        Summary
      </button>

      <button onClick={() => setCurrentSection("experience")}>
        Experience
      </button>

      <button onClick={() => setCurrentSection("education")}>
        Education
      </button>
    </nav>
  );
}