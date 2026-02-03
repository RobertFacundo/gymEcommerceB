import express from 'express';
import cors from 'cors';
import authRoutes from './modules/auth/routes/auth.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (_, res) => {
    res.send('API running');
});

app.use('/api/auth', authRoutes);

export default app;