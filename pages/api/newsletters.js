import nodemailer from 'nodemailer';
import API_BASE_URL from '../../utils/apiUrl';
// import sgTransport from 'nodemailer-sendgrid-transport';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
});

export default async (req, res) => {

    const { newsletter } = req.body;
    fetch(`https://cwsadmin.in/items/newsletter`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"email": newsletter}),
    })
        .then((response) => response.json())
        .then((data) => {
            //console.log('Success:', data);
        })
        .catch((error) => {
            //console.error('Error:', error);
        });

    const data = {
        // Update your email here
        to: process.env.ADMIN_EMAIL,
        from: newsletter,
        subject: 'New CWS newsletter ',
        // text: text,
        html: `
           
            <b>Email :</b> ${newsletter} <br /> 
          
        `
    };

    transporter.sendMail(data, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send("Error proccessing charge");
        }
        //console.log(info);
        res.status(200).send("Email send successfully")
    });
};





// const transporter = {
//     auth: {
//         // Update your SendGrid API key here
//         api_key: '...'
//     }
// }

// const mailer = nodemailer.createTransport(sgTransport(transporter));

// export default async (req, res) => {
//     console.log(req.body)
//     const {name, email, number, subject, text} = req.body;

//     const data = {
//         // Update your email here
//         to: 'exampleyour@gmail.com',
//         from: email,
//         subject: 'Hi there',
//         text: text,
//         html: `
//             <b>From:</b> ${name} <br />
//             <b>Number:</b> ${number} <br />
//             <b>Subject:</b> ${subject} <br />
//             <b>Message:</b> ${text}
//         `
//     };
//     try {
//         const response = await mailer.sendMail(data);
//         console.log(response)
//         res.status(200).send("Email send successfully")
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("Error proccessing charge");
//     }
// }
