function signup(event) {
  event.preventDefault();

  var usernameInput = document.getElementById("username");
  var passwordInput = document.getElementById("password");

  var username = usernameInput.value;
  var password = passwordInput.value;

  if (username && password) {
    // Save the user to the local storage
    var users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ username: username, password: password });
    localStorage.setItem("users", JSON.stringify(users));

    // Redirect to the login page
    window.location.href = "index.html";
  }
}

function login(event) {
  event.preventDefault();

  var usernameInput = document.getElementById("username");
  var passwordInput = document.getElementById("password");

  var username = usernameInput.value;
  var password = passwordInput.value;

  if (username && password) {
    // Retrieve the registered users from the local storage
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Find the user with the matching username and password
    var foundUser = users.find(function(user) {
      return user.username === username && user.password === password;
    });

    if (foundUser) {
      // Save the username in the local storage
      localStorage.setItem("username", username);

      // Redirect to the welcome page
      window.location.href = "prod.html";
    } else {
      alert("Invalid username or password.");
    }
  } else {
    alert("Please enter both username and password.");
  }
}
