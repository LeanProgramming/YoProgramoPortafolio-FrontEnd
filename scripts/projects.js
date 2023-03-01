//Tarjetas de los proyectos
class ProjectCard {
    constructor(img, title, description, tags, repo, link){
        this.img = img;
        this.title = title;
        this.description = description;
        this.tags = tags;
        this.repo = repo;
        this.link = link;
    };

    createCard() {
        let card = document.createElement("div");
        let tags_text = ""; 
        this.tags.forEach(tag => tags_text += `<span class="${tag}"></span>`)
        card.innerHTML = 
            `
            <div class="card">
            <div class="card-img-box">
                <img class="card-img" src="${this.img}" alt="Card Image">
            </div>
            <div class="card-body">
                <div class="card-content">
                    <h2 class="card-title">${this.title}</h2>
                    <p class="card-description">${this.description}</p>
                    <p>Herramientas utilizadas:</p>
                    <div class="tags">
                        ${tags_text}
                    </div>
                </div>
                <div class="card-footer">
                <ul>
                    <li><a href="${this.link}" target="_blank"><i class="fas fa-link"></i></a></li>
                    <li><a href="${this.repo}" target="_blank"><i class="fas fa-file-code"></i></a></li>
                </ul>
            </div>
            </div>
            
            `;
        return card;
    }

}

proyectos = [
    {
        img: "/estatico/img/crimi-para-todxs.png",
        title: "Crimi para todxs",
        description: "Página dedicada a incluir información relacionada a la criminalística.",
        tags: ["html", "css", "js", "vue"],
        repo: "https://github.com/LeanProgramming/crimi_para_todxs.git",
        link: "https://leanprogramming.github.io/crimi_para_todxs/"
    },
    {
        img: "/estatico/img/sistema-crud-python.png",
        title: "Sistema CRUD",
        description: "Sistema de creación, lectura, modificación y eliminación de usuarios (CRUD).",
        tags: ["html", "css", "js", "python", "flask", "sql"],
        repo: "https://github.com/LeanProgramming/CRUD_Python.git",
        link:"http://leanlelu15.pythonanywhere.com/"
    },
    {
        img: "/estatico/img/sistema-login-python.png",
        title: "Sistema Login",
        description: "Sistema de login, alta de un nuevo usuario y su correspondiente ingreso.",
        tags: ["html", "css", "js", "python", "flask", "sql"],
        repo: "https://github.com/LeanProgramming/sistema_login.git",
        link:"https://leanlelu.pythonanywhere.com/"
    },
    {
        img: "/estatico/img/frontend-java.png",
        title: "TP - FrontEnd",
        description: "Trabajo Práctico-FrontEnd realizado para el curso de Fullstack Java del programa Codo a Codo 4.0." ,
        tags: ["html", "css", "js"],
        repo: "https://github.com/LeanProgramming/java-front-integrador.git",
        link:"https://leanprogramming.github.io/java-front-integrador/"
    },
    {
        img: "/estatico/img/monmon-proyect.png",
        title: "Monmon-Proyect",
        description: "Juego web al estilo de pokemon realizado con JS.",
        tags: ["html", "css", "js"],
        repo: "https://github.com/LeanProgramming/monmon_proyect.git",
        link:"https://leanprogramming.github.io/monmon_proyect/"
    }
]

let projectsDiv = document.querySelector('#projects');
proyectos.forEach(proyecto => {
    let card = new ProjectCard(proyecto.img, proyecto.title, proyecto.description, proyecto.tags, proyecto.repo, proyecto.link).createCard();
    projectsDiv.appendChild(card);
});