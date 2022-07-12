import nodemailer from 'nodemailer';
// import sgTransport from 'nodemailer-sendgrid-transport';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: "dubaicwstechnology@gmail.com",
           pass: "Cws@123456"
       }
   });



   export default async (req, res) => {

    // console.log(req.body)
    const {name, email, number, subject, text} = req.body;
    const data = {
        // Update your email here
        to: 'shubham.k@cwsinfotech.com',
        from: email,
        subject: 'Hi there',
        text: text,
        html: `
            <b>From:</b> ${name} <br /> 
            <b>Number:</b> ${number} <br /> 
            <b>Subject:</b> ${subject} <br /> 
            <b>Message:</b> ${text} 
        ` 
    };

    transporter.sendMail(data, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send("Error proccessing charge");
        }
        console.log(info);
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
