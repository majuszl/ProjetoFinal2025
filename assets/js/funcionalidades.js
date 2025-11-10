// Rolagem suave ao clicar nos links do menu
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Botão "Saiba mais" rola até a primeira seção
document.getElementById('btnInicial').addEventListener('click', () => {
    document.querySelector('#sobre').scrollIntoView({ behavior: 'smooth' });
});

