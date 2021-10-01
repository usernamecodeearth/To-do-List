const form = document.querySelector('.add');
const list = document.querySelector('.todos');


const makeTemplate = todo => {
  //generate template and output it

  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="fas fa-trash-alt delete"></i>
    </li>
  `;
  //now place into ul
  list.innerHTML += html;

};


form.addEventListener('submit', e => {

  e.preventDefault();
  const todo = form.add.value.trim();//trim method removes white space before or after string
  //console.log(todo); //checking to confirm everything works
  if(todo.length){//true or false (0 todo.length is false, if statement won't fire)
    makeTemplate(todo);
    form.reset();//reset input field inside that form
  };  

});

