let api_key = process.env.MAILGUN_API_KEY || 'key-8602cfc543746383ffdd2415b89cb2de';
let domain = 'sandboxee624b132f4d406cba88159537c456e8.mailgun.org';
let mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

export default function petAddedEmail(newPets, recipients) {
  let newPetCount = newPets.length;
  if(newPetCount < 1) {
    return;
  }

  let petNames = newPets.map(function(pet){
    return pet.species.toUpperCase() + ' - ' + pet.name;
  }).join(", \n _____ \n\n");

  let data = {
    from: 'Bozeman Pet Project <postmaster@sandbox18cb3aad561f4ec7a9b13d0813af6e6f.mailgun.org>',
    to: 'timwalsh237@gmail.com',
    bcc: recipients,
    subject: newPetCount + ' Pets Have Been Added!',
    text: ' Hello, \n\n' + newPetCount + ' Pets have been added to the Bozeman Pet Project!' + '\n' + '_____________________\n' + '\n' + petNames + '\n' + '_____________________' + '\n' + ' Please visit https://bozeman-pet-project.herokuapp.com/ to view the new additions and find your new best friend!'
  };

  mailgun.messages().send(data, function (error, body) {
    if(error) {
      console.log("New Pets Email Error", error);
    } else {
      console.log("New Pets Email Sent", body);
    }
  });
}
