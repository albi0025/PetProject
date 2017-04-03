let api_key = process.env.MAILGUN_API_KEY || 'key-8602cfc543746383ffdd2415b89cb2de';
let domain = 'sandboxee624b132f4d406cba88159537c456e8.mailgun.org';
let mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

export default function petAddedEmail(newPets, recipients) {
  let newPetCount = newPets.length;
  if(newPetCount < 1) {
    return;
  }

  let data = {
    from: 'Bozeman Pet Project <postmaster@sandbox18cb3aad561f4ec7a9b13d0813af6e6f.mailgun.org>',
    to: 'timwalsh237@gmail.com',
    bcc: recipients,
    subject: newPetCount + ' Pets Have Been Added!',
    text: newPetCount + ' Pets have been added to the Bozeman Pet Project! Please visit https://bozeman-pet-project.herokuapp.com/ to view the new additions and find your new best friend!',
    html: '<div style="width: 500px; height: 400px: background: #ebebeb; color: #ddd"><p>Hi  + "recipients.name" + \n ,this email is to inform you that has added their bio to the knowledge Base \n</p></div>'
  };

  mailgun.messages().send(data, function (error, body) {
    if(error) {
      console.log("New Pets Email Error", error);
    } else {
      console.log("New Pets Email Sent", body);
    }
  });
}
