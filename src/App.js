import './App.css';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';
import { useState } from 'react';

function App() {

const [comments , setComments]= useState([])

  return (
    <div className='flex justify-center mt-10'>
      <div className='w-1/2 border border-black p-6'>
        <CommentForm setComments={setComments}/>
        <CommentList allComments={comments} />
      </div>

    </div>
  );
}

export default App;
