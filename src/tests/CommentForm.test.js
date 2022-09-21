import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CommentForm from '../components/CommentForm';

test('Initial Condition', () => {
    render(<CommentForm />)
    const commentInput = screen.getByRole('textbox')
    expect(commentInput).toBeInTheDocument()
    const checkbox = screen.getByLabelText('I agree to terms and conditions')
    expect(checkbox).toBeInTheDocument()
    const submitButton = screen.getByRole("button", { name: 'comment', exact: false })
    expect(submitButton).toBeDisabled()
})

test('Enable submit button on type and checkbox click', () => {
    render(<CommentForm />)
    const commentInput = screen.getByRole('textbox')
    const checkbox = screen.getByLabelText('I agree to terms and conditions')
    const submitButton = screen.getByRole("button", { name: 'comment', exact: false })

    fireEvent.change(commentInput, {target: {value: 'something..'}})
    userEvent.click(checkbox)
    expect(submitButton).toBeEnabled()
    userEvent.click(checkbox)
    expect(submitButton).toBeDisabled()


})