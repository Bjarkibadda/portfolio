 var counter = 0;
 var word_index = 0;




//  const
const myDjango = document.querySelector('.django-logo-visible');
const myPython = document.querySelector('.python-logo-visible');
 
 // from youtube video https://www.youtube.com/watch?v=POX3dT-pB4E
 class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];
  
      // Check if deleting
      if(this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      // Initial Type Speed
      let typeSpeed = 200;
  
      if(this.isDeleting) {
        typeSpeed /= 2;
      }
  
      // If word is complete
      if(!this.isDeleting && this.txt === fullTxt) {
  
        if(this.txt === fullTxt){
          cardVisible();
        }
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }


  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  // Init App
  function init() {
    const txtElement = document.querySelector('.type-writer');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }

function cardVisible(){
  $("#dj-logo").fadeTo(10000, 1)
  $("#python-logo").fadeTo(1000, 1)
}


function opac(){
}
  
    

//   if(word_index == 1){
//     while(counter < 1){
//       counter+=0.1;
//       myDjango.style.opacity = counter;
//       }
//   };
//   word_index++;

//   //     counter = 0; //reset the counter for each word
//   //     word_index++;
  
// }

