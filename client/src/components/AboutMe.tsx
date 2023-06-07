import React from 'react';
const AboutMe:React.FC = () => {

    return (
        <div className="max-w-4xl flex flex-col items-center p-2">
            <h1 className="text-4xl font-semibold mb-5">Sobre mi</h1>
            <p >
                Soy un desarrollador web junior. Me encanta enfrentar desafíos técnicos
                y estoy constantemente buscando oportunidades para expandir mis conocimientos y habilidades.
                En el desarrollo Front-end, tengo experiencia en la construcción
                de interfaces de usuario utilizando las tecnologías
                como lo son HTML, Css3, JavaScript, React, Next, Material UI entre otras,
                y siempre estoy emocionado de aprender nuevas tecnologías.
                En el desarrollo back-end, he trabajado con lenguajes como JavaScript usando Node.js
                y librerías como Express construyendo pequeñas aplicaciones
                y servicios con lo cual estoy entusiasmado por seguir aprendiendo
                y profundizar en el diseño de arquitecturas de software y la creación de Apis robustas.
            </p>
        </div>
    );
};

export {AboutMe};