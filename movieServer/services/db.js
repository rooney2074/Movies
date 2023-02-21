//1. import mongoose

const { log } =require('console')
const mongoose = require('mongoose')

//Define connection String

mongoose.connect('mongodb://localhost:27017/Store',()=>{
    console.log('mongoose connected')
})

//model creation 

const Movie = mongoose.model('movie',{

    id:Number,
    name:String,
    cover:String,
    cover2:String,
    rating:Number,
    price:Number,
    video:String,
    size:Number,
    download:String,
    reviews:{
        author:String,
        published_on:String,
        review:String
    }

})


const Wishlist = mongoose.model('Wishlist',{

    id:Number,
    name:String,
    cover:String,
    cover2:String,
    rating:Number,
    price:Number,
    video:String,
    size:Number,
    download:String,
    reviews:{
        author:String,
        published_on:String,
        review:String
    }


})

const Upcome = mongoose.model('upcome',{

    id:Number,
    name:String,
    cover:String,
    video:String,
    about:String
})

const User = mongoose.model('User',
{
    username:String,
    password:Number
})

const Feedback = mongoose.model('Feedback',
{
    name:String,
    rate:Number
})

const Admin = mongoose.model('Admin',
{
    id:Number,
    name:String
})


module.exports={
    Movie,Wishlist,Upcome,User,Feedback,Admin
}