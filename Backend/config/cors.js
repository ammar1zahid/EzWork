// import { CorsOptions } from 'cors';

const corsOptions = {
    origin: ['http://localhost:5173','http://localhost:5174'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, //for passing cookies 
    optionsSuccessStatus: 204,
};

export default corsOptions;