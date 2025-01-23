import { useState } from "react";
import "./sidebar.css";

const App = () => {
  const [lectures, setLectures] = useState([
    {
      id: 1,
      title: "What is Web Security? HTML & JavaScript Review",
      completed: true,
    },
    { id: 2, title: "HTTP, Cookies, Sessions", completed: true },
    { id: 3, title: "Session Attacks", completed: false },
    {
      id: 4,
      title: "Cross-Site Request Forgery, Same Origin Policy",
      completed: false,
    },
    { id: 5, title: "Exceptions to the Same Origin Policy", completed: false },
    { id: 6, title: "Cross-Site Scripting (XSS)", completed: false },
    { id: 7, title: "Cross-Site Scripting Defenses", completed: false },
    {
      id: 8,
      title: "Fingerprinting and Privacy on the Web - Pete Snyder",
      completed: false,
    },
  ]);

  const toggleComplete = (id) => {
    setLectures((prevLectures) =>
      prevLectures.map((lecture) =>
        lecture.id === id
          ? { ...lecture, completed: !lecture.completed }
          : lecture
      )
    );
  };
  return (
    <div className="wrapper">
      <div className="course-container">
        <button className="enroll-btn">ENROLL COURSE</button>
        <div className="lecture-list">
          <div className="lecture_inner">
            {lectures.map((lecture) => (
              <div key={lecture.id} className="lecture-item">
                <div className="side_number">
                  <h3>{lecture.id}</h3>
                </div>
                <div className="side_tittle">
                  <label htmlFor={`lecture-${lecture.id}`}>
                    Web Security - Lecture {lecture.title}
                  </label>
                </div>
                <div className="side_checkbox">
                  <input
                    type="checkbox"
                    id={`lecture-${lecture.id}`}
                    checked={lecture.completed}
                    onChange={() => toggleComplete(lecture.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
