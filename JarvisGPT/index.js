document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        darkModeToggle.classList.toggle('active');
        // Adicione qualquer lógica adicional necessária quando o modo escuro é ativado/desativado
    });
});
