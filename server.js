const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Optional: use dotenv for env variables
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/signup', (req, res) => {
  const { fullName, email, country, password } = req.body;

  // TODO: Save to DB (MongoDB or Firebase)
  if (!fullName || !email || !country || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  console.log('User Data:', req.body);
  return res.status(200).json({ message: 'Signup received!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
