import React, { Component } from "react";
import axios from "axios";

class StudentInfo extends Component {
  state = { student: {}, isLoading: true };
  componentDidMount() {
    return axios
      .get(
        `https://nc-student-tracker.herokuapp.com/api/students/${student_id}`
      )
      .then(({ data: { student } }) => {
        this.setState({ student, isLoading: false });
      });
  }

  render() {
    return (
      <section>
        <h2>{this.state.student.name}</h2>
        <p>Starting cohort: {this.state.student.startingCohort}</p>
      </section>
    );
  }
}

export default StudentInfo;
