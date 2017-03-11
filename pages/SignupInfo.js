
'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },
  //css class for top nav
  username : `williamtsao1202+${Math.random().toString(36).substring(20)}@gmail.com`,
  password : 'testing',
  reason: 'Build my website',
  fname: 'William',
  lname: 'Tsao',

  gotoSignupURL(){
  	I.seeElement('//*[@id="signupModal"]/div/div[2]/div/div/div[2]/iframe');
  	let url = yield I.grabAttributeFrom('//*[@id="signupModal"]/div/div[2]/div/div/div[2]/iframe', 'src');
  	I.amOnPage(url);
  }
}
