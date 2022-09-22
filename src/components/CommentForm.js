import React, { useState } from 'react'

const CommentForm = ({ setComments }) => {
  const [text, setText] = useState("")
  const [checked, setChecked] = useState(false)

  // const addComments =()=>{
  //   console.log('clicked')
  //   setComments((prev)=>[...prev,{id: Date.now().toString+ Math.random().toString, text:text}])
  //   setText('')
  // }

  const postComment = async () => {
    const res = await fetch('http://localhost:5000/addcomment', {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        id: Math.random().toString(),
        text: text
      })
    })
    const result = await res.json()
    setComments((prev) => [...prev, result])
    setText("")
  }
 

  return (
    <div className=' border border-black p-6 m-3'>
      <h2>Comment Form</h2>
      <input
        className='my-2 p-2 block border rounded-lg border-black'
        placeholder="write your comment here"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <input
        className='mr-4 my-2'
        type="checkbox"
        id="checkbox"
        defaultChecked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label htmlFor="checkbox">
        I agree to terms and conditions
      </label>
      <button
        className='block border rounded-lg px-1 my-2 border-black'
        disabled={!checked || !text}
        onClick={postComment}
      >

        comment
      </button>
    </div>
  )
}

export default CommentForm