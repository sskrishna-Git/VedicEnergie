import React from 'react'
import image from '../image/solar.jpeg';

const Section2 = () => {
  return (
    <div>
        <section className='section-container2 section2-bg'>

        <div className="text-center align-middle  ">
            <h2>Energy Supply<br></br>
                Solution For<br></br>
                Residency.
            </h2>
        </div>

        <div >
          <img src={image} class="rounded float-center img-thumbnail" alt="image" />
        </div>
       
        
        </section>
    </div>
  )
}

export default Section2