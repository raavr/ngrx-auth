const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 

const SECRET_PASS = 'secret1234pass!';
const USERS = {
  'admin@example.com': {
    id: 1,
    name: 'Admin',
    role: 'admin',
    passwordHash: '92295db3afeb4aeb39abe41c7d596a7833f1362d6b6013d43dfa89b96d3449f3' //admin123
  },
  'user@example.com': {
    id: 2,
    name: 'John',
    role: 'user',
    passwordHash: '5081e47a658989f140abc1e83f7640c13c26a0b82ecb89b516d9c9c297d97adc' //user123
  }
}

function isCorrectPassword(email, password) {
  const passwordHash = USERS[email].passwordHash;
  const reqHash = crypto.createHmac('sha256', SECRET_PASS).update(password).digest('hex');
  return reqHash === passwordHash;
}

function genToken(data) {
  return jwt.sign(data, SECRET_PASS, { expiresIn: '1h' });
}

app.post('/login', (req, res) => {
  const user = USERS[req.body.email];
  if(!!user) {
    if(isCorrectPassword(req.body.email, req.body.password)) {
      const { passwordHash, ...userProfile } = user;
      const token = genToken(userProfile);
      res.send({ token });
    } else {
      res.status(401).send({message: 'Invalid email or password'});
    }
  } else {
    res.status(401).send({message: 'Invalid email or password'});
  }
})

app.listen(3000, () => console.log(`Example app listening on port 3000!`));