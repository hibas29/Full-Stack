const config = require('./config');

const connectDatabase = async () => {
    try {
        await config.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
connectDatabase();