import React from 'react';
import './FeedPost.scss'
import Resume from './Resume';

function FeedPost(props) {
  const {postData={}} = props
  const {userData={}, postPhotoUrl=""} = postData
  return (
    <div className="feed-post">
      <div>
        <Resume userData={userData} size="sm"/>
        <img src={postPhotoUrl} className="post-photo"/>
      </div>
    </div>
  );
}

export default FeedPost;