
'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },

  uploadButton: '//*[@id="navbar"]/ul[1]/li[3]',
  galleryNameInput: '//*[@id="Dialog_ClcGal_Create"]/form/fieldset[1]/input',
  newGallery(){
    
  	I.wait(15);
  	I.click(this.uploadButton);
  	I.click('to New Gallery');
  	I.wait(10);
  	I.fillField(this.galleryNameInput, new Date().toLocaleDateString());
  	I.pressKey('Enter');
  }
}
