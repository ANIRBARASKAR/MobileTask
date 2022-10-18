import React from 'react'
import {useFormik} from "formik"
import * as yup  from "yup"
import   axios from "axios"

 
export default function App() {


// 



const formik =useFormik({

  initialValues :({
     name:'',
     phone:"",
     email:"",
     about:""
  }),
  validationSchema : yup.object({

    name : yup
    .string()
    .required("Enter your Name"),
    phone : yup
    .string()
    .min(10,"Enter min 10 numbers")
    .max(10,"Enter max 10 numbers")
    .required("Enter your Name"),
    email : yup 
    .string()
    .required("Enter your Email "),
    about : yup 
    .string()
    .required("About Your self "),
   


  }),
  onSubmit: async (values , {resetForm}) => {
    console.log("Forms Values", values);
  
   const {data} = await axios.post("http://localhost:5000/mobileData",values)
   console.log("JsonPost Data",data);
    resetForm()
  }

})

  return (
<>
<div className="container mt-3  ">
  <div className="row">
    <div className="col-sm-6 offset-3">

      <div className="card">
        <div className="card-header"> #App </div>
          <div className="card-body">


          <form onSubmit={formik.handleSubmit}>
          <div>
{/* name */}
          <label htmlFor='name' className='form-lable'>Name</label>
          <input
          placeholder="Enter Name"
          type="text" 
          name='name'
          value={formik.values.name}
          onChange={formik.handleChange}
          id="name"
          onBlur={formik.handleBlur}
          className={ formik.errors.name && formik.touched.name ? "form-control is-invalid" : "form-control"}

           />
           <div className="valid-feedback">Name</div>
           <div className="invalid-feedback">{formik.errors.name}</div>
         
           </div>
           {/* phone */}
           <div className='mt-2'>

          <label htmlFor='name' className='form-lable'>Phone</label>
          <input
          placeholder="Enter Phone No "
           type="text" 
          name='phone'
          value={formik.values.phone}
          onChange={formik.handleChange}
          id="phone"
          onBlur={formik.handleBlur}
          className={ formik.errors.phone && formik.touched.phone ? "form-control is-invalid" : "form-control"}

           />
           <div className="valid-feedback">Phone</div>
           <div className="invalid-feedback">{formik.errors.phone}</div>
         
           </div>
           {/* email */}
            
            <div className='mt-2'>
            
            <label htmlFor='name' className='form-lable'>email</label>
            <input
            placeholder="Enter Email Add"
             type="text" 
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            id="email"
            onBlur={formik.handleBlur}
            className={ formik.errors.email && formik.touched.email ? "form-control is-invalid" : "form-control"}
            
             />
             <div className="valid-feedback">email</div>
             <div className="invalid-feedback">{formik.errors.email}</div>
            
             </div>
      {/* about */}
             <div className='mt-2'>
             
             <label htmlFor='name' className='form-lable'>About us</label>
             <textarea
             placeholder='About us'
             type="text" 
             name='about'
             value={formik.values.about}
             onChange={formik.handleChange}
             id="about"
             onBlur={formik.handleBlur}
             className={ formik.errors.about && formik.touched.about ? "form-control is-invalid" : "form-control"}
             
              />
              <div className="valid-feedback">Phone</div>
              <div className="invalid-feedback">{formik.errors.about}</div>
             
              </div>

              <button type='submit' className='btn btn-primary mt-3 w-100'>Submit</button>







       </form>
          </div>
       
      </div>
    </div>
  </div>
</div>




</>  )
}
