// Seleciona os elementos do menu
const mobileMenu = document.getElementById('mobile-menu');
const mainNav = document.getElementById('main-nav');

// Adiciona evento de clique para o menu hamburguer
mobileMenu.addEventListener('click', function() {
    // Alterna a classe 'ativo' no ícone do menu
    this.classList.toggle('ativo');
    
    // Alterna a exibição do menu de navegação
    mainNav.classList.toggle('mobile-active');
});

// Fecha o menu ao clicar em um link (apenas em mobile)
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            mobileMenu.classList.remove('ativo');
            mainNav.classList.remove('mobile-active');
        }
    });
});

// Fecha o menu ao clicar fora dele (apenas em mobile)
document.addEventListener('click', function(event) {
    if (window.innerWidth <= 768 && 
        !event.target.closest('.menu-toggle') && 
        !event.target.closest('.nav') &&
        mainNav.classList.contains('mobile-active')) {
        mobileMenu.classList.remove('ativo');
        mainNav.classList.remove('mobile-active');
    }
});

// Atualiza o menu quando a janela é redimensionada
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        // Garante que o menu esteja visível em desktop
        mainNav.classList.remove('mobile-active');
        mobileMenu.classList.remove('ativo');
    }
});