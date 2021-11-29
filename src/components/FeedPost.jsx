import React, { useEffect, useState } from 'react';
import './FeedPost.scss'
import Resume from './Resume';
import {HeartOutlined, CommentOutlined, SendOutlined, BookOutlined, HeartFilled} from '@ant-design/icons'
function FeedPost(props) {

  const {postData={}} = props
  const {userData={}, postPhotoUrl=""} = postData

  const [numOfLikes, setNumOfLikes] = useState(0)
  const [liked, setLiked] = useState(false)
  
  useEffect(()=>{
    const rndNumOfLikes = parseInt(Math.random()*1000)
    setNumOfLikes(rndNumOfLikes)
  },[])

  return (
    <div className="feed-post">
      <Resume userData={userData} size="sm"/>
      <div className="post-photo-cont">
        <img src={postPhotoUrl} className="post-photo"/>
      </div>
      <div className="actions">
        {liked ? 
          <HeartFilled className="action" style={{color: "rgb(237, 73, 86)"}} onClick={() => {setLiked(!liked); setNumOfLikes(numOfLikes-1)}}/> :
          <HeartOutlined className="action" onClick={() => {setLiked(!liked); setNumOfLikes(numOfLikes+1)}}/>
        }
        <CommentOutlined className="action"/>
        <SendOutlined rotate={-25} style={{marginTop: -4}} className="action"/>
        <BookOutlined className="action action-save"/>
      </div>
      <div className="likes-count">
        <span>
          {numOfLikes} Me gusta 
        </span>
      </div>
    </div>
  );
}

export default FeedPost;