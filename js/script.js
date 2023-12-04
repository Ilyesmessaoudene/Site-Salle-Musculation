const questions = document.querySelectorAll(".faq");

    questions.forEach((question) => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
// Vérification de l'état d'affichage de la réponse
            if (answer.style.display === "block") {
// Si la réponse est visible, la masquer et ajuster la bordure
                answer.style.display = "none";
                question.style.borderRadius = "30px";
            } else {
// Si la réponse est cachée, l'afficher et ajuster la bordure
                answer.style.display = "block";
                question.style.borderRadius = "30px 30px 0px 0px";
            }
        });
    });

const hamburger = document.querySelector(".mobile");
const navmenu = document.querySelector(".burgerMenu");

hamburger.addEventListener("click", () =>{
// Toggle l'affichage du menu en fonction de son état actuel
    if (navmenu.style.display === "none") {
        navmenu.style.display = "block";
    } else {
        navmenu.style.display = "none";
    }
})

function saveData(event) {
    event.preventDefault();
 // Récupération des valeurs du formulaire
    var name = document.getElementById('name').value;
    var cin = document.getElementById('cin').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var choice = document.getElementById('choice').value;

// Validation des champs du formulaire
    // ...

    // Création d'un objet avec les données du formulaire
    if (name.length < 3) {
        alert("Le nom et prénom doivent contenir au moins 3 caractères.");
        return;
    }

    if (cin.length !== 7) {
        alert("Le CIN doit contenir exactement 7 caractères.");
        return;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        alert("L'adresse email n'est pas valide.");
        return;
    }

    if (!phone.startsWith("+33")) {
        alert("Le numéro de téléphone doit commencer par +33.");
        return;
    }

    var formData = {
        name: name,
        cin: cin,
        email: email,
        phone: phone,
        choice: choice,
    };
// Récupération et traitement des données existantes dans le stockage local
    

// Sauvegarde des données mises à jour dans le stockage local
    
// Affichage d'un message de succès
    var existingData = localStorage.getItem('formData');
    if (existingData) {
        existingData = JSON.parse(existingData);
    } else {
        existingData = [];
    }


    existingData.push(formData);


    localStorage.setItem('formData', JSON.stringify(existingData));


    var successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';
}
