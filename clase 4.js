
// POSIX(investigar) API de SO
// Libuv (investigar) node internamente
// poke API
// gRPC for high performance for microservices (Investigar) ( usa Binario)

/*const http = require ('node:http');

const server = http.createServer((req, res) =>
{
    res.writeHead(200, {'ContentType': 'txt','BobEsponja': 'Kangreburger'});
    res.end('This is your body');
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log('Listenig on port ', PORT);
})

*/
/*
const db =undefined;// ['mojo', 'dojo', 'casa', 'house'];
let data;
const myAsyncAW = ()=>
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data = db;
            if(!data) reject('something went wrong');
            else resolve(data);
        },2000)
    })
}

(async function () {
    try
    {
        const kenHouse = await myAsyncAW();
        console.log(kenHouse);
        console.log('here is your data');
    }
    catch(err)
    {
        console.log("=( ",err);
    }
    finally
    {
        console.log("finally");
    }
})();

console.log('after data printing');
*/


// ########################################## 
// API = application programming interface //
// ########################################## 
/*
 Interfaz: es una entidad que permite la interacción entre 2 entidades
 API es una maneraen la que se comunican los sistemas informaticos. Una API siempre debe de tener una estructura.
 Sin estructura no es una API, es un web service

 API REST (REpresentational State Transfer)
 + Recurso: Entidad (info) y sus servicios
 + Endpoint : URL define la ubicación y el recurso al que se quiere acceder. 

            Convenciones para endpoints:
                - pluralización de nombres.
                - Utilización de minusculas.
                - guiones bajos o medios.
                - evitar verbos (a menos que el caso de uso lo requiera).
                - evitar caracteres especiales. 

 + Stateless : no hay un historial sobre la información solicitada, cada petición es independiente.

 + cacheable : casi no se usa pero si hay información recurrente se guarda en cache.
 + funciona en capas.
 + Es restful cuando cumple con los estandares y protocolos, si no lo hace no es restful. Es la implementación.

 Un Web Service tiene protocolos y estandares que permiten la comunicación entre 2 entidades en internet

 Web Socket: Una comunicación abierta todo el tiempo. Ejemplo (live IG, streams chat)
*/ 

// #######################################
//              Express.js
// #######################################
/*
    + Framework: es un conjunto de bibliotecas y procedimientos
    + Es un servidor web
    + sirve para levantar un servidor web y nos ayuda a levantar un servicio que esta escuchando
    + existen otras alternativas como hapi.js (alternativa usada en casos reales), koala.js
*/

/*

NPM (Node package manager)
+ gestionar paquetes
+ registro publico (https://www.npmjs.com)
+ En su información se llama modulos / paquetes.
+ Alternativa es : 'yarn'


npm init

para instalar express se usa este comando :
    ipm install express


para correr un script que tenemos definido en el package.json ,ponemos:
npm nombre_del_script
npm run nombre_del_script


npm init -y                                     = Al agregar la 'y' indica sí a todo
npm set init.author.name = "Your name"          = Agrega información del autor
npm install <p>                                 = instala el paquete especificado. -i sustituye la palabra install, -g instalación global

Versionado semantico =>                         Versiones x.y.z (e.g v. 2.4.3) : x version mayor (cambio por ejemplo de sistema)
                                                                               : y version menor (parches o bugs minimos)
                                                                               : z numero de cambios (parches o bugs minimos)
                                                                               ^: indica la version a partir de la cual es compatible pero especificamente para el numero de la versión mayor. Eg. v ^2.5.1 es compatible con 2.6 , 2.8.9 pero no con 1.0.9 ni 3.0.9
npm install <packagename>@latest                = versión mas reciente pero hay que estar checango la información actual de esa versión

npm install <p> -S                              = Server (producción)
npm install <p> -D                              = Desarrollo
npm install <p> -O                              = Opcional

npm unistall <packageName>

npm list                                         = listado de las dependencias instaladas
npm list --dept <number>                         = checar las dependencias de las dependencias, <number> por defecto se pone 1 pero puee ser mayor
npm outdate                                      = listado de paquetes no actualizados
npm update                                       = actualiza todos los paquetes (no se recomienda debido a la posible compatibilidad entre paquetes)
npm update <packageName>                         = actualiza el paquete especificado
npm update <packageName>  --depth <number>       = actualiza el paquete especificado al nivel de profundidad especificado

npm run <commandName>                            = inicia el script especificado
*/


// #####################################
// ##########   Rutas  #################
// #####################################

/*
 + raíz: Se recomienda siempre colocar la '/' para estandarizar que nos referimos a la raíz
 + ruta frontend= region/2/pokemon/3/movements/5
 + params: la ruta de backend se utiliza un poco diferente a las de frontend, son similares a  region/:id.  Especifica el recurso al que se requiere
 + queries :  consulta que se realiza, por ejemplo : movement/?type=fire. Función para filtrar o paginar 

// ##########   Route Handler  #################

Ayudan a administrar o a saber como manejar las solicitudes del request . Le decimos como quiere que se comporte el servidor cuando llega un request
app.get(endpoint, callback (req,res))

// ##########   Middleware  #################
    +Función que se ejecuta en el ciclo de vida de una petición
    +Tiene prioridad sobre los routeHandlers
    + Autenticación o seguridad, manejo de errores son las principales funciones
    + podrian tener funciones como autenticación, autorización y validación. (tienen acceso al request y al response y trae un parametro llamado next que indica la siguiente función a ejecutar)

        ###########           ############            ############
        ##Request##    =>     #Middleware#    =>      ##Response##
        ###########           ############            ############
    + Jerarquía de Middlewares:
        + Global
        + Router
        + Use (ruta)
        + Especifico Route handler
        + RouteHandler

// ##########   Variables de entorno  #################
    + normalmente solo se tienen en un archivo del sistema y no se suben al repositorio
    + se manejan en el objeto 'process'
    + se definen en un archivo con extensión .env
        -> PORT = XXXX
        -> DB_URL = '...'

// ##########   Diagrama entidad relacion  #################
    Entidades:
    + comida
    + chefs
    + clientes
    + restaurantes
    + órdenes

    Primero paso es identificar las entidades que estan relacionadas

*/ 

// checar routers ...
/*const router = express.router();
.use('/',router);
*/














