const express = require('express');
const app = express();
require('./services/passport');
//require('./routes/authRoutes') 會回傳函式，再加入app參數，直接呼
require('./routes/authRoutes')(app);

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});


const PORT = process.env.PORT || 8000;
app.listen(PORT)
