import nodemailer from "nodemailer"

const sendMail = async (name,_id,message) =>
{
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER, // generated ethereal user
      pass: process.env.PASSWORD, // generated ethereal password
    },
  });
  console.log(name,_id)

  let info = await transporter.sendMail({
    from: '"NSS JMIETI" <nssjmieti@gmail.com>', // sender address
    to: "mayank8520125@jmieti.edu.in", // list of receivers
    subject: "FeedBack for NSSJMIETI", // Subject line
    html:"<h4> User Name :"+name+" , Id:"+_id+"</h4><h3>"+message+"</h3>", // html body
  });
}

export default sendMail;
