//import logger from './logger';
import app from './app';
//import { connectDb } from './db/Mongoose';

const PORT = process.env.PORT || 3000;

//connectDb();

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`)
  //logger.info(`App is listening on ${PORT}`);
});
