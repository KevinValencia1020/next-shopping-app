import 'dotenv/config';
import { PORT } from './lib/config.js';
import app from './app.js';

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});