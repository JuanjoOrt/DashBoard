# Shares Graph

He analizado la necesidad de mi proyecto y decidido cuales son las mejores tecnologías para que funcionase correctamente tanto en el ámbito visual como en la funcionalidad del mismo.

demo: https://sharesgraph.firebaseapp.com

**La Api Rest que utilizo solo me permite hacer una petición por minuto, por lo que la navegación entre pagina y pagina fallará si no pasa al menos un minuto.

[![React](https://img.shields.io/badge/React-16.9.0-blue "React")](https://img.shields.io/badge/React-16.9.0-blue "React")
[![Redux](https://img.shields.io/badge/Redux%20-4.0.4-yellowgreen  "Redux")](https://img.shields.io/badge/Redux%20-4.0.4-yellowgreen  "Redux")
[![Webpack](https://img.shields.io/badge/Webpack-4.40.2-green "Webpack")](https://img.shields.io/badge/Webpack-4.40.2-green "Webpack")
[![Apexcharts](https://img.shields.io/badge/Apexcharts-3.8.6-orange "Apexcharts")](https://img.shields.io/badge/Apexcharts-3.8.6-orange "Apexcharts")


Instalación
-------------

La instalación del proyecto es muy sencilla, solo hacen falta un par de programas y conexión a Internet para poder hacer la conexión a tiempo real con la [API](https://www.alphavantage.co/) que me provee los resultados.

* Necesitaras instalar la ultima versión de NPM, este paso es importante ya que todas las librerías y dependencias están instaladas por medio de este gestor de paquetes.

* Una versión compatible de Git que permita clonar este proyecto en su equipo.

* Por ultimo, debes de compilar la aplicación utilizando Webpack, hay dos formas de compilar la aplicación:
    * Utilizando el comando `$ npm start` compilará el proyecto y se abrirá el servidor Webpack para poder desarrollar y actualizar a tiempo real.
    * Utilizando el comando `$ npm build` compilará el proyecto en modo producción.
    
Definición
-------------

El proyecto consiste en poder ver el precio de las acciones de diferentes compañías, se puede ver de días o incluso semanas o meses.

Me ha servido mucho para afianzar conocimientos tanto en React como en Redux, pudiendo crear componentes completamente reutilizables y útiles para utilizarlo varias veces en la aplicación. Por otra parte es la primera vez que instalo por cuenta propia un bundler como Webpack para poder compilar de mejor manera el codigo y que se pueda subir a producción de manera mimificada.

En relacción a la parte visual y de diseño de la aplicación, he utilizado como librería para ver los gráficos de una manera limpia y funcional [Apexcharts](https://apexcharts.com/), he maquetado completamente la página utilizando Flexbox y he diseñado la interfaz previamente con Adobe XD y finalmente aplicando estilos y transiciones para mejorar la fluidez de la aplicación.
