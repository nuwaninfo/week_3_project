import express, {Express} from "express"

const app: Express = express()
const port: number = 8000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})