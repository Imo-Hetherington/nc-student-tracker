import React, { Component } from "react";
import axios from "axios";

import StudentCard from "./StudentCard";
import { Router } from "@reach/router";

class StudentList extends Component {
  state = { students: [], isLoading: true };

  componentDidMount() {
    return axios
      .get("https://nc-student-tracker.herokuapp.com/api/students")
      .then(({ data: { students } }) => {
        this.setState({ students, isLoading: false });
      });
  }

  render() {
    if (this.state.isLoading) return <p>Students are on their way...</p>;
    return (
       
      <Router>
        <StudentCard  />
      </Router>
       <main path="/">
       {this.state.students.map(student => {
         return <StudentCard {...student} key={student._id} />;
       })}
     </main>
    );
  }
}

export default StudentList;
