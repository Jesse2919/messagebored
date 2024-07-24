console.log('Starting server setup...');
const app = require('./app');

const PORT = process.env.PORT || 9090;

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server is running on port ${PORT}`);
});
console.log('Server setup complete.');
