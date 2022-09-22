import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import App from "../App"


test('Comment gets displayed after submitting', async () => {
    render(<App />)

    const checkbox = screen.getByLabelText('I agree to terms and conditions', { exact: false })
    const commentInput = screen.getByRole('textbox')
    const submitButton = screen.getByRole("button", { name: 'comment', exact: false })

    fireEvent.change(commentInput, { target: { value: 'Nice pic dear' } })
    fireEvent.click(checkbox)
    fireEvent.click(submitButton)
    // dsd
    // const commentLi = screen.getByText('Nice pic dear', { exact: false })
    const commentLi = await screen.findByText('Nice pic dear', { exact: false })

    expect(commentLi).toBeInTheDocument()
})
test('2 Comment gets displayed after submitting', async () => {
    render(<App />)

    const checkbox = screen.getByLabelText('I agree to terms and conditions', { exact: false })
    const commentInput = screen.getByRole('textbox')
    const submitButton = screen.getByRole("button", { name: 'comment', exact: false })

    fireEvent.change(commentInput, { target: { value: 'Nice pic dear' } })
    fireEvent.click(checkbox)
    fireEvent.click(submitButton)

    fireEvent.change(commentInput, { target: { value: 'awesome' } })
    fireEvent.click(submitButton)

    await waitFor(() => {

        const commentLi = screen.getAllByRole('listitem')
        expect(commentLi.length).toBe(2)
    })


})