const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const http = require('http');


// Get our API routes
//const api = require('./server/routes/api');

const app = express();

// Parsers
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json()); 

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
//app.use('/api', api);
//app.post("/api/send", sendMailApi);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});
//*****
app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

app.post('/api/send', function(req, res) {
	//  res.send(req.body);
	// console.log(req.body);
	const output= `
         <p> You have a new message</p>
         <h3>Contact Details</h3>
         <ul>
         <li>Name: ${req.body.who}</li>
         <li>Email: ${req.body.email}</li>
          </ul>
          <h3>message</h3>
          <p>${req.body.message}</p>
	`;
	let transporter = nodemailer.createTransport({
        service: 'service',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'sender@company.com', // generated ethereal user
            pass: 'password'  // generated ethereal password
        },
        tls:{
        	rejectUnauthorised: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Fred Foo 👻" <sender@company.com>', // sender address
        to: 'reciever@company.com', // list of receivers
        subject: 'Node message ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
            res.status(500).send('Something broke!');
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.json({"msg":"message has been sent!"});
        });
    
});
//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));