import express from 'express';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import gigRoutes from './routes/gig.route.js';
import reviewRoutes from './routes/review.route.js';
import orderRoutes from './routes/order.route.js';
import conversationRoutes from './routes/conversation.route.js';
import messageRoutes from './routes/message.route.js';


const Routers = express.Router();


Routers.use('/auth',authRoutes );

// Routes to  user
Routers.use('/users', userRoutes);


Routers.use('/gig', gigRoutes);


Routers.use('/reviews', reviewRoutes);

Routers.use('/orders', orderRoutes);

Routers.use('/conversations', conversationRoutes);

Routers.use('/messages', messageRoutes);




export default Routers;