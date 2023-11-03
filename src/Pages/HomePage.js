import React from 'react'
import './HomePage.css';

import { FaRegUserCircle } from "react-icons/fa";
import { FaHeart }         from "react-icons/fa";
import { FaRegComments }   from "react-icons/fa";
import { FaRegHeart }      from "react-icons/fa";
import { FaRegStar }       from "react-icons/fa";

function Home() {
  return (
    <div class='flex-container'>
      <div className='createpost'>
        <FaRegUserCircle style={{ fontSize: '1.5rem' }}/>
        <input className='Cpost'type='search' placeholder='Create Post'></input>
      </div>

      <div className='post'>
        <div className='Puser'>
          <FaRegUserCircle style={{ fontSize: '1.5rem' }}/>
          <span className='UserDate'>TRAN NGUYEN TIEN - Date: 7/10/2023</span>
        </div>
        <h1 className='postTitle'>Spring Boot</h1>
        <p>
          Final Year Project - Topic: HUTECH Social Network<br/>
          NGUYEN TRANG CHI KIEM <br/>
          TRAN NGUYEN TIEN
        </p>
        <div className='interactions'>
          <FaHeart className='Iconinteractionss' style={{ color: 'DeepPink' }}/>
          <span className='Iconinteractions' style={{ fontSize: '1.5rem' }}>10k</span>
          <FaRegComments className='Iconinteractions' />
          <span className='Iconinteractions' style={{ fontSize: '1.5rem' }}>2</span>
        </div>
        <div>
          <hr/>
        </div>
        <div className='interaction'>
          <FaRegHeart className='Iconinteractionss'/>
          <FaRegComments className='Iconinteractions' />
          <FaRegStar className='Iconinteractions'/>
        </div>
        <div>
          <hr/>
        </div>
        <div className='comments'>
          <FaRegUserCircle style={{ fontSize: '1.5rem' }}/>
          <input className='Cpost'type='search' placeholder='Write a comment'></input>
        </div>
        <div className='userComments'>
          <FaRegUserCircle style={{ fontSize: '1.5rem' }}/>
          <div className='userC'>
            <span className='userName'>Nguyen Trang Chi Kiem</span><br/>
            <span>Comment 1</span>
          </div>
        </div>
        <div className='userComments'>
          <FaRegUserCircle style={{ fontSize: '1.5rem' }}/>
          <div className='userC'>
            <span className='userName'>Tran Nguyen Tien</span><br/>
            <span>Comment 2 - Final Year Project</span>
          </div>
        </div>
      </div>

      <div className='post'>
        <div className='Puser'>
          <FaRegUserCircle style={{ fontSize: '1.5rem' }}/>
          <span className='UserDate'>Nguyen Trang Chi Kiem - Date: 7/10/2023</span>
        </div>
        <h1 className='postTitle'>ReactJs</h1>
        <p>
          Final Year Project - Topic: HUTECH Social Network<br/>
          NGUYEN TRANG CHI KIEM <br/>
          TRAN NGUYEN TIEN
        </p>
        <img src="logo512.png" alt="Logo of HUTECH Social Network" width="650" height="500"></img>
        <div className='interactions'>
          <FaHeart className='Iconinteractionss' style={{ color: 'DeepPink' }}/>
          <span className='Iconinteractions' style={{ fontSize: '1.5rem' }}>10k</span>
          <FaRegComments className='Iconinteractions' />
          <span className='Iconinteractions' style={{ fontSize: '1.5rem' }}>2</span>
        </div>
        <div>
          <hr/>
        </div>
        <div className='interaction'>
          <FaRegHeart className='Iconinteractionss'/>
          <FaRegComments className='Iconinteractions' />
          <FaRegStar className='Iconinteractions'/>
        </div>
        <div>
          <hr/>
        </div>
        <div className='comments'>
          <FaRegUserCircle style={{ fontSize: '1.5rem' }}/>
          <input className='Cpost'type='search' placeholder='Write a comment'></input>
        </div>
        <div className='userComments'>
          <FaRegUserCircle style={{ fontSize: '1.5rem' }}/>
          <div className='userC'>
            <span className='userName'>Nguyen Trang Chi Kiem</span><br/>
            <span>Comment 1</span>
          </div>
        </div>
        <div className='userComments'>
          <FaRegUserCircle style={{ fontSize: '1.5rem' }}/>
          <div className='userC'>
            <span className='userName'>Tran Nguyen Tien</span><br/>
            <span>Comment 2 - Final Year Project</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home