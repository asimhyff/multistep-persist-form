import React from "react";
import { useForm , ErrorMessage } from "react-hook-form";
import { useRouter } from 'next/router'
import { useStateMachine } from 'little-state-machine'
import updateAction from './updateAction'


import MainLayout from "./main"

const Step1 = () => {
  const { push } = useRouter()
  const { state , action } = useStateMachine(updateAction)
  const { handleSubmit, errors , register } = useForm({
    defaultValues: state.yourDetail
  });
  const onSubmit = (data) => {
    action(data)
    push('/MultiForms/step2')

  };

  return (
    <MainLayout>
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 1</h2>
      <label>
        First Name:
        <input name="firstName" ref={register({required: "This field is required"})} />
        <ErrorMessage errors={errors} name="firstName" as="p" />
      </label>
      <label>
        Last Name:
        <input name="lastName" ref={register({required: "This field is required"})} />
        <ErrorMessage errors={errors} name="lastName" as="p" />
      </label>
      <input type="submit" />
    </form>
    </MainLayout>
  );
};

export default Step1;
