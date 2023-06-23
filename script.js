function generateEmails() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://flynn.boolean.careers/exercises/api/random/mail", true);
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          let response = JSON.parse(xhr.responseText);
          let emailList = document.getElementById("emailList");
  
          if (response.success) {
            for (let i = 0; i < 10; i++) {
              let email = document.createElement("li");
              email.textContent = response.response;
              emailList.appendChild(email);
            }
          } else {
            document.getElementById("error").style.display = "block";
          }
        } else {
          document.getElementById("error").style.display = "block";
        }
      }
    };
  
    xhr.send();
  }