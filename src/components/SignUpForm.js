import React, { useState } from 'react';

const SignUpForm = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

 

  return (
    <div>
     
      <div>
        
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
         className='signupinput'
        />
      </div>
   
    </div>
  );
};

export default SignUpForm;
