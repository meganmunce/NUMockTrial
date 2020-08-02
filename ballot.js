

//const checkRound = () => {
//  var ele = document.getElementsByName('round');
//  for(i = 0; i < ele.length; i++) {
//                if(ele[i].checked)
//                var roundNumber = ele[i].value;
//            };
//  console.log(roundNumber);
//  return roundNumber;
//};

const submitBallot = () => {
  // defining top of the ballot variables
  var plaintiffTeam = document.querySelector('.pteam').value;
  var defenseTeam = document.querySelector('.dteam').value;
  var judgeName = document.querySelector('.judgename').value;
  var ele = document.getElementsByName('round');
  for(i = 0; i < ele.length; i++) {
                if(ele[i].checked)
                var roundNumber = ele[i].value;
            };

  // sending the email to tab
  Email.send({
  Host: "smtp.gmail.com",
  Username : "numtballots@gmail.com",
  Password : "eliasthechimp",
  To : 'numtballots@gmail.com',
  From : "numtballots@gmail.com",
  Subject : "R"+roundNumber+" P: "+plaintiffTeam+"D: "+defenseTeam,
  Body :
  "Judge:"+judgeName,
  }).then(
      message => alert("Your ballot has been succcessfully submitted. You can now exit this window.")
  );
};


document.querySelector('.submitted').onclick = submitBallot;
