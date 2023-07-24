import React, { useState } from "react";

export default function Student() {
  const [first, setfirst] = useState([
    {
      name: "John",
      age: 25,
      course: "MERN",
      Batch: "October",
      change: "Edit",
    },
    {
      name: "Doe",
      age: 25,
      course: "MERN",
      Batch: "October",
      change: "Edit",
    },
    {
      name: "Biden",
      age: 25,
      course: "MERN",
      Batch: "October",
      change: "Edit",
    },
    {
      name: "Barer",
      age: 25,
      course: "MERN",
      Batch: "October",
      change: "Edit",
    },
    {
      name: "Christ",
      age: 25,
      course: "MERN",
      Batch: "October",
      change: "Edit",
    },
    {
      name: "Elent",
      age: 25,
      course: "MERN",
      Batch: "October",
      change: "Edit",
    },
    {
      name: "Harshita Sharma",
      age: 25,
      course: "MERN",
      Batch: "October",
      change: "Edit",
    },
  ]);
  console.log(setfirst);
  return (
    <>
      <span className="Student">Student Details</span>{" "}
      <span className="Add">Add new Student</span>
      <div className="table">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>Batch</th>
              <th>Change</th>
            </tr>
          </tbody>
          {first.map((item, index) => {
            return (
              <>
                <tr>
                  <td key={index}>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.course}</td>
                  <td>{item.Batch}</td>
                  <td>{item.change}</td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
}
