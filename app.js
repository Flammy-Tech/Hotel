const express =require('express')
const bodyParser = require('body-parser');
const app =express()
const port =3000

app.use(express.static('public'))
app.use('css', express.static(__dirname + 'public/css'))
app.use('js', express.static(__dirname + 'public/js'))
app.use('img', express.static(__dirname + 'public/img'))

app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'ejs');



//Routes
const homeRouter = require('./routes/home');
const ordersRouter = require('./routes/orders');
const signupRouter = require('./routes/signup');
const reservationRouters = require('./routes/reservations');
const servicesRouter = require('./routes/services');
const contactRouter = require('./routes/contact');
app.use('/', homeRouter);
app.use('/orders',ordersRouter);
app.use('/signup', signupRouter)
app.use('/reservations', reservationRouters);
app.use('/services', servicesRouter);
app.use('/contact', contactRouter);

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
})