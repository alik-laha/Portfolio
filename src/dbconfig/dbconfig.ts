import mongoose from 'mongoose';
const url=process.env.MONGO_URL;

const connectDB = async () => {
    try{
        await mongoose.connect(url!).then(data => { 
            console.log(`Connected to MongoDB on ${url}`);
        }).catch(err => {
            console.log(`Error connecting to MongoDB: ${err}`);
        });
    }
    catch(err){
        console.log(err);
    }
}
export default connectDB;