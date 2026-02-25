import express from 'express';
import path from 'path';
import cors from 'cors';
import authRoutes from './modules/auth/routes/auth.routes';
import productsRoutes from './modules/products/routes/products.routes';
import cartRoutes from './modules/cart/routes/cart.routes';
import webhookRoutes from './modules/orders/routes/webhook.routes';
import checkoutRoutes from './modules/orders/routes/checkout.routes';
import membershipRoutes from './modules/membership/routes/membership.routes';
import membershipWebhookRoutes from './modules/membership/routes/webhook.route'

const app = express();

app.use(cors({
  origin: 'https://gym-ecommerce-f.vercel.app',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-guest-id'],
}));
app.use(
  '/api/checkout/webhook',
  express.raw({ type: 'application/json' }),
  webhookRoutes
);
app.use(
  '/api/membership/webhook',
  express.raw({ type: 'application/json' }),
  membershipWebhookRoutes
);

app.use(express.json());

app.get('/health', (_, res) => {
  res.send('API running');
});

app.use('/api/auth', authRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/checkout', checkoutRoutes);
app.use('/api/membership', membershipRoutes);

app.use(
  "/images",
  express.static(path.join(process.cwd(), "public/images"))
);

export default app;