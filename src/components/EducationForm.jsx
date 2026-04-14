import { useState } from "react";
import { DEF_DEGREE, DEF_SCHOOL } from "../placeholders";

export default function EducationForm({ education, setEducation }) {

  const [courseInput, setCourseInput] = useState({
    cid: "",
    cname: ""
  });

  const handleInputChange = (e) => {
    const {name, value} = e.target;

    setCourseInput({
      ...courseInput,
      [name]: value,
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEducation({
      ...education,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const course = {
      cid: courseInput.cid,
      cname: courseInput.cname,
    }

    if (education.courses.length < 3) {
      setEducation(prev => ({
        ...prev,
        courses: [...prev.courses, course]
      }));

      setCourseInput({
        cid: "",
        cname: "",
      })
    }
  }

  return (
    <div className="form">
      <h2>Education</h2>

      <input
        type="text"
        name="school"
        placeholder="School"
        value={education.school == DEF_SCHOOL ? "" : education.school}
        onChange={handleChange}
        autoComplete="off"
      />

      <input
        type="text"
        name="degree"
        placeholder="Degree"
        value={education.degree == DEF_DEGREE ? "" : education.degree}
        onChange={handleChange}
        autoComplete="off"
      />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="cid"
          value={courseInput.cid}
          onChange={handleInputChange}
          placeholder="Course ID"
          autoComplete="off"
        />

        <input
          type="text"
          name="cname"
          value={courseInput.cname}
          onChange={handleInputChange}
          placeholder="Course Name"
          autoComplete="off"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}