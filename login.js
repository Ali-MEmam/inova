document.querySelector("#loginForm").addEventListener('submit',function(event){
    event.preventDefault();
   let username = this.username.value;
   let password = this.password.value;
   const userData = {
    username,
    password,
  }
  
  const options = {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  fetch(`${EndPoint}`, options)
  .then(res => res.json())
  .then(res => console.log(res));
})