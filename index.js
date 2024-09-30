// Pour attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function () {
    const colorBox = document.getElementById('couleur-box');
    const changeColorBtn = document.getElementById('change-couleur-btn');

    // Fonction pour générer une couleur aléatoire
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let couleur = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return couleur;
    }

    // Ajouter un écouteur d'événement sur le bouton
    changeColorBtn.addEventListener('click', function () {
        const newColor = getRandomColor();
        colorBox.style.backgroundColor = newColor;
    });
});
