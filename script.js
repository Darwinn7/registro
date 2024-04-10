document.getElementById('registrationForm').addEventListener('submit', function(event){
  event.preventDefault();
  var username = document.forms["registrationForm"]["username"].value;
  var email = document.forms["registrationForm"]["email"].value;
  var password = document.forms["registrationForm"]["psw"].value;
  console.log('Usuario registrado:', username, email, password);
  // Aquí puedes añadir código para enviar los datos al servidor, etc.
});
