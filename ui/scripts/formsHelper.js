const showErrors = (errors) => {
  console.log('errors', errors);
  
  const errorItems = document.getElementsByClassName("error");
  for(let i = 0; i < errorItems.length; i++){
    if(errors.indexOf(errorItems[i].getAttribute('data-error')) > -1) errorItems[i].style.display = 'block';
    else errorItems[i].style.display = 'none';
  }
};

export { showErrors }