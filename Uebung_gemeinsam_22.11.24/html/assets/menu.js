// Menü dynamisch laden
document.addEventListener("DOMContentLoaded", () => {
    fetch('./menu.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Menü konnte nicht geladen werden');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('menu-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Fehler:', error));
});