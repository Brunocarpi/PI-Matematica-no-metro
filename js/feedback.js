document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

   
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (name && emailPattern.test(email) && message.trim() !== "") {
        
        document.getElementById("feedback-message").style.display = "block";

        
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

       
        setTimeout(function() {
            document.getElementById("feedback-message").style.display = "none";
        }, 3000);
    } else {
        
        alert("Por favor, preencha todos os campos corretamente.");
    }
});

function toggleMenu() {
    var nav = document.querySelector('nav ul');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
}