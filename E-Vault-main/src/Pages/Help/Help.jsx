import React from 'react'

const Help = () => {
  return (
    <div className='a1'>

      <div className='main-containerr'>
        <br /> <br />
      <h1>Leave Your Message to Us</h1>
      <br /> <br />
        <form action=" " >
        <label htmlFor="" >Name: </label>
        <br /> <br />
        <input type="text" name="Name" placeholder="Enter Your Name"></input>
        <br /> <br />

        <label htmlFor="" >Email: </label>
        <br /> <br />
        <input type="text" name="Email" placeholder="Enter Your Email"></input>
        <br /> <br />

        {/* <label htmlFor="">k</label> */}
        <h3>Enter Your Feedback: </h3>
        <br />
        <textarea name="" id="" cols="70" rows="10"></textarea>
        <br /> <br />

        <input type="submit" name="submit" value="Submit"></input>

      </form>
        
      <footer>
          <h3>Copyright © 2023 Chain Crafters.Inc</h3>
       </footer>
      </div>


    </div>



  )
}

export default Help
