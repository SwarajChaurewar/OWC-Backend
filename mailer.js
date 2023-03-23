import nodemailer from "nodemailer" ;
import ejs from 'ejs';


async function sendmail(to_mail,link) {
  let contents = null;
  contents = await ejs.renderFile("./views/resetMailLink.ejs",{message:link});
    
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "owccontactus@gmail.com",
      pass: "ylitrfcawcmwxfkt", // PERSON ID OF ME DONT USE IT 
    },
  });
 
  let mailOptions =null;
    mailOptions = {
      from: "owccontactus@gmail.com", // sender address
      to: to_mail, // list of receivers
      subject: "Do not share link", // Subject line
      html: contents, // plain text body
    };

  const result = {
    Status: "",
  };
 
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      // console.log(result);
    } else {
      // console.log(info);
    }
    result [Status]="sucess";
    return result;
  });
}

export default sendmail;
