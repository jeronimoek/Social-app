import React, { useEffect, useState } from 'react';
import FeedPost from './FeedPost';
import getUsers from '../utils/getUsers';
import getPhotos from '../utils/getPhotos';
import handleViewport from 'react-in-viewport';

function Feed(props) {
  const [posts, setPosts] = useState([])

  const fetchData = async () => {
    const newPosts = []
    const usersRawData = await getUsers(5)
    const photosRawData = await getPhotos(5)
    console.log(usersRawData)
    for(let i = 0; i < 5; i++){
      const userRawData = usersRawData[i]
      const photoRawData = photosRawData[i]
      const postData = {
        userData: {
          name: userRawData.name.first + " " + userRawData.name.last,
          nick: userRawData.email.replace(/@[\w\d\s.]+/ig,""),
          photoUrl: userRawData.picture.thumbnail,
          photoLargeUrl: userRawData.picture.large
        },
        postPhotoUrl: photoRawData.download_url
      }
  
      newPosts.push(
        <FeedPost key={postData.userData.name + postData.postPhotoUrl} postData={postData}/>
      )
    }
    setPosts([...posts, ...newPosts])
  }

  useEffect(()=>{
    fetchData()
  }, [])
  
  const ViewportDiv = handleViewport((props) => <div ref={props.forwardedRef} style={{height:1}}/>)

  return (
    <div>
      {posts}
      <ViewportDiv onEnterViewport={() => {
        if(posts[0]){
          console.log("fetching");
          fetchData()
        }
      }}/>
    </div>
  );
}

export default Feed;