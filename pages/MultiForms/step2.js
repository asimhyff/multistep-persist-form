import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useStateMachine } from 'little-state-machine'
import updateAction from './updateAction'

import MainLayout from './main'

const Step2 = () => {
  const { push } = useRouter()
  const { state , action } = useStateMachine(updateAction)

  const { handleSubmit } = useForm({
    defaultValues: state.yourDetails
  });
  const onSubmit = data => {
    action(data)
    push('/MultiForms/result')
  };

  return (
    <MainLayout>
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 2</h2>
      <label>
        Age:
        <input name="age" type="number" />
      </label>
      <label>
        Years of experience:
        <input name="yearsOfExp" type="number" />
      </label>
      <input type="submit" />
    </form>
    </MainLayout>
  );
};

export default Step2;
