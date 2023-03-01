import nodemailer from "nodemailer"

const sendMail = async (email,url) =>
{
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER, // generated ethereal user
      pass: process.env.PASSWORD, // generated ethereal password
    },
  });

  try
  {

    let info = await transporter.sendMail({
      from: '"NSS JMIETI" <nssjmieti@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "Verify Gmail ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>"+url+"</b>", // html body
    });
  }
  catch(err)
  {
    console.log(err);
  }
}

export default sendMail;

// 