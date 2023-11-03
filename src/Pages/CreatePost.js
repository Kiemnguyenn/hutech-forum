import React from 'react'
import './CreatePost.css';

import { FaPlaystation } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaImage }       from "react-icons/fa";
import { FaTag }         from "react-icons/fa";
import { FaRegLaugh }    from "react-icons/fa";
import { FaPlus }        from "react-icons/fa";

function CreatePost () {
  return (
    <div class="flex-containers">
      <h1 style={{ fontSize: '1.5rem' }} >Create a post</h1>

      <div>
        <hr className='white'/>
      </div>

      <div className='select-btn'>
          <FaPlaystation className='items'/>
          <span className='sBtn-text'>Select your option</span>
          <FaChevronDown className='items'/>
       </div>

       <div className='postContent'>
        <input className='inputTitle' type='text' placeholder="Title"></input>
        <input className='inputText' type='textarea' placeholder="Text ( optional )"></input>

        <div className='button'>
          <button className='btn'><FaImage/><span>Image/Video</span></button>
          <button className='btn'><FaTag/><span>Tag</span></button>
          <button className='btn'><FaRegLaugh/><span>Emotions/Activity</span></button>
          <button className='btn'><FaPlus/><span>Orther</span></button>
        </div>

        <div>
          <hr className='gray'/>
        </div>

        <div className='buttonPost'>
          <button className='btnPost'>Post</button>
        </div>
       </div>

    </div>
  )
}

export default CreatePost