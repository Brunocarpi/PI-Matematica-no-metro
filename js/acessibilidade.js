document.addEventListener('DOMContentLoaded', function() {

    const daltonismoSelect = document.getElementById('daltonismo-select');
    
    daltonismoSelect.addEventListener('change', function() {
        document.body.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
        
        const selectedValue = daltonismoSelect.value;
        if (selectedValue) {
            document.body.classList.add(selectedValue);
        }
    });

 
    new window.VLibras.Widget('https://vlibras.gov.br/app');

});
