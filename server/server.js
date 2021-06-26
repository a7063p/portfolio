

const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const creds = require('./config');
const SMTPConnection = require("nodemailer/lib/smtp-connection");




let transport = {
    host: 'smtp-mail.outlook.com',
    port: 587,
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
        console.log("this error", error);
    } else {
        console.log('All works fine')
    }
});

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {

        from: 'ap@ampiusa.com',
        to: "andrewpennucci@yahoo.com",
        subject: "Breacher X Files Form Submission",
        html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: </br> ${message}</p>`,
    };
    console.log(name)
    transporter.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            console.log(mail)
            res.json({ status: "Message Sent" });
        }
    });

    console.log(mail)
});