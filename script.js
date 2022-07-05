// 1. Creare l'array di oggetti con le informazioni fornite
// 2. Stampare in console i dati 
// 3. Stampare le stesse informazioni su DOM sottoforma di stringhe

const teamMembers = [
    { name: 'Wayne Barnett', role: 'Founder & CEO', img: 'wayne-barnett-founder-ceo.jpg', },
    { name: 'Angela Caroll', role: 'Chief Editor', img: 'angela-caroll-chief-editor.jpg', },
    { name: 'Walter Gordon', role: 'Office Manager', img: 'walter-gordon-office-manager.jpg', },
    { name: 'Angela Lopez', role: 'Social Media Manager', img: 'angela-lopez-social-media-manager.jpg', },
    { name: 'Scott Estrada', role: 'Developer', img: 'scott-estrada-developer.jpg', },
    { name: 'Barbara Ramos', role: 'Graphic Designer', img: 'barbara-ramos-graphic-designer.jpg', },
]



for (let i = 0; i < teamMembers.length; i++){
    console.log(teamMembers[i].name);
    console.log(teamMembers[i].role);
    console.log(teamMembers[i].img);
}