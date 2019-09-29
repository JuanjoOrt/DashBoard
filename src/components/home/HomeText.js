import React from 'react'

const HomeText = () => {




    return (
        <div>
            <h1>Home</h1>
            <img src="https://img.shields.io/badge/React-16.9.0-blue" alt="React" className='imagenIcono'/>
            <img src="https://img.shields.io/badge/Redux%20-4.0.4-yellowgreen" alt="Redux" className='imagenIcono'/>
            <img src="https://img.shields.io/badge/Webpack-4.40.2-green" alt="Webpack" className='imagenIcono'/>
            <img src="https://img.shields.io/badge/Apexcharts-3.8.6-orange" alt="Apexchart" className='imagenIcono'/>
            <br/><br/>
            <h1>Descripción del proyecto</h1>
            <hr/>
            La instalación del proyecto es muy sencilla, solo hacen falta un par de programas y conexión a Internet para poder hacer la conexión a tiempo real con la API que me provee los resultadosEl proyecto consiste en poder ver el precio de las acciones de diferentes compañías, se puede ver de días o incluso semanas o meses. <br/><br/>

            Me ha servido mucho para afianzar conocimientos tanto en React como en Redux, pudiendo crear componentes completamente reutilizables y útiles para utilizarlo varias veces en la aplicación. Por otra parte es la primera vez que instalo por cuenta propia un bundler como Webpack para poder compilar de mejor manera el codigo y que se pueda subir a producción de manera mimificada. <br/><br/>

            En relacción a la parte visual y de diseño de la aplicación, he utilizado como librería para ver los gráficos de una manera limpia y funcional Apexcharts, he maquetado completamente la página utilizando Flexbox y he diseñado la interfaz previamente con Adobe XD y finalmente aplicando estilos y transiciones para mejorar la fluidez de la aplicación. <br/>

        </div>
    )
}

export default HomeText;