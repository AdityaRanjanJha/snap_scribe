import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://adityaranjanjha:hKPWkNuWqy9opdyf@cluster0.3cbpy.mongodb.net/snap-scribe');
    console.log('Database connected');
}

