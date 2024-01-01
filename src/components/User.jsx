import React from 'react'

function User({name}) {
  return (
    <div className='user-card'>
        <h2>Name: Pradeep</h2>
        <h3>Location: Dehradun</h3>
        <h4>Contact: @pradeepyadav</h4>
        <h4>Functional Component</h4>
        <h5>{name}</h5>
    </div>
  )
}

export default User