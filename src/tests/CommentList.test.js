import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CommentList from '../components/CommentList';


test('Comment List test', () => {
    render(<CommentList allComments={[]} />)

    const h2Element = screen.getByText('No comments', { exact: false })
    expect(h2Element).toBeInTheDocument()
})
test('List all comment', () => {
    const comments = []
    render(<CommentList allComments={comments} />)
    const h2Element = screen.queryByText('No comments', { exact: false })
    // expect(h2Element).not.toBeInTheDocument()

    // const commentLi = screen.getAllByRole('listitem')
    // expect(commentLi.length).toBe(comments.length)
})