import React, { useEffect, useState } from 'react';
import getUsers from '../utils/getUsers';
import './Recommended.scss';
import Resume from './Resume';

function Recommended(props) {
  
  const [usersResumes, setUsersResumes] = useState([])

  useEffect(()=>{
    async function fetchData(){
      const usersRawData = await getUsers(5)
      const newUsersResumes = []
      for(const userRawData of usersRawData){
        const userData = {
          name: userRawData.name.first + " " + userRawData.name.last,
          nick: userRawData.email.replace(/@[\w\d\s.]+/ig,""),
          photoUrl: userRawData.picture.thumbnail
        }
        newUsersResumes.push(
          <Resume key={userData.name} userData={userData} size="sm"/>
        )
      }
      setUsersResumes(newUsersResumes)
    }
    fetchData()
  },[])
  

  return (
    <div className="recom">
      <h4>Sugerencias para ti</h4>
      {usersResumes}
    </div>
  );
}

export default Recommended;