import express from 'express';
import router from './routes/index';

const app = express();
const port = 1245;

// Get access to all routes define in the router
app.use('/', router);

app.listen(port);

export default app;
