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

const ROLES = {
  ADMIN: 'admin',
  USER: 'user'
}
const SECRET_PASS = 'secret1234pass!';
const USERS = {
  'b5d55e09-2f8f-4a9e-9ac1-29941397ece1': {
    id: 'b5d55e09-2f8f-4a9e-9ac1-29941397ece1',
    name: 'Admin',
    role: ROLES.ADMIN,
    email: 'admin@example.com',
    tel: '+48123456789',
    passwordHash: '92295db3afeb4aeb39abe41c7d596a7833f1362d6b6013d43dfa89b96d3449f3' //admin123
  },
  'de58b32c-291a-45a3-aeba-9911cbabef17': {
    id: 'de58b32c-291a-45a3-aeba-9911cbabef17',
    name: 'John',
    role: ROLES.USER,
    tel: '+48987654321',
    email: 'user@example.com',
    passwordHash: '5081e47a658989f140abc1e83f7640c13c26a0b82ecb89b516d9c9c297d97adc' //user123
  }
}

function isCorrectPassword(hash, reqPassword) {
  const reqHash = crypto.createHmac('sha256', SECRET_PASS).update(reqPassword).digest('hex');
  return reqHash === hash;
}

function genToken(data) {
  return jwt.sign(data, SECRET_PASS, { expiresIn: '1h' });
}

function verifyToken(token) {
  return jwt.verify(token, SECRET_PASS);
}

function isAuthenticated(req, res, next) {
  const authHeader = req.header('authorization');
  if(!authHeader) {
    res.status(500).send({ message: 'Internal server error' });
    return;
  }
  const accessToken = authHeader.split(' ')[1];
  
  try {
    const decoded = verifyToken(accessToken);
    req.user = { id: decoded.id, role: decoded.role };
    return next();
  } catch(e) {
    res.status(401).send({ message: 'Unathorized' });
  }
}

function isAdmin(req, res, next) {
  if(req.user.role === ROLES.ADMIN) {
    return next();
  }

  res.status(401).send({ message: 'Sorry, you\'re not an admin' });
} 

app.post('/login', (req, res) => {
  const user = Object.values(USERS).filter(u => u.email === req.body.email)[0];
  if(!!user) {
    if(isCorrectPassword(user.passwordHash, req.body.password)) {
      const token = genToken({ id: user.id, name: user.name, role: user.role });
      res.send({ token });
    } else {
      res.status(401).send({message: 'Invalid email or password'});
    }
  } else {
    res.status(401).send({message: 'Invalid email or password'});
  }
});

app.get('/profile', isAuthenticated, (req, res) => {
  const { role, passwordHash, ...profile } = USERS[req.user.id];
  res.status(200).send(profile);
});

app.get('/admin', [isAuthenticated, isAdmin], (req, res) => {
  res.status(200).send({ message: 'This endpoint is only for admin'});
})

app.listen(3000, () => console.log(`Example app listening on port 3000!`));