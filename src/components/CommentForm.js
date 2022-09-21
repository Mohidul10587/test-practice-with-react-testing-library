import React, { useState } from 'react'

const CommentForm = ({setComments}) => {
    const [text,setText] = useState("")
    const [checked,setChecked] = useState(false)

const addComments =()=>{
  setComments((prev)=>[...prev,{id:Date.now(), text:text}])
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
            onChange={()=> setChecked(!checked)}
          />  
          <label htmlFor="checkbox">    
            I agree to terms and conditions
          </label>
         <button 
          className='block border rounded-lg px-1 my-2 border-black'
          disabled={!checked || !text} 
          onClick={addComments}
         >
          
           comment
         </button>
    </div>
  )
}

export default CommentForm