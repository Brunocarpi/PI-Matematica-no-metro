document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("close-btn");

    closeBtn.addEventListener("click", () => {
        popup.classList.remove("active");
        // verifica se o usuário já fechou o anúncio
        // localStorage.setItem("popupClosed", "true");
        
    });

    setTimeout(() => {
        popup.classList.add("active");
    }, 2000);
});

