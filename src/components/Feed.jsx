import React, { useEffect, useState } from 'react';
import FeedPost from './FeedPost';
import getUsers from '../utils/getUsers';
import getPhotos from '../utils/getPhotos';
import handleViewport from 'react-in-viewport';
import { LoadingOutlined } from '@ant-design/icons';
import './Feed.scss'

function Feed(props) {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])

  const fetchData = async () => {
    setLoading(true)
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
    setLoading(false)
  }

  useEffect(()=>{
    fetchData()
  }, [])
  
  const loadingIcon = <LoadingOutlined style={{ fontSize: 40, color: "#ccc" }} spin/>;
  const SpinDiv = (props) => 
    <div ref={props.forwardedRef} className="spinDiv">
      <div className="spinCont">
        {/*<h3>LOADING...</h3>*/}
        {loadingIcon}
      </div>
    </div>
  
  const ViewportDiv = handleViewport(SpinDiv)
  return (
    <div style={{position: "relative"}}>
      {posts}
      <ViewportDiv onEnterViewport={() => {
        if(posts[0] && loading===false){
          //console.log("fetching");
          fetchData()
        }
      }}/>
    </div>
  );
}

export default Feed;