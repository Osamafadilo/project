import mongoose from 'mongoose';

// Function to connect to the database
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('🟢 MongoDB Connected');
  } catch (error) {
    console.error('🔴 MongoDB Connection Error:', error.message);
    process.exit(1);  // Exit the process with failure
  }
};

export default connectDB;
