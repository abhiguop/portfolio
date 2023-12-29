function sendemail(){
    let parms={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value
    }
    emailjs.send("service_1lrbrpq","template_mqc75uk",parms).then(alert("email sent!!"))
}

