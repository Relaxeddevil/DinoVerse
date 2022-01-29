const express = require('express')
const app = express()


app.set('view engine', 'ejs')

// app.use(express.static('PixelDino/public'))

app.use(express.static('public'))

app.get('/', (req, res) => {

    res.render('index')

})

// app.get('/mint', (req, res) => {

//     // res.send('Mint Page')
//     res.send('<img src=images/pipes.ico>')

// })


app.listen(process.env.PORT || 3000)