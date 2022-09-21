const CommentList = ({ allComments }) => {



  if (allComments.length === 0) {
    return <h2>No comments</h2>
  }

  else {
    return (
      <div className=' border border-black p-6 m-3'>
        <ul>
          {allComments.map((comment) => <li key={comment.text}>{comment.text}</li>)}
        </ul>

      </div>
    )
  }
}

export default CommentList