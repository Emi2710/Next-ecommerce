const express = require("express");
const next = require("next");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const sendinblue = require('./api/commentMail');


dotenv.config();

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });

    
    server.use(bodyParser.json()).post('/api/email', (req, res) => {
      const { name, email, rating, comment } = req.body; //We will use this later
      let sendSmtpEmail = {
        to: [{
            email: 'sadegayovho@gmail.com' //TODO: Change this on production.
        }],
        templateId: 5,
        params: {
          name: name,
          email: email,
          rating: rating,
          comment: comment,
          
          
      },
      };
      sendinblue(sendSmtpEmail)
      res.send('success');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });