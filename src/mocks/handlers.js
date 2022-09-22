// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
    rest.post('http://localhost:5000/addcomment', (req, res, ctx) => {

        return res(
            // Respond with a 200 status code
            ctx.json({
                id: req.body.id,
                text: req.body.text
            })
        )
    })



]