document.addEventListener('DOMContentLoaded', function() {
    const daltonismoSelect = document.getElementById('daltonismo-select');
    
    
    const savedMode = localStorage.getItem('daltonismoMode');
    if (savedMode) {
        
        document.body.classList.add(savedMode);
        daltonismoSelect.value = savedMode;
    }

    
    daltonismoSelect.addEventListener('change', function() {
        
        document.body.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
        
        const selectedValue = daltonismoSelect.value;
        if (selectedValue) {
            
            document.body.classList.add(selectedValue);
            localStorage.setItem('daltonismoMode', selectedValue);
        } else {
            
            localStorage.removeItem('daltonismoMode');
        }
    });

    
    new window.VLibras.Widget('https://vlibras.gov.br/app');
});
