require('dotenv').config();
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const { DATABASE_URL } = require('./config');
const { Shelter } = require('./models');
const bodyParser = require('body-parser');
const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const jsonParser = bodyParser.json()

const app = express();

app.use(jsonParser);

mongoose.Promise = global.Promise;

// API endpoints go here!
const basicStrategy = new BasicStrategy((username, password, callback) => {
    let shelter;
    Shelter.findOne({email: username}).exec()
    .then(_shelter => {
        shelter = _shelter;
        if(!shelter) {
            return callback(null, false, {message: `Account ${username} does not exist`});
        }
        return shelter.validatePassword(password);
    })
    .then(isValid => {
        if (!isValid) {
            return callback(null, false, {message: `Incorrect password for ${username}`});
        }
        else {
            return callback(null, shelter);
        }
    })
    .catch(err => {
        console.log(err);
    });
})

passport.use(basicStrategy);
app.use(passport.initialize());

app.post('/api', jsonParser, (req,res) => {
    //checks if shelter already exists
    // return Shelter.count({name: req.body.name}).exec()
    // .then(count => {
    //     if(count > 0) {
    //         let message = `Shelter ${req.body.name} already exists`;
    //         console.error(message);
    //         return res.status(303).json({message: message})
    //     }
    //     return Shelter.hashPassword(req.body.password)
    // })
    // .then(hash => {
        Shelter.hashPassword(req.body.password).then(hash => {
            Shelter.create({
                name: req.body.name,
                email: req.body.email,
                password: hash,
                street: req.body.street,
                city: req.body.city,
                state: req.body.state,
                zipcode: req.body.zipcode,
                type: req.body.type,
                animals: []

            },(err, shelter) => {
                console.log(err);
                res.json(shelter);
            })
        })
  

    // })
})

// Client | Async Action (AJAX) => Server | Endpoint => Client | => Async Action => Reducer
app.post('/api/login', passport.authenticate('basic', {session: false}), (req, res) => {
    console.log('TEST POST');
    return res.status(200).json(req.user);
})

app.get('/api', (req, res) => {})

// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
    const index = path.resolve(__dirname, '../client/build', 'index.html');
    res.sendFile(index);
});

let server;
function runServer(port=3001) {
    return new Promise((resolve, reject) => {
        mongoose.connect(DATABASE_URL, err => {
            if (err) {
                return reject(err);
            }
            server = app.listen(port, () => {
                resolve();
            })
            .on('error', err => {
                reject(err)
            });          
        });
    });
}

function closeServer() {
    return new Promise((resolve, reject) => {
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

if (require.main === module) {
    runServer();
}

module.exports = {
    app, runServer, closeServer
};
