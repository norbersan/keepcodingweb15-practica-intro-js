const datos = [
    {
        id: 1,
        nombre: "Juan",
        habilidades: ["Javascript", "HTML", "CSS"],
        proyectos: [
            { id: 1, nombre: "proyecto 1" },
            { id: 2, nombre: "proyecto 2" },
        ],
    },
    {
        id: 2,
        nombre: "María",
        habilidades: ["Python", "SQL", "Django"],
        proyectos: [
            { id: 3, nombre: "proyecto 3" },
            { id: 4, nombre: "proyecto 4" },
        ],
    },
    {
        id: 3,
        nombre: "Pedro",
        habilidades: ["Java", "Spring", "Hibernate"],
        proyectos: [
            { id: 5, nombre: "proyecto 5" },
            { id: 6, nombre: "proyecto 6" },
        ],
    },
];

const desarrolladoresJavascript = datos.filter(desarrollador => desarrollador.habilidades.includes("Javascript"));


const nombresProyectos = datos.flatMap(desarrollador => desarrollador.proyectos.map(proyecto => proyecto.nombre))