const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const cors = require('cors');
const DATA = require('./constant');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 

function isPasswordCorrect(hash, reqPassword) {
  const reqHash = crypto.createHmac('sha256', DATA.SECRET_PASS).update(reqPassword).digest('hex');
  return reqHash === hash;
}

function genToken(data) {
  return jwt.sign(data, DATA.SECRET_PASS, { expiresIn: '1h' });
}

function verifyToken(token) {
  return jwt.verify(token, DATA.SECRET_PASS);
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
  if(req.user.role === DATA.ROLES.ADMIN) {
    return next();
  }

  res.status(403).send({ message: 'Sorry, you\'re not an admin' });
} 

app.post('/login', (req, res) => {
  const user = Object.values(DATA.USERS).filter(u => u.email === req.body.email)[0];
  if(!!user && isPasswordCorrect(user.passwordHash, req.body.password)) {
    const token = genToken({ id: user.id, name: user.name, role: user.role });
    res.send({ token });
    return;
  }

  res.status(401).send({message: 'Invalid email or password'});
});

app.get('/profile', isAuthenticated, (req, res) => {
  const { role, passwordHash, ...profile } = DATA.USERS[req.user.id];
  res.status(200).send(profile);
});

app.get('/accounts', [isAuthenticated, isAdmin], (req, res) => {
  const users = Object.values(DATA.USERS).map(user => {
    const { passwordHash, ...rest } = user;
    return rest;
  });
  res.status(200).send(users);
})

app.listen(3000, () => console.log(`Example app listening on port 3000!`));