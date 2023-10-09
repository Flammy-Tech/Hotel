const express =require('express')
const app =express()
const port =3000

app.use(express.static('public'))
app.use('css', express.static(__dirname + 'public/css'))
app.use('js', express.static(__dirname + 'public/js'))
app.use('img', express.static(__dirname + 'public/img'))

app.set('view engine', 'ejs');



//Routes
const homeRouter = require('./routes/home');
const ordersRouter = require('./routes/orders');
const signupRouter = require('./routes/signup');
app.use('/', homeRouter);
app.use('/orders',ordersRouter);
app.use('/signup', signupRouter)

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
})