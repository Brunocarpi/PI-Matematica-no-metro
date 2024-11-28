document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {

            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const result = await response.json();

            if (result.success) {
                window.location.href = '../adm.html';  
            } else {
                alert(result.message);
            }

        } catch (error) {

            console.error('Erro ao fazer login', error);
            alert('Ocorreu um erro ao tentar fazer login.');
        }
    });
});
