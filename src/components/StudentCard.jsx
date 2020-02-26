import React from "react";
import { Link } from "@reach/router";

const StudentCard = ({ _id, name, startingCohort, currentBlock }) => {
  return (
    <section>
      <Link to={`students/${_id}`}>
        {currentBlock === "grad" ? <h4>{name + `\u2691`}</h4> : <h4>{name}</h4>}
      </Link>
      <p>
        Starting cohort: {startingCohort}, current block: {currentBlock}
      </p>
    </section>
  );
};

export default StudentCard;
