const express =require('express')
const app =express()
const port =3000

app.use(express.static('public'))
app.use('css', express.static(__dirname + 'public/css'))
app.use('js', express.static(__dirname + 'public/js'))
app.use('img', express.static(__dirname + 'public/img'))

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/public/pages/home.html')
})

app.get('/orders', (req,res)=>{
    res.sendFile(__dirname + '/public/pages/orders.html')
})

app.get('/signin', (req,res)=>{
    res.sendFile(__dirname + '/public/pages/signin.html')
})

app.post('/signin', (req,res)=>{
    res.sendFile(__dirname + '/public/pages/signin.html')
})

app.get('/download', (req,res)=>{
    res.download('index.js')
})


app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
})