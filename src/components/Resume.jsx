import React from 'react';
import { Avatar } from 'antd';
import './Resume.scss'

function Resume(props) {
  const {userData={}, style={}} = props
  const {
    name="Juana Lopez", 
    nick="juana.lopz", 
    photoUrl="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
  } = userData

  let size
  let fontSize
  
  if(props.size && props.size === "sm"){
    size = 40
    fontSize = 12
  } else {
    size = 60
    fontSize = 14
  }

  return (
    <div className="resume" style={style}>
      <Avatar size={size} src={photoUrl}/>
      <div className="resume-data">
        <div className="resume-data-cont">
          <p className="nickname" style={{fontSize: fontSize}}>{nick}</p>
          <p className="fullname" style={{fontSize: fontSize}}>{name}</p>
        </div>
      </div>
    </div>
  );
}

export default Resume;