import react from 'react'
import { useForm } from 'react-hook-form'
import formCss from './regform.module.css'
export default ()=>{


  const { register , handleSubmit , errors } =useForm()


  let onsubmit = (data)=>{
    console.log(data)
  }

  return(
  <form className={"form-group" , formCss.form} onSubmit={handleSubmit(onsubmit)}>
    <h1 style={{paddingBottom:"25px"}}>Registeration Form</h1>
<div className="form-group">
  <input type="text" className="form-control" name="firstname" ref={register({required:true})} id="fn" aria-describedby="helpId" placeholder="First Name" />
  {errors.firstname && errors.firstname.type === 'required' && <span className="small" style={{color:'red'}}><b>Please! Enter the First Name</b></span>}
</div>


<div className="form-group">
  <input type="text" className="form-control" name="lastname" ref={register({required:true})} id="ln" aria-describedby="helpId" placeholder="Last Name" />
  {errors.lastname && errors.lastname.type === 'required' && <span className="small" style={{color:'red'}}><b>Please! Enter the Last Name</b></span>}
</div>


<div className="form-group">
  <input type="text" className="form-control" name="username" ref={register({required:true})} id="un" aria-describedby="helpId" placeholder="username" />
  {errors.username && errors.username.type === 'required' && <span className="small" style={{color:'red'}}><b>Please! Enter the username</b></span>}
</div>


<div className="form-group">
  <input type="email" className="form-control" name="email" ref={register({required:true})} id="em" aria-describedby="helpId" placeholder="email" />
  {errors.email && errors.email.type === 'required' && <span className="small" style={{color:'red'}}><b>Please! Enter the email</b></span>}
</div>


<div className="form-group">
  <input type="password" className="form-control" name="password" ref={register({required:true , minLength:'5'})} id="pw" aria-describedby="helpId" placeholder="password" />
  {errors.password && errors.password.type === 'minLength' && <span className="small" style={{color:'red'}}><b>Password (min length : 5)</b></span>}
  {errors.password && errors.password.type === 'required' && <span className="small" style={{color:'red'}}><b>Please! Enter the Password</b></span>}
</div>

<input type="submit" value="Register" className="btn btn-primary"/>

  </form>)
}