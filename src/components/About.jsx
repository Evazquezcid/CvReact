import React from 'react'
import "./About.scss"

const About = ({about}) => {
  return (
    <div className='sobremi'>
    <h3> - About Me - </h3>
    <p>{about.info}</p>
    
    </div>
  )
}

export default About