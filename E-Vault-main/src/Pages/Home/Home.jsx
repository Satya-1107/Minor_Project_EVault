import React from 'react'
import "./Home.css"
import registrationform from'../../images/registrationform.png';
//import safehaven from '../../images/safehaven.mp4'//

const Home = () => {
  return (
    <div className='a1'>

      <div className='registration-img'>
        <img src={registrationform} ></img>
      </div>

      <div className='main-containerr'>
        <div className='containerr'>
          <div className='imagee'>
            <div className='form-box'>
              <div className='form'>
                <h2>Register</h2>
                <div className='input-group'>
                  <input type='text' id='username' className='input-group-input' required></input>
                  <label for='' className='input-group-label'>Username</label>
                </div>

                <div className='input-group'>
                  <input type='text' className='input-group-input' required></input>
                  <label for='' className='input-group-label'>Gmail</label>
                </div>

                <div className='input-group'>
                  <input type='text' className='input-group-input' required></input>
                  <label for='' className='input-group-label'>Mobile No.</label>
                </div>

                <div className='input-group'>
                  <input type='text' className='input-group-input' required></input>
                  <label for='' className='input-group-label'>Age</label>
                </div>

                <div className='register-button'>
                 <button className='text'>Register</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
