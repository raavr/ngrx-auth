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
    name: 'Awesome Admin',
    role: ROLES.ADMIN,
    email: 'admin@example.com',
    phone: '+48123456789',
    passwordHash: '92295db3afeb4aeb39abe41c7d596a7833f1362d6b6013d43dfa89b96d3449f3', //admin123
    avatar: 'http://lorempixel.com/100/100/sports/3/'
  },
  'de58b32c-291a-45a3-aeba-9911cbabef17': {
    id: 'de58b32c-291a-45a3-aeba-9911cbabef17',
    name: 'John Doe',
    role: ROLES.USER,
    phone: '+48987654321',
    email: 'user@example.com',
    passwordHash: '5081e47a658989f140abc1e83f7640c13c26a0b82ecb89b516d9c9c297d97adc', //user123
    avatar: 'http://lorempixel.com/100/100/sports/2/'
  },
  '2679f8ee-3ef3-4ec5-b290-01a3a72f439f': {
    id: '2679f8ee-3ef3-4ec5-b290-01a3a72f439f',
    name: 'Peter Parker',
    role: ROLES.USER,
    phone: '+48000000000',
    email: 'peter@example.com',
    passwordHash: 'f551f346de2c85fb712911885502bca57684c777ac425a3c87e3e54137986f28', //peter123
    avatar: 'http://lorempixel.com/100/100/sports/5/'
  },
  '2506b2ea-a4d1-4147-8830-0d6d655163c0': {
    id: '2506b2ea-a4d1-4147-8830-0d6d655163c0',
    name: 'Tony Stark',
    role: ROLES.USER,
    phone: '+48111222333',
    email: 'stark@example.com',
    passwordHash: 'fb9a9e1850b8da5c12fc9dafa7e69f2b99ae5661495dc8c1e73b364e8b83ac40', //stark123
    avatar: 'http://lorempixel.com/100/100/sports/6/'
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
    res.status(401).send({ message: 'Unauthorized' });
  }
}

function isAdmin(req, res, next) {
  if(req.user.role === ROLES.ADMIN) {
    return next();
  }

  res.status(403).send({ message: 'Sorry, you\'re not an admin' });
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

app.get('/accounts', [isAuthenticated, isAdmin], (req, res) => {
  const users = Object.values(USERS).map(user => {
    const { passwordHash, ...rest } = user;
    return rest;
  });
  res.status(200).send(users);
})

app.listen(3000, () => console.log(`Example app listening on port 3000!`));