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

  let info = await transporter.sendMail({
    from: '"NSS JMIETI" <nssjmieti@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Verify Gmail ✔", // Subject line
    // text: "Hello world?", // plain text body
    html:`<!DOCTYPE html>
    <html lang="en" style="box-sizing: border-box;">
    <head style="box-sizing: border-box;">
        <meta charset="UTF-8" style="box-sizing: border-box;">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" style="box-sizing: border-box;">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" style="box-sizing: border-box;">
        
        <title style="box-sizing: border-box;">Document</title>
    </head>
    <body style="box-sizing: border-box;margin: 0;font-family: var(--bs-body-font-family);font-size: var(--bs-body-font-size);font-weight: var(--bs-body-font-weight);line-height: var(--bs-body-line-height);color: var(--bs-body-color);text-align: var(--bs-body-text-align);background-color: var(--bs-body-bg);-webkit-text-size-adjust: 100%;-webkit-tap-highlight-color: transparent;">
            <div class="card" style="display: flex;align-items: center;flex-direction: coloum;justify-content: space-between;background-color: black;margin-top: 2rem;border: 3px solid #303983;color: white;width: 400px;height: auto;box-sizing: border-box;--bs-card-spacer-y: 1rem;--bs-card-spacer-x: 1rem;--bs-card-title-spacer-y: 0.5rem;--bs-card-title-color: ;--bs-card-subtitle-color: ;--bs-card-border-width: var(--bs-border-width);--bs-card-border-color: var(--bs-border-color-translucent);--bs-card-border-radius: var(--bs-border-radius);--bs-card-box-shadow: ;--bs-card-inner-border-radius: calc(var(--bs-border-radius) - (var(--bs-border-width)));--bs-card-cap-padding-y: 0.5rem;--bs-card-cap-padding-x: 1rem;--bs-card-cap-bg: rgba(var(--bs-body-color-rgb), 0.03);--bs-card-cap-color: ;--bs-card-height: ;--bs-card-color: ;--bs-card-bg: var(--bs-body-bg);--bs-card-img-overlay-padding: 1rem;--bs-card-group-margin: 0.75rem;position: relative;min-width: 0;word-wrap: break-word;background-clip: border-box;border-radius: var(--bs-card-border-radius);">
                <img class="card-img-top" src="https://res.cloudinary.com/dbhvcitik/image/upload/v1679758404/WhatsApp_Image_2023-03-25_at_2.39.09_PM_jeioi2.jpg" style="box-sizing: border-box;vertical-align: middle;width: 100%;border-top-left-radius: var(--bs-card-inner-border-radius);border-top-right-radius: var(--bs-card-inner-border-radius);">
                <div class="card-body" style="box-sizing: border-box;flex: 1 1 auto;padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);color: var(--bs-card-color);">
                    <h5 class="card-title" style="text-align: center;border-bottom: 1px solid #303983;box-sizing: border-box;margin-top: 0;margin-bottom: var(--bs-card-title-spacer-y);font-weight: 500;line-height: 1.2;color: var(--bs-card-title-color);font-size: 1.25rem;">Welcome to NSS JMIETI</h5>
                    <p class="card-text" style="justify-content: center;font-size: 13px;font-weight: 700;box-sizing: border-box;margin-top: 0;margin-bottom: 1rem;">Please Verify Your Email to Login and get Started,Click the Button</p>
                    <a href="${url}" class="btn" style="display: flex;justify-content: center;align-items: center;background-color: #303983;color: white;font-size: 20px;border-radius: 30px;box-sizing: border-box;text-decoration: none;--bs-btn-padding-x: 0.75rem;--bs-btn-padding-y: 0.375rem;--bs-btn-font-family: ;--bs-btn-font-size: 1rem;--bs-btn-font-weight: 400;--bs-btn-line-height: 1.5;--bs-btn-color: var(--bs-body-color);--bs-btn-bg: transparent;--bs-btn-border-width: var(--bs-border-width);--bs-btn-border-color: transparent;--bs-btn-border-radius: 0.375rem;--bs-btn-hover-border-color: transparent;--bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),0 1px 1px rgba(0, 0, 0, 0.075);--bs-btn-disabled-opacity: 0.65;--bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);font-family: var(--bs-btn-font-family);font-weight: var(--bs-btn-font-weight);line-height: var(--bs-btn-line-height);text-align: center;vertical-align: middle;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;user-select: none;border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;">Verify your Email</a>
                    <div class="pp1" style="font-size: 18px;padding-top: 30px;font-weight: 600;box-sizing: border-box;">Regards</div>
                    <div class="pp" style="font-size: 14px;font-weight: 600;box-sizing: border-box;">-NSS JMIETI</div>
                </div>
            </div>
    </body>
    </html>`, // html body
  });
}

export default sendMail;

// 