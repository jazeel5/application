// const { default: mongoose } = require('mongoose');
const mongoos = require('mongoose');
const mongoURI = "mongodb+srv://jazeel4:jazeel4@applicationcluster.lflaj8i.mongodb.net/application?retryWrites=true&w=majority"

const connectToMongo = async ()=>{
    await mongoos.connect(mongoURI, ()=>{
        try{
        console.log("connected to mongo successfully");
        }
        catch{
        console.log("connection failed to mongo");
        }
    })
}

module.exports = connectToMongo;
