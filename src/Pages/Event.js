import React from 'react'
import './Event.css';

import { FaPlaystation } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

function Event() {
  return (
    <div className='event-flex-containers'>
        <h1 className='event-title'> Event  </h1>

        <div>
          <hr className='white'/>
        </div>

        <div className='event-select-btn'>
          <FaPlaystation className='itemss'/>
          <span className='event-sBtn-text'>Select event type</span>
          <FaChevronDown className='itemss'/>
       </div>

       <div className='event-join'>
            <div className='event-image'>
              <img  className='Eimage'src="logo512.png" alt="imageEvent" width="100px" height="100px"></img>
            </div>
            <div className='event-name'>
              <h5 className='event-date'>The event is taking place</h5>
              <button className='btn-join'>Join the event</button>
              <h5 className='event-theme'>Event 1 <span className='event-menber'>. 100 participants</span></h5> 
              <p className='event-address'>HUTECH - 475 Dien Bien Phu Street, Ward 25, Binh Thanh District, Ho Chi Minh City, Viet Nam</p>
            </div>
          </div>

          <div className='event-join'>
            <div className='event-image'>
              <img  className='Eimage'src="logo512.png" alt="imageEvent" width="100px" height="100px"></img>
            </div>
            <div className='event-name'>
              <h5 className='event-date'>The event is taking place</h5>
              <button className='btn-join'>Join the event</button>
              <h5 className='event-theme'>Event 2 <span className='event-menber'>. 100 participants</span></h5> 
              <p className='event-address'>HUTECH - 475 Dien Bien Phu Street, Ward 25, Binh Thanh District, Ho Chi Minh City, Viet Nam</p>
            </div>
          </div>

          <div className='event-join'>
            <div className='event-image'>
              <img  className='Eimage'src="logo512.png" alt="imageEvent" width="100px" height="100px"></img>
            </div>
            <div className='event-name'>
              <h5 className='event-dates'>Wednesday, November 15, 2023</h5>
              <button className='btn-join'>Join the event</button>
              <h5 className='event-theme'>Event 3 <span className='event-menber'>. 100 participants</span></h5> 
              <p className='event-address'>HUTECH - 475 Dien Bien Phu Street, Ward 25, Binh Thanh District, Ho Chi Minh City, Viet Nam</p>
            </div>
          </div>

          <div className='event-join'>
            <div className='event-image'>
              <img  className='Eimage'src="logo512.png" alt="imageEvent" width="100px" height="100px"></img>
            </div>
            <div className='event-name'>
              <h5 className='event-dates'>Wednesday, November 15, 2023</h5>
              <button className='btn-join'>Join the event</button>
              <h5 className='event-theme'>Event 4 <span className='event-menber'>. 100 participants</span></h5> 
              <p className='event-address'>HUTECH - 475 Dien Bien Phu Street, Ward 25, Binh Thanh District, Ho Chi Minh City, Viet Nam</p>
            </div>
          </div>

          <div className='event-join'>
            <div className='event-image'>
              <img  className='Eimage'src="logo512.png" alt="imageEvent" width="100px" height="100px"></img>
            </div>
            <div className='event-name'>
              <h5 className='event-dates'>Wednesday, November 15, 2023</h5>
              <button className='btn-join'>Join the event</button>
              <h5 className='event-theme'>Event 5 <span className='event-menber'>. 100 participants</span></h5> 
              <p className='event-address'>HUTECH - 475 Dien Bien Phu Street, Ward 25, Binh Thanh District, Ho Chi Minh City, Viet Nam</p>
            </div>
          </div>

          <div className='event-join'>
            <div className='event-image'>
              <img  className='Eimage'src="logo512.png" alt="imageEvent" width="100px" height="100px"></img>
            </div>
            <div className='event-name'>
              <h5 className='event-dates'>Wednesday, November 15, 2023</h5>
              <button className='btn-join'>Join the event</button>
              <h5 className='event-theme'>Event 6 <span className='event-menber'>. 100 participants</span></h5> 
              <p className='event-address'>HUTECH - 475 Dien Bien Phu Street, Ward 25, Binh Thanh District, Ho Chi Minh City, Viet Nam</p>
            </div>
          </div>

          <div className='event-join'>
            <div className='event-image'>
              <img  className='Eimage'src="logo512.png" alt="imageEvent" width="100px" height="100px"></img>
            </div>
            <div className='event-name'>
              <h5 className='event-dates'>Wednesday, November 15, 2023</h5>
              <button className='btn-join'>Join the event</button>
              <h5 className='event-theme'>Event 7 <span className='event-menber'>. 100 participants</span></h5> 
              <p className='event-address'>HUTECH - 475 Dien Bien Phu Street, Ward 25, Binh Thanh District, Ho Chi Minh City, Viet Nam</p>
            </div>
          </div>
    </div>
  )
}

export default Event