import React from 'react'
import User from './User'
import UserClass from './UserClass'

function About() {
  return (
    <div>
      <h1>About</h1>
      <User name="Pradeep React (function)"/>
      <UserClass name="Pradeep React(class)"/>
    </div>
  )
}

export default About