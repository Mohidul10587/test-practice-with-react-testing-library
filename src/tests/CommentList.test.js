import {  render, screen } from '@testing-library/react';
import CommentList from '../components/CommentList';


test('Comment List test', () => {
    render(<CommentList allComments={[]} />)

    const h2Element = screen.getByText('No comments', { exact: false })
    expect(h2Element).toBeInTheDocument()
})
test('List all comment', () => {
    const comments =  [
        {id:1,text:"Comment 1"},
        {id:2,text:"Comment 2"},
    ]
    render(<CommentList allComments={comments} />)
    const h2Element = screen.queryByText('No comments', { exact: false })
    expect(h2Element).not.toBeInTheDocument()

    const commentLi = screen.getAllByRole('listitem')
    expect(commentLi.length).toBe(comments.length)
})