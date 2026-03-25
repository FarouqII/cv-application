export default function CVPreview({ personalInfo, summary, education, experience, currentSection }) {
  return (
    <div id="preview">
      <section id="personal" className={currentSection === "personal" ? "active" : "inactive"}>
        <h1>{personalInfo.name}</h1>

        <ul>
          <li><p>Email: {personalInfo.email}</p></li>
          <li><p>{personalInfo.city}, {personalInfo.country}</p></li>
          <li><p>{personalInfo.tel}</p></li>
        </ul>
      </section>

      <hr></hr>

      <section id="summary" className={currentSection === "summary" ? "active" : "inactive"}>
        <h3>Professional Summary</h3>
        <p>{summary.summary}</p>
      </section>

      <hr></hr>

      <section id="experience" className={currentSection === "experience" ? "active" : "inactive"}>
        <h3>Experience</h3>
        <p>{experience.company}</p>
        <p>{experience.position}</p>
      </section>

      <hr></hr>

      <section id="education" className={currentSection === "education" ? "active" : "inactive"}>
        <h3>Education</h3>
        <div>
          <p><i>{education.school}</i></p>
          <p><i>{education.degree}</i></p>
        </div>

        <div id="relevantCoursework" style={education.courses.length == 0 ? {display: "none"} : {display: "block"}}>
          <p>Relevant Coursework</p>
          <ul>
            {education.courses.map(course => {
              return <li><b>{course.cid}</b> - {course.cname}</li>
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}