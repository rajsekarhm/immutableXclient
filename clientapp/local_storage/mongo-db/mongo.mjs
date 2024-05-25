import mongoose from 'mongoose'
mongoose.connect('mongodb+srv://aptos.xggy07j.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  auth: {
    username: 'rajasekarrr2002',
    password: 'NDeQWWscOq2GoS8k'
  }
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});
