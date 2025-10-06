import React, { useState } from 'react'
import './AboutMe.css';
import axios from "axios"

const ContactForm = () => {

  const [status, setStatus]=useState(null);
    const handleSubmit = async (e) =>{
        e.preventDefault();     // stops page refresh on form submit

        const form = new FormData(e.target);
        
        // FormData is a built-in JavaScript object, not from React.
        // It helps collect form inputs easily.

        const data ={
            name: form.get("name"),
            email: form.get("email"),
            message: form.get("message"),
        };
        setStatus("sending")
        //  we can do also like this    name: e.target.name.value,
        // But FormData is cleaner when you have many inputs.

        try{
            const res=await axios.post("http://127.0.0.1:8000/contact/api/", data,{
                headers:{"Content-Type":"application/json"}
//      Axios automatically sets the right headers if you pass a plain object.
//      But adding Content-Type: application/json is explicit and safe,especially when backend is strict.
            });
            if(res.data.success){
              setStatus("success");
              e.target.reset();   // clear form fields
            } else{
              setStatus("error");
            }
        }
        catch(err){
            console.error(err);
            setStatus("error")
        }
        };
    

  return (
    <div className="contact-container" >
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" className="contact-input" />
        <input type="text" name="email" placeholder="Your Email" className="contact-input" />
        <textarea name="message" id="" placeholder="Your Message" className="contact-textarea"></textarea>
        <button type="submit" className="contact-btn">Send Message</button>
      </form>

      {status === "sending" && (
        <p className="contact-status sending">Sending message...</p>
      ) }
      {status === "success" && (
        <p className="contact-status success"> Email delivered successfully.</p>
      )}
      {status === "error" && (
        <p className="contact-status error">Something went wrong. Please try again.</p>
      )}
    </div>
  )
}

export default ContactForm;
