import React from "react";

const HomePage = () => {
  return (
    <main>
      <h2>Welcome to the Northcoders Student Tracker!</h2>

      <ul>
        The Student Tracker is a tool for:
        <li>Managing student enrollment and progression</li>
        <li>Tracking block and cohort performance</li>
        <li>
          Visualisation of progression and graduation figures to better manage
          your resources
        </li>
      </ul>
      <button>Log In</button>
      <button>View Current Students</button>
    </main>
  );
};

export default HomePage;
