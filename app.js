const form = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

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

//delete todos
list.addEventListener('click', e => {
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  };
})


//includes only todos witch don't include the term
//adds and removes filtered class based on what comes from search event listener
const filterTodos = (searchTerm) => {
 
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(searchTerm))
    //textContent looks as all text inside li tag
    //! negates return todo to false
    .forEach((todo) => todo.classList.add('filtered'));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(searchTerm))
    .forEach((todo) => todo.classList.remove('filtered'));
  

};


//keyup event
search.addEventListener('keyup', () => {
  const searchTerm = search.value.trim().toLowerCase();
  filterTodos(searchTerm);
});