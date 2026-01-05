function validate(){
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const msg = document.getElementById('msg');

  if(name === '' || email === ''){
    msg.innerText = 'All fields are required';
    msg.style.color = 'red';
    return false;
  }

  msg.innerText = 'Form submitted successfully';
  msg.style.color = 'green';
  return false;
}
