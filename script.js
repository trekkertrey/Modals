'use strict';

// instead of calling the document stuff over and over again, save it in a variable to save time

//check CSS for what the classes do in html
//the open window
const modal = document.querySelector('.modal');
// the shadow and blur
const overlay = document.querySelector('.overlay');
//the X button
const btnCloseModal = document.querySelector('.close-modal');
//querySelectorAll takes the elements with the same class name and creates a list for them all
const btnShowModal = document.querySelectorAll('.show-modal');

//We use the close event listener function twice. it is better to refactor and give an actual name
const closeModal = function () {
  console.log('Exit clicket');
  //hitting the X adds the hidden class back
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//see above for this function
const openModal = function () {
  // the current elements have the hidden class on them, which hides them from view
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//to do somthing to any of the elements with the same class name, create a for loop and add whatever you want to happen
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
}

//when calling named functions on event listeners be sure to not add ()
btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

//This adds an event that checks ANYWHERE on the screen. keydown means when key was pressed, keyup when key was released, keypressed fires continuously, like being held
//to see what key was pressed, add the parameter and check
//eventlisteners return information about the event, similar to an object
document.addEventListener('keydown', function (e) {
  console.log(e);

  //if escape key was pressed, check to see if the modal is shown, then close it
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
