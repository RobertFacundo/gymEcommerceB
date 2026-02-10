import express from 'express';
import path from 'path';
import cors from 'cors';
import authRoutes from './modules/auth/routes/auth.routes';
import productsRoutes from './modules/products/routes/products.routes'

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (_, res) => {
    res.send('API running');
});

app.use('/api/auth', authRoutes);
app.use('/api/products', productsRoutes)

app.use(
  "/images",
  express.static(path.join(process.cwd(), "public/images"))
);

export default app;