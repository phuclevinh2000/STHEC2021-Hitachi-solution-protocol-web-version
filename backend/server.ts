import express, {Application, Request, Response} from "express"
import products from "./data/products"
import cargotery from "./data/cargotery"

const app: Application = express()

app.get('/', (req: Request, res: Response) => {
  res.send("API is running")
})

app.get('/api/products',(req: Request, res: Response) => {
  res.json(products)
})

app.get('/api/cargotery',(req: Request, res: Response) => {
  res.json(cargotery)
})

app.get('/api/products/:id',(req: Request, res: Response) => {
  const product = products.find(p => p._id === req.params.id)
  res.json(product)
})
app.get('/api/')

app.listen(5000, () => {
  console.log("Started")
})