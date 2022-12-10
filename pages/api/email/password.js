const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

export default async function handler(req, res) {
  const { name, email, message } = req.body;
  const msg = {
    to: 'deadourfreedom@gmail.com', // Change to your recipient
    from: 'emilie.tkv@hotmail.com', // Change to your verified sender
    subject: "Contact",
    html: `<p><strong>name: </strong>${name}</p>
    <p><strong>email: </strong>${email}</p>    
    <p><strong>message: </strong>${message}</p>`,
  };
  await sgMail.send(msg)
  .then(() => {
    res.status(200).json({ success: true });
    console.log('Email sent')
  })
  .catch((error) => {
    res.status(400).json({ success: false });
    console.error(error)
  })
  
}