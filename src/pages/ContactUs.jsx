import React from 'react'

const ContactUs = () => {
  return (
    <div >
    <div className='bg'>  
      <form>
    <div class="form-group">
      <label for="FirstNmae">FirstName</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="FirstName" /> 
      <small id="emailHelp" class="form-text text-muted"></small>
    </div>
    <div class="form-group">
      <label for="Lastname">LastName</label>
      <input type="text" class="form-control" id="exampleInputPassword1" placeholder="LastName" />
    </div>
    <div class="form-group">
      <label for="Email">Email</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" /> 
      <small id="emailHelp" class="form-text text-muted"></small>
    </div>
    <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>

        
    </div>
    </div>
  )
}

export default ContactUs