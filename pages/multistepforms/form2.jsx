import { useContext } from "react";

import { useForm, ErrorMessage } from "react-hook-form";
import { useRouter } from "next/router";

import Mainformlayoutpage from "./mainformlayoutpage";

// import {useStateMachine} from 'little-state-machine'
// import UpdateActionForm from './updateAciton'

import MyContext from "../../components/context/mycontext/context";

export default () => {
  const mystorecontext = useContext(MyContext);

  // const {state , action} = useStateMachine(UpdateActionForm)

  const { push } = useRouter();

  let defaultValues = {
    age: mystorecontext.user.age,
    dep: mystorecontext.user.dep
  };

  const { errors, register, handleSubmit } = useForm({ defaultValues });

  const onSubmit = (data, e) => {
    // action(data)

    e.preventDefault();

    console.log(data);
    push("/multistepforms/result");
  };
  return (
    <Mainformlayoutpage>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="age"
          ref={register({ required: "this is required!!1" })}
          onChange={mystorecontext.onHandleChange}
        />
        <ErrorMessage errors={errors} name="age" as="p" />
        <input
          type="text"
          name="dep"
          ref={register({ required: "this is required!!1" })}
          onChange={mystorecontext.onHandleChange}
        />
        <ErrorMessage errors={errors} name="dep" as="p" />
        <input type="submit" value="Continue" />
      </form>
    </Mainformlayoutpage>
  );
};
