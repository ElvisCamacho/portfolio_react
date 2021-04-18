import React from "react";

import "../Work.css";

function Education() {
  return (
    <div className="WorkContainer">
      <div className="work">
        <h1>Education</h1>
        <table cellspacing="10">
          <thead>
            <tr>
              <th>Dates</th>
              <th>Education</th>
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
    </div>
  );
}

export default Education;
