document.getElementById('sbtn').addEventListener('click',function(){
  let email = document.getElementById('email');
  let pass = document.getElementById('password');
  let Pemail = email.value;
  let Ppass = pass.value;
  if(Pemail === 'omithasan@gmail.com' && Ppass === 'omit'){
    location.href = "http://127.0.0.1:5502/HTML/index2.html";
  }
  else{
    alert('You are doing wrong')
  }
});