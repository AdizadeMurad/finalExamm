import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()


app.use(express.json())
app.use(cors())


const port = 3000


const blogSchema = new mongoose.Schema({
    title: String, // String is shorthand for {type: String}
    image: String,
    text: String,
    price:Number,

});

const productModel = mongoose.model('products', blogSchema);


app.get('/products', async (req, res) => {
    const product = await productModel.find()
    res.send(product)
})


app.get('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await productModel.findById(id)

    res.send(product)
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await productModel.findByIdAndDelete(id)
    res.send(product)
})


app.post('/products', async (req, res) => {
    const body = req.body
    const product = new productModel(body)
    await product.save()
    res.send(product)
})


app.put('/products/:id', async (req, res) => {
    const { id } = req.params
    const body = req.body
    const product = await productModel.findByIdAndUpdate(id,body)
    res.send(product)
})



mongoose.connect('mongodb+srv://bd7xw445u:bd7xw445u@cluster0.98bgcim.mongodb.net/')
    .then(() => {
        console.log('Connected...!');
    })



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})