

function checkInput() {
  let f_value = document.getElementById('first-name').value;
  let l_value = document.getElementById('last-name').value;
  let email_value = document.getElementById('email-input').value;
  let message = document.getElementById('message').value;
  
  
  
  if( f_value.length > 0){
    console.log(f_value);
  }else{
    console.log('invalid');
    document.getElementById('first-name-div').innerHTML += `<div class="alert"><p>This field is required</p></div>`
  }

  if(l_value.length > 0){
    console.log(l_value)
  }else{
    document.getElementById('last-name-div').innerHTML += `<div class="alert"><p>This field is required</p></div>`
  }


  if (validateEmail(email_value) && email_value.length > 0 ){
    console.log(email_value)
  }else{
    document.getElementById('email').innerHTML += `<div class="alert"><p>Please enter a valid email address</p></div>`
  }

  if (radio.checked === false && radio2.checked === false) {
    document.getElementById('query-div').innerHTML += `<div class="alert"><p>Please select a query type</p></div>`
  }else{
    console.log('selected')
  }

  if (message.length < 1){
    document.getElementById('message-div').innerHTML += `<div class="alert"><p>This field is required</p></div>`;
  }else{
    console.log(message)
  }


  if (checkbox.checked === true) {
    console.log('agreed')
  }else{
    document.getElementById('checkbox-div').innerHTML += `<div class="alert"><p>To submit this form, please consent to being contacted</p></div>`
  }


  
}


function validateEmail(email) {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return pattern.test(email);
}

let radio = document.querySelector(".radio-btn");
function makeActive(){
  
  radio.checked = true;
}

let radio2 = document.querySelector(".radio-btn2");
function makeActive2(){
  
  radio2.checked = true;
}

let checkbox = document.querySelector('.checkbox');

function renderContactForm() {
  let form = document.body;

  form = ``;
}