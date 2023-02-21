const db = require('./db')

  const register=(username,password)=>{
    return db.User.findOne({username})
    .then(user=>{
        if(user){
            return{
                status:false,
                statusCode:400,
                message:'user already registered'
            }
        }
        else{
            const newUser=new db.User({
                username:username,
                password:password
                })
            newUser.save();

            return{
                status:true,
                statusCode:200,
                message:'registeration successfull'
            }
        }
    })
  }

  const submit=(name,rate)=>{
    return db.Feedback.findOne({name})
    .then(user=>{
        if(user){
            return{
                status:false,
                statusCode:400,
                message:'Name Already Exist'
            }
        }
        else{
            const newFeed=new  db.Feedback({
                name:name,
                rate:rate
                })
            newFeed.save();

            return{
                status:true,
                statusCode:200,
                message:'Feedback Saved'
            }
        }
    })
  }

  const getfeed =()=>{
    return db.Feedback.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'Your Feedback is Empty'
                }
            }
        }
    )
}

  const login=(username,password)=>{
    return db.User.findOne({username,password})
    .then(user=>{
        if(user){

            currentUser=user.username

        return{
            status: true,
            statusCode: 200,
            message: 'Login successful',
            currentUser:currentUser
        }

        }
        else{
            return {
              status: false,
              statusCode: 400,
              message: 'Invalid userdetails'
            }
          }
        
    })
  }

  const adminlogin=(id,name)=>{
    return db.Admin.findOne({id,name})
    .then(user=>{
        if(user){

        return{
            status: true,
            statusCode: 200,
            message: 'Login successful',
        }

        }
        else{
            return {
              status: false,
              statusCode: 400,
              message: 'Invalid userdetails'
            }
          }
        
    })
  }

//get all the prduct from db

const getMovies =()=>{
    return db.Movie.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'No Movies found'
                }
            }
        }
    )
}



const UpComes =()=>{
    return db.Upcome.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'No Movies found'
                }
            }
        }
    )

}

const addwish =(id,name,cover,cover2,rating,price,video,size,download,reviews)=>{
    return db.Wishlist.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    message:"Movie already exsist"
                }
            }else{
                const Product = new db.Wishlist({id,name,cover,cover2,rating,price,video,size,download,reviews})
                Product.save()
                return{
                    status:false,
                    statusCode:400,
                    message:"Movie added successfully"
                }
            }
        }
    )
}

const admin =(id,name,cover,cover2,rating,price,video,size,download)=>{
    return db.Movie.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    message:"Movie alreadyuuuu exsist"
                }
            }else{
                const Product = new db.Movie({id:id,name:name,cover:cover,cover2:cover2,rating:rating,price:price,video:video,size:size,download:download})
                Product.save()
                return{
                    status:false,
                    statusCode:400,
                    message:"Movie added successfully"
                }
            }
        }
    )
}

const getWishlist =()=>{
    return db.Wishlist.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'Your watch list is Empty'
                }
            }
        }
    )
}
const deletewish=(id)=>{
    return db.Wishlist.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    wishlist:result,
                    message:"Movie removed"
                }
        }
        else{
            return{
                status:false,
                statusCode:400,
                message:"Your Watch list is empty"
            }
        }
    }
    )
}

const viewMovie =(id)=>{
    return db.Wishlist.find({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    product:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'No Movies found'
                }
            }
        }
    )
}


module.exports ={
    getMovies,
    addwish,
    getWishlist,
    UpComes,
    deletewish,
    viewMovie,
    register,
    login,
    submit,
    getfeed,
    admin,
    adminlogin
}