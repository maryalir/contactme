import React, {useState} from 'react';
//import './contactForm.css';
import axios from 'axios';

const ContactComp = () => {
  const [state, setState]=useState({
    name:'',
    email:'',
    message:'',
    sent: false,
    buttonText: 'send Message'
  });

  const[result, setResult] = useState(null);

  const sendEmail = (e) => {
      e.preventDefault()
      axios
        .post('/send',{...state})
        .then(response => {
          setResult(response.data);
          setState({
            name:"",
            email:"",
            message:"",
            buttonText: 'send Message'
          });
        })
        .catch(() => {
          setResult({
            success: false,
            message: "Message not sent. Reach out to me at linkedIn."
          });
        })
  }

      const onInputChange = e => {
        const {name, value} = e.target;

        setState({
          ...state,
          [name]: value,
        });
      };

  return(
    <div>
      <p className='labeltitle'>Send me an email!</p>
      {
        result && (
          <p className={`${result.success ? 'success' : 'error'}`}>{result.message}</p>
        )
      }
    <form className='form-row align-items-center' onSubmit={sendEmail}>

      <div className='formunodos'>
        <div className="formuno">
          <label className='' htmlFor='message-name'>Your Name</label>
          <input onChange={onInputChange} 
            className='form-control mb-2' name='name' placeholder='Name' 
            type='text' value={state.name}/>

          <label>Your Email</label>
          <input onChange={onInputChange } 
          className='form-control mb-2' name='email' placeholder='xxx@email.com'
          type='email' value={state.email} required/>
        </div>

        <div className="formdos">
          <label className='message'>Type your message</label>
          <textarea onChange={onInputChange} 
          className='form-control mb-2' rows='4' name='message' placeholder='Please write your message here' 
          type='text' value={state.message} required/>
        </div>
      </div>

      <div className='formbutton'>
        <button className='btn btn-success formbutton' 
        type='submit'>{state.buttonText}</button>
      </div>
    </form>
    </div>
  );
};

export default ContactComp;
