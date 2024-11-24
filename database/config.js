import { connect } from 'mongoose';

const dbConnection = async () => {
    try {
        await connect(process.env.MONGO_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to database server');
    } catch (error) {
        console.error('Error:', error.message);
    }
}

export default dbConnection;
