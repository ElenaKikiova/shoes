const showErrors = (errors) => {
  console.log('errors', errors);
  
  const errorItems = document.getElementsByClassName("error");
  for(let i = 0; i < errorItems.length; i++){
    if(errors.indexOf(errorItems[i].getAttribute('data-error')) > -1) errorItems[i].style.display = 'block';
    else errorItems[i].style.display = 'none';
  }
};

const deleteOnClick = (id, callback) => {
  const isConfirmed = document.querySelector(`.note[data-id="${id}"]`).style.display === 'block';
  if(!isConfirmed){
    document.querySelector(`.note[data-id="${id}"]`).style.display = 'block';
  }
  else {
    callback();
  }
}

export { showErrors, deleteOnClick }