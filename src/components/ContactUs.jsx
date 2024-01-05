import React from 'react'

function ContactUs() {
  return (
    <div>
      <h1 className='font-bold text-3xl p-4 m-4'>Contact Us Page</h1>
      <form>
        <input
          type='text'
          className='border border-black p-2 m-2'
          placeholder='Name'
        />
        <input
          type='text'
          className='border border-black p-2 m-2'
          placeholder='Message'
        />
        <button className='border border-black p-2 m-2 bg-black text-white rounded-lg'>Submit</button>
      </form>

    </div>
  )
}

export default ContactUs