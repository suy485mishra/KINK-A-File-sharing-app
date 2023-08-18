import mongoose from 'mongoose';




const DBConnection=async()=>{
    const MONGODB_URL=`mongodb://suyash:suyashkese@ac-jeedncb-shard-00-00.dlgfrof.mongodb.net:27017,ac-jeedncb-shard-00-01.dlgfrof.mongodb.net:27017,ac-jeedncb-shard-00-02.dlgfrof.mongodb.net:27017/?ssl=true&replicaSet=atlas-p2t9ty-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
await mongoose.connect(MONGODB_URL,{useNewUrlParser:true});        
console.log('database connected');
    } catch (error) {
        console.error('error while connecting with the database',error.message);
    }
}
export default DBConnection;