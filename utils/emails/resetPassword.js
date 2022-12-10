const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.url = url;
    this.fromEmail = 'deadourfreedom@gmail.com';
    this.fromName = 'E-Scoot';
  }

  async sendMagicLink() {
    const mailOptions = {
      to: this.to,
      from: {
        email: this.fromEmail,
        name: this.fromName,
      },
      templateId: 'd-9c20acde73054548afd6ab197e36b90d ',
      dynamic_template_data: {
        url: this.url,
      },
    };

    await sgMail.send(mailOptions).then(() => {}, console.error);
  }
};