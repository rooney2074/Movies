const express = require('express')

const cors=require('cors')

const dataService = require('./services/dataService')

const app = express()

//to parse JSON
app.use(express.json())

app.listen(3000,()=>{
    console.log('listening to port 3000')
})

app.use(cors({
    origin:'http://localhost:4200'
}))

//api to get all products

app.get('/movies',(req,res)=>{
    dataService.getMovies()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/addwish',(req,res)=>{
    dataService.addwish(req.body.id,req.body.name,req.body.cover,req.body.cover2,req.body.rating,req.body.price,req.body.video,req.body.size,req.body.download,req.body.reviews)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/moviess',(req,res)=>{
    dataService.admin(req.body.id,req.body.name,req.body.cover,req.body.cover2,req.body.rating,req.body.price,req.body.video,req.body.size,req.body.download)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

app.get('/getwishlist',(req,res)=>{
    dataService.getWishlist()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.get('/upcomes',(req,res)=>{
    dataService.UpComes()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.delete('/deletewish/:id',(req,res)=>{
    dataService.deletewish(req.params.id)
    .then((result)=>{
        res.status(result.statusCode).json(result) 
    })
})

app.get('/movies',(req,res)=>{
    dataService.viewMovie(req.params.id)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

//register
app.post('/register',(req,res)=>{
    dataService.register(req.body.username,req.body.password)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

//login
app.post('/login',(req,res)=>{
    dataService.login(req.body.username,req.body.password)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/adminlogin',(req,res)=>{
    dataService.adminlogin(req.body.id,req.body.name)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/feedback',(req,res)=>{
    dataService.submit(req.body.name,req.body.rate)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.get('/getfeed',(req,res)=>{
    dataService.getfeed()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})
