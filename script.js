// 1. Creare l'array di oggetti con le informazioni fornite
// 2. Stampare in console i dati 
// 3. Stampare le stesse informazioni su DOM sottoforma di stringhe

// RECUPERO L'ELEMENTO DAL DOM
const team = document.getElementById('team');

// CREO L'ARRAY DI OGGETTI
const teamMembers = [
    { name: 'Wayne Barnett', role: 'Founder & CEO', img: 'wayne-barnett-founder-ceo.jpg', },
    { name: 'Angela Caroll', role: 'Chief Editor', img: 'angela-caroll-chief-editor.jpg', },
    { name: 'Walter Gordon', role: 'Office Manager', img: 'walter-gordon-office-manager.jpg', },
    { name: 'Angela Lopez', role: 'Social Media Manager', img: 'angela-lopez-social-media-manager.jpg', },
    { name: 'Scott Estrada', role: 'Developer', img: 'scott-estrada-developer.jpg', },
    { name: 'Barbara Ramos', role: 'Graphic Designer', img: 'barbara-ramos-graphic-designer.jpg', },
]

// CREO UNA VARIABILE D'APPOGGIO
let info = '';

// CREO UNA STRINGA CON TUTTE LE INFORMAZIONI CON UN CICLO FOR
for (let i = 0; i < teamMembers.length; i++){
    console.log(teamMembers[i].name);
    console.log(teamMembers[i].role);
    console.log(teamMembers[i].img);
    info += `<div><img src="img/${teamMembers[i].img}" alt=""><h4>${teamMembers[i].name}</h4><p>${teamMembers[i].role}</p></div>`
}

// STAMPO LE STRINGHE NEL DOM
team.innerHTML = info;
