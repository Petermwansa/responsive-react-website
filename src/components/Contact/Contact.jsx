import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';


const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "cef7cf3b-7db5-4aaa-ba38-0b75c06b315f");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className='contact'>
      <div className='contact__col'>
        <h3>Send us a message <img src={msg_icon} alt=''/></h3>
        <p>
            Our highly professional stuff are always ready to help you or assist you whenever you have any enquiries.
            You can send us amessage to get in touch with them.
            We will try to repond as fast as possible. <br /> Thank you.
        </p>
        <ul>
          <li><img src={mail_icon} alt='' /> mail@unicity.edu</li>
          <li><img src={phone_icon} alt='' /> +1 123-234-5667</li>
          <li><img src={location_icon} alt='' /> Longacre, Florida</li>
        </ul>
      </div>
      <div className='contact__col'>
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type='text' name='name' placeholder='Enter your name' required/>
          <label>Phone Number</label>
          <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
          <label>Write your message here</label>
          <textarea type='text' name='message' placeholder='Enter your message' rows='6' required></textarea>
          <button className='btn dark__btn'>Submit <img alt='' src={white_arrow} /></button>
        </form>
        <span>{result}</span>
      </div>

    </div>
  )
}

export default Contact;




