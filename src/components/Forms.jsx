import React, {  useState } from 'react'

const Forms = () => {

    const[form, setForm]= useState({
        name:"",
        email:"",
        password:"",
        age:0,
        isIndian:false,
        resume:"",
        selectGender:""
    })

    const onChange =(e)=>{
let {name, value, type, checked, files} = e.target;

if(type === "checkbox"){
    setForm( { ...form,  [name]:checked } )
}else if(type === "file"){
    setForm( { ...form,  [name]:files } )
}

else{
    setForm( { ...form,  [name]:value } )
}

    }

    const handleonSubmit=(e)=>{
e.preventDefault();
console.log(form)
    }

  
  return (
    <div>Forms
        <form onSubmit={handleonSubmit}>
            <div>
                <label>Name: </label>
                <input  name='name' value={form.name} onChange={onChange} paceholder='Enter Name..' />
            </div>
            <div>
                <label>Email: </label>
                <input name='email' value={form.email} onChange={onChange} placeholder='Enter Email..' />
            </div>
            <div>
                <label>Password: </label>
                <input name='password' value={form.password} onChange={onChange} placeholder='Enter Password..' />
            </div>
            <div>
                <label>Age: </label>
                <input name='age' value={form.age} onChange={onChange}  type="number"  />
            </div>

            <div>
            <label>Gender: </label>
               <select name="selectGender" value={form.selectGender} onChange={onChange}>
<option value=""></option>
<option value="male">Male</option>
<option value="female">Female</option>
               </select>
            </div>

            <div>
                <input name='isIndian' checked={form.isIndian} onChange={onChange}  type="checkbox"  />
                <label> : is Indian </label>
            </div>
            <div>
                <div>
                <input name='gender' value="male" onChange={onChange}  type="radio"  />
                <label> Male </label>
                </div>
                <div>
                <input name='gender' value="female" onChange={onChange}  type="radio"  />
                <label>  Femle </label>
                </div>
               
            </div>
            <div>
                <label>Resume: </label>
                <input name='resume' files={form.resume} onChange={onChange}  type="file"  />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Forms