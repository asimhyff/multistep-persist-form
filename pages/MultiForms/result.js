import React from "react";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import MainLayout from './main'

const Result = props => {
  const { state } = useStateMachine(updateAction);

  return (
    <MainLayout>
    <div className="container">
      <h2>Result</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
    </MainLayout>
  );
};

export default Result;
