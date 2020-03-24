import React, { useContext, useState } from "react";
import { useForm, ErrorMessage, Controller } from "react-hook-form";
import { useRouter } from "next/router";

import Mainformlayoutpage from "./mainformlayoutpage";

// import {useStateMachine} from 'little-state-machine'
// import UpdateActionForm from './updateAciton'

import { TextField, Button } from "@material-ui/core";
import ErrorText from "./errorText";

import MyContext from "../../components/context/mycontext/context";

export default () => {
  const { push } = useRouter();

  const mystorecontext = useContext(MyContext);

  // const {state , action} = useStateMachine(UpdateActionForm)

  const defaultValues = {
    email: mystorecontext.user.firstname,
    password: mystorecontext.user.lastname
  };

  const { errors, register, handleSubmit, control } = useForm({
    defaultValues
  });


  const onsubmit = (e, data) => {
    // action(data)
    e.preventDefault()
    console.log(data);
    push("/multistepforms/form2");
  };
  return (
    <Mainformlayoutpage>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div style={{ textAlign: "center" }}>
          <h6 style={{ padding: ".7rem" }}>LOG IN NOW</h6>
        </div>

        {/* emial input */}

        <Controller
          placeholder="email"
          fullWidth
          as={<TextField />}
          name="email"
          control={control}
          onChange={mystorecontext.onHandleChange}
          style={{ paddingBottom: "1.5rem" }}
          rules={{
            required: true,
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
          }}
        />
        {/* errors messages */}
        {errors.email && errors.email.type === "required" && (
          <ErrorText message="required*" />
        )}
        {errors.email && errors.email.type === "pattern" && (
          <ErrorText message="Please enter a correct email" />
        )}

        {/* password input */}

        <div style={{ paddingBottom: "1rem" }}>
          <Controller
            style={{ alignSelf: "center" }}
            fullWidth
            id="standard-adornment-password"
            placeholder="password"
            name="password"
            onChange={mystorecontext.onHandleChange}
            as={<TextField />}
            control={control}
            rules={{ required: true, minLength: 5 }}
          />
          {/* errors messages */}
          {errors.password && errors.password.type === "required" && (
            <ErrorText message="required*" />
          )}
          {errors.password && errors.password.type === "minLength" && (
            <ErrorText message="minimum length 5*" />
          )}
        </div>

        {/* Submit Button */}

        <div
          style={{ display: "flex", justifyContent: "center", padding: "1rem" }}
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="rounded-0"
          >
            Sign In
          </Button>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <p className="small" variant="contained" color="primary">
            don't have an account? Sign Up{" "}
          </p>
        </div>
      </form>
    </Mainformlayoutpage>
  );
};
