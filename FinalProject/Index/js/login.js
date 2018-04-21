function loginaction() {
  
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var loginurl = "http://127.0.0.1:8000/login/"+ username +"/password/" + password
    $.ajax({
      type: "GET",
      url: loginurl,
      dataType: 'text json',
      success: AjaxSucceeded,
      error: AjaxFailed
  });
  function AjaxSucceeded(res) {
    var x = document.getElementById("loginform");
    x.style.display = "none";
    var x = document.getElementById("userinfo");
    x.style.display = "inline-block";
    let msg = "Welcome " + res['role'] + '!'
    document.getElementById("welcomemsg").innerHTML = msg;
  }
  function AjaxFailed(result) {
      alert("Username/password combo wrong!");
  }
  };

  function logout() {
    document.getElementById("username").value='';
    document.getElementById("password").value='';
    var x = document.getElementById("loginform");
    x.style.display = "inline-block";
    var x = document.getElementById("userinfo");
    x.style.display = "none";
    // x.innerText = "<h2>bold text?</h2>";
    // document.getElementById("welusermsg").innerText = "Welcome!";
 
  };

  function addUser() {
  
    var username =  document.getElementById("insertname").value;
    var password = document.getElementById("insertpwd").value;
    let requesturl= "http://127.0.0.1:8000/user/adduser/"+ username +"/password/" + password;
    $.ajax({
        type: "GET",
        url: requesturl,
        dataType: 'text json',
        success: AjaxSucceeded,
        error: AjaxFailed
    });
    function AjaxSucceeded(res) {
        alert("You have been registered as user!");
    }
    function AjaxFailed(res) {
        alert("Username/password combo wrong!");
    }
  };