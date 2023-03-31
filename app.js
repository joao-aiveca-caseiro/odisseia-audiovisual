const express = require("express");
const ejs = require("ejs");
const nodemailer = require("nodemailer");
const mailinfo = require("./priv/mailinfo.js")
const compression = require('compression')

//coisas de jsdom

var jsdom = require("jsdom");
const {  JSDOM  } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var $ = require('jquery')(window);

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(compression());


app.get('/', function(req, res) {
  res.render("index");
});

app.get("/portfolio", function (req, res) {
  res.render("portfolio");
});

app.get("/sobre", function (req, res) {
  res.render("sobre");
});

app.get("/contactos", function (req, res) {
  res.render("contactos");
});

app.get("/privacidade", function (req, res) {
  res.render("privacidade");
});

app.post("/contactos", function(req, res){
console.log("Data:", req.body);

async function main() {

    let transporter = nodemailer.createTransport({
    host: "mail.odisseiaaudiovisual.pt",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: mailinfo.email, // generated ethereal user
      pass: mailinfo.password, // generated ethereal password
    },
  });

  // verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});


  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "geral@odisseiaaudiovisual.pt", // sender address
    to: "geral@odisseiaaudiovisual.pt", // list of receivers
    subject: req.body.assunto, // Subject line
    text: `<${req.body.email}> \n${req.body.assunto} \n${req.body.mensagem}`, // plain text body
    // html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

}

main().catch(console.error);

});

/* app.use((req, res) => {
  res.status(404).redirect('/')
}); */

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
