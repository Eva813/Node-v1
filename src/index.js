const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const keys = require('./config/keys');
require('./services/passport');
//require('./routes/authRoutes') 會回傳函式，再加入app參數，直接呼叫
require('./routes/authRoutes')(app);

mongoose.connect(keys.mongoURI);

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});


const PORT = process.env.PORT || 8000;
app.listen(PORT)
