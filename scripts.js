let inner_about = document.getElementById('inner_about');

let about_button = document.getElementById('save_about');
about_button.addEventListener('click', () => {
    let text = document.getElementById('text_area_about').value;
    inner_about.innerHTML = `<p>${text}</p>`;
    document.getElementById('text_area_about').value = "";
});


let experiencias = [
    {
        title: 'Backend Developer',
        place: 'Pixar',
        type: 'Jornada Parcial',
        descp: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odit excepturi minima eaque voluptatum cum maiores. Voluptatibus provident suscipit eius adipisci? Repellat consequuntur animi repudiandae velit sequi maiores nam quia.',
        begin_time: 'mar 2019',
        end_time: 'actualidad',
        location: 'Guadalajara, México'
    },
    {
        title: 'Frontend Developer',
        place: 'Globant',
        type: 'Jornada Parcial',
        descp: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odit excepturi minima eaque voluptatum cum maiores. Voluptatibus provident suscipit eius adipisci? Repellat consequuntur animi repudiandae velit sequi maiores nam quia.',
        begin_time: 'mar 2018',
        end_time: 'feb 2019',
        location: 'Buenos Aires, Argentina'
    }
]

let experiencesDiv = document.querySelector('#experiences');
experiencias.forEach(exp => {
let card = document.createElement('div');
card.setAttribute('class', 'card mt-4 mb-4 border border-light rounded');
card.setAttribute('style', 'width:100%; background-color: rgba(19, 18, 18, 0.5)');
card.innerHTML = `
<div class="card-body">
    <div class="d-flex justify-content-between">
        <h5 class="card-title text-warning">${exp.title}</h5>
        <div>
        <a class="btn btn-secondary"><i class="fa-regular fa-pen-to-square"></i></a>
        <a class="btn btn-danger"><i class="fa-solid fa-trash"></i></a>
        </div>
    </div>
    <h6 class="card-subtitle mb-2 ms-2 text-secondary">${exp.place} - ${exp.type}</h6>
    <p class="card-text ms-2">${exp.descp}</p>
    <p class="card-text ms-2 text-secondary">${exp.begin_time} - ${exp.end_time}
    <br>${exp.location}</p>
</div>
`;

experiencesDiv.appendChild(card);
});


let exp_button = document.getElementById('save_exp');
exp_button.addEventListener('click', () => {
    let card = document.createElement('div');
    card.setAttribute('class', 'card mt-4 mb-4 border border-light rounded');
    card.setAttribute('style', 'width:100%; background-color: rgba(19, 18, 18, 0.5)');
    card.innerHTML = `
    <div class="card-body">
        <div class="d-flex justify-content-between">
            <h5 class="card-title text-warning">${document.getElementById('exp_title').value}</h5>
            <div>
            <a class="btn btn-secondary"><i class="fa-regular fa-pen-to-square"></i></a>
            <a class="btn btn-danger"><i class="fa-solid fa-trash"></i></a>
            </div>
        </div>
        <h6 class="card-subtitle mb-2 ms-2 text-secondary">${document.getElementById('exp_place').value} - ${document.getElementById('exp_type').value}</h6>
        <p class="card-text ms-2">${document.getElementById('exp_text').value}</p>
        <p class="card-text ms-2 text-secondary">${document.getElementById('exp_begin_time').value} - ${document.getElementById('exp_end_time').value}
        <br>${document.getElementById('exp_location').value}</p>
    </div>
    `;

    experiencesDiv.appendChild(card);

    document.getElementById('exp_title').value = "";
    document.getElementById('exp_place').value = "";
    document.getElementById('exp_type').value = "";
    document.getElementById('exp_text').value = "";
    document.getElementById('exp_begin_time').value = "";
    document.getElementById('exp_end_time').value = "";
    document.getElementById('exp_location').value = "";

});


let educacion = [
    {
        title: 'Ingeriería en Sistemas Computacionales',
        place: 'UTN',
        begin_time: '2019',
        end_time: '2023',
        location: 'Guadalajara, México'
    },
    {
        title: 'Licenciatura en Sistemas de Información',
        place: 'UNNE-Facultad de Ciencias Exactas Naturales y Agrimensura',
        begin_time: '2021',
        end_time: 'actualidad',
        location: 'Corrientes, Argentina'
    }
]

let educationDiv = document.querySelector('#education');
educacion.forEach(educ => {
    let card = document.createElement('div');
    card.setAttribute('class', 'card mt-4 mb-4 border border-light rounded');
    card.setAttribute('style', 'width:100%; background-color: rgba(19, 18, 18, 0.5)');
    card.innerHTML = `
    <div class="card-body">
        <div class="d-flex justify-content-between">
            <h5 class="card-title text-warning">${educ.title}</h5>
            <div>
            <a class="btn btn-secondary"><i class="fa-regular fa-pen-to-square"></i></a>
            <a class="btn btn-danger"><i class="fa-solid fa-trash"></i></a>
            </div>
        </div>
        <h6 class="card-subtitle mb-2 mt-2 ms-2 ">${educ.place}</h6>
        <p class="card-text ms-2 text-secondary">${educ.begin_time} - ${educ.end_time}
        <br>${educ.location}</p>
    </div>
    `;

    educationDiv.appendChild(card);
    console.log(educacion)
});