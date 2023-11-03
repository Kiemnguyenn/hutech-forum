import React, { useState } from 'react'
import './Group.css';

//import { FaPlaystation } from "react-icons/fa";
//import { FaChevronDown } from "react-icons/fa";

function Group() {
  const [toggle, setToggle] = useState(1)

  function updateToggle(id) {
    setToggle(id)
  }

  return (
    <div className='flex-containerss'>
      <nav className='group-tabs'>
        <ul className='group-ul'>
          <li className='group-li' onClick={()=>updateToggle(1)}>Group</li>
          <li className='group-li' onClick={()=>updateToggle(2)}>The group you join</li>
          <li className='group-li' onClick={()=>updateToggle(3)}>Your group</li>
          <li className='group-li' onClick={()=>updateToggle(4)}>Create group</li>
        </ul>

        <hr className='group-hr'/>
      </nav>

      <div className={toggle === 1 ? "show-groupss" : "groupss"}>
          <h1 className='group-h1'>Group</h1>
          <div className='group-join'>
            <div className='group-image'>
              <img  className='Gimage'src="logo512.png" alt="imageGroup" width="80px" height="80px"></img>
            </div>
            <div className='group-name'>
              <h5>Group name 1 <span className='group-menber'>. 100 menbers</span></h5>
              <button className='btn-join'>Join</button>
              <p className='about-us'>Content with detailed information about the group or write a few lines introducing the group or the 
              role of group activities</p>
            </div>
          </div>
      </div>

      <div className={toggle === 1 ? "show-groupss" : "groupss"}>
          <div className='group-join'>
            <div className='group-image'>
              <img  className='Gimage'src="logo512.png" alt="imageGroup" width="80px" height="80px"></img>
            </div>
            <div className='group-name'>
              <h5>Group name 2 <span className='group-menber'>. 100 menbers</span></h5>
              <button className='btn-join'>Join</button>
              <p className='about-us'>Content with detailed information about the group or write a few lines introducing the group or the 
              role of group activities</p>
            </div>
          </div>
      </div>

      <div className={toggle === 1 ? "show-groupss" : "groupss"}>
          <div className='group-join'>
            <div className='group-image'>
              <img  className='Gimage'src="logo512.png" alt="imageGroup" width="80px" height="80px"></img>
            </div>
            <div className='group-name'>
              <h5>Group name 3 <span className='group-menber'>. 100 menbers</span></h5>
              <button className='btn-join'>Join</button>
              <p className='about-us'>Content with detailed information about the group or write a few lines introducing the group or the 
              role of group activities</p>
            </div>
          </div>
      </div>

      <div className={toggle === 1 ? "show-groupss" : "groupss"}>
          <div className='group-join'>
            <div className='group-image'>
              <img  className='Gimage'src="logo512.png" alt="imageGroup" width="80px" height="80px"></img>
            </div>
            <div className='group-name'>
              <h5>Group name 4 <span className='group-menber'>. 100 menbers</span></h5>
              <button className='btn-join'>Join</button>
              <p className='about-us'>Content with detailed information about the group or write a few lines introducing the group or the 
              role of group activities</p>
            </div>
          </div>
      </div>

      <div className={toggle === 1 ? "show-groupss" : "groupss"}>
          <div className='group-join'>
            <div className='group-image'>
              <img  className='Gimage'src="logo512.png" alt="imageGroup" width="80px" height="80px"></img>
            </div>
            <div className='group-name'>
              <h5>Group name 5 <span className='group-menber'>. 100 menbers</span></h5>
              <button className='btn-join'>Join</button>
              <p className='about-us'>Content with detailed information about the group or write a few lines introducing the group or the 
              role of group activities</p>
            </div>
          </div>
      </div>

      <div className={toggle === 1 ? "show-groupss" : "groupss"}>
          <div className='group-join'>
            <div className='group-image'>
              <img  className='Gimage'src="logo512.png" alt="imageGroup" width="80px" height="80px"></img>
            </div>
            <div className='group-name'>
              <h5>Group name 6 <span className='group-menber'>. 100 menbers</span></h5>
              <button className='btn-join'>Join</button>
              <p className='about-us'>Content with detailed information about the group or write a few lines introducing the group or the 
              role of group activities</p>
            </div>
          </div>
      </div>

      <div className={toggle === 1 ? "show-groupss" : "groupss"}>
          <div className='group-join'>
            <div className='group-image'>
              <img  className='Gimage'src="logo512.png" alt="imageGroup" width="80px" height="80px"></img>
            </div>
            <div className='group-name'>
              <h5>Group name 7 <span className='group-menber'>. 100 menbers</span></h5>
              <button className='btn-join'>Join</button>
              <p className='about-us'>Content with detailed information about the group or write a few lines introducing the group or the 
              role of group activities</p>
            </div>
          </div>
      </div>

      <div className={toggle === 2 ? "show-groupss" : "groupss"}>
          <h1>The group you join</h1>
          <div className='group-joins'>2</div>
      </div>

      <div className={toggle === 3 ? "show-groupss" : "groupss"}>
          <h1>Your group</h1>
          <div className='group-joins'>3</div>
      </div>

      <div className={toggle === 4 ? "show-groupss" : "groupss"}>
          <h1>Create group</h1>
          <div className='group-joins'>4</div>
      </div>
    </div>
  )
}

export default Group