import express, {Request, Response, Express} from "express"
import path from "path"

const app: Express = express()
const port: number = 3000

app.use(express.json())

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

app.get('/hello', (req: Request, res: Response) => {
    res.json({ msg: "Hello world!" })
})

app.get('/echo/:id', (req: Request, res: Response) => {
    res.json(req.params)
})

app.post('/sum', (req: Request, res: Response)=>{
    let numbersArr: number[] = req.body.numbers
    let sum: number = 0
    numbersArr.forEach((element) =>
        sum = sum + element
   )
    res.json({'sum': sum})
})

type TUser = {
    name: string,
    email: string
}
let myUser: Array<TUser> = []

app.post('/user', (req: Request, res: Response)=>{
   
    myUser.push(req.body)
    console.log(myUser)
})


app.use(express.static(path.join(__dirname, "../public")))