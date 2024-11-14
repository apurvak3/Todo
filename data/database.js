import mongoose from 'mongoose';

// Define the connectDb function
const connectDb = () => {
    mongoose.connect("mongodb://127.0.0.1:27017", {
        dbName: "backendapi",
    })
    .then(() => {
        console.log("Database connected");
    })
    .catch((e) => console.log(e));
};

// Export the connectDb function
export { connectDb };
