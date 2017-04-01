
let api_key = 'key-de9859c2619f388eae8368264273ddc6';
let domain = 'sandbox18cb3aad561f4ec7a9b13d0813af6e6f.mailgun.org';
let mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

export default function petAddedEmail(newPetCount, recipients) {
  console.log("new pet count " + newPetCount)
  if(newPetCount < 1) {
    return;
  }

  let data = {
    from: 'Bozeman Pet Project <postmaster@sandbox18cb3aad561f4ec7a9b13d0813af6e6f.mailgun.org>',
    to: 'albi0025@gmail.com',
    subject: 'Hello',
    text: newPetCount + ' Pets Have Been Added! Please visit https://bozeman-pet-project.herokuapp.com/ to view the new additions!'
  };

  mailgun.messages().send(data, function (error, body) {
    if(error) {
      console.log("New Pets Email Error", error);
    } else {
      console.log("New Pets Email Sent", body);
    }
  });
}
