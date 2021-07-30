const mongoose = require('mongoose')
const db_connection = () =>{
    mongoose.connect('mongodb+srv://rayhane:rayhane1995@cluster0.kpjba.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      }
    )
 .then(() =>{ console.log('data_base connected')})
    .catch(()=>{console.log('error bch tetarcheg')})

} 
module.exports = db_connection