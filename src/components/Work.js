import React from "react";
import "../Work.css";

function Work() {
  return (
    <div className="WorkContainer">
      <div className="work">
        <h2>Work Experience</h2>
        <table cellspacing="10">
          <thead>
            <tr>
              <th>Dates</th>
              <th>Work</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2009 - 2010 - </td>
              <td>Researcher at The Institute of Cognitive Neurosciences</td>
            </tr>
            <tr>
              <td>2010 - 2013 - </td>
              <td>Lead Developer at Tempo App</td>
            </tr>
            <tr>
              <td>2013 - 2015 - </td>
              <td>Clinical Doctor at the National Health Service</td>
            </tr>
            <tr>
              <td>2013 - 2015 - </td>
              <td>Clinical Doctor at the National Health Service</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="work">
        <h2>Skills</h2>
        <table cellspacing="10">
          <tr>
            <td>ASP.NET CORE 5 MVC </td>
            <td>⭐️⭐️⭐️⭐️⭐️</td>
          </tr>
          <tr>
            <td>Web Development</td>
            <td>⭐️⭐️⭐️⭐️⭐️</td>
          </tr>
          <tr>
            <td>Photography</td>
            <td>⭐️⭐️</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Work;
