const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

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
        {experience.map(exp => {
          const startMonth = parseInt(exp.startDate.split('-')[1]);
          const startYear = exp.startDate.split('-')[0];
          const start = `${MONTHS[startMonth]} ${startYear}`;

          const endMonth = parseInt(exp.endDate.split('-')[1]);
          const endYear = exp.endDate.split('-')[0];
          const end = exp.endDate.length == 0 ? "Present" : `${MONTHS[endMonth]} ${endYear}`;

          return (
            <div class="exp">
              <p class="expCompany"><b>{exp.company}</b> – {exp.position}</p>
              <p class="expDate"><i>{start} - {end}</i></p>

              <ul>
                {exp.bullets.map(description => {
                  return <li>{description}</li>
                })}
              </ul>
            </div>
          )
        })}
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