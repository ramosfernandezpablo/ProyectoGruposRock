
/*Con el pretexto de saber que grupos de musica escuchaba mi padre en un años de adolescencia 
quiero filtrar, por aquellos grupos de musica rock que están comprendidos entre principio de 1969 y 
finales de 1987      ok*/

db.coleccionGrupos.find
(
    {
        $and:
        [
            {fechaLanzamiento:{$gte: new Date ("1969-01-01")}},
            {fechaLanzamiento:{$lt: new Date("1980-01-01")}}
        ]
           
    },

    {fechaLanzamiento:1, nombreGrupo:1}
).pretty()

/* Con motivo de conocer aquellos grupos que son de Reino Unido (que suelen ser la gran mayoría), 
mi padre me ha dicho también que además de la ciudad quieren visualizar aquellos que empiecen por 
"The"              ok*/

db.coleccionGrupos.find
(
    {
        $and:
        [
            {nombreGrupo:{$regex: /^The/i}},
            {pais: {$eq: "Londres, Inglaterra, Reino Unido"}}
        ]
    }
).pretty()

/*Un agente de una discográfica nos ha pedido que le hagamos un listado con los grupos de rock en el que
que  NO contenga como género musical Blues rock y en el caso de que lo contenga, que busque si el grupo 
está aún dando conciertos          ok*/

db.coleccionGrupos.find
(
    {
         $or:
                [
                    {genero: {$ne:"Blues rock"}},
                    {enActivo: {$eq: true}}
                ] 
        
    }
).pretty()

/* Hay grupos que por temas de antigüedad se han quedado un poco desfasados y no tienen página web 
en la que poder visitarlo, pero éstos grupos usan un estilo musical un tanto específico como es
el Hard Rock. Muestramelos         OK*/ 

db.coleccionGrupos.find
(
    {
        $and:
        [
            {web:{$exists:false}},
            {genero:{$eq:"Hard rock"}}
            
        ]
    }
).pretty()


/*Como no soy de músicos tan populares, me pica la curiosidad y quiero ver los grupos que no tengas tantos
álbumes vendidos, y por ejemplo quiero saber los que hayan vendido más o igual que 200 unidades
y los que por el contrario hayan vendido menos de 1.500.000 unidades           OK*/

db.coleccionGrupos.find
(
        {
           "discografia.unidadesVendidas": {$elemMatch: {$gte: 200, $lt: 1500000}}
        },
        {nombreGrupo:1, "discografia.unidadesVendidas":1}
).pretty()


/*Como estamos en Sevilla y la gente de aquí es muy patriota, he encuestado a una serie de personas que
coinciden en que no les gustan los grupos extrajeros, ellos solo se meten en la web de grupos españoles
por lo que me han pedido que solo muestre aquellas web de los grupos que acaben en ".es" de ESPAÑA y
que su país de origen no sea Reino Unido            OK*/


db.coleccionGrupos.find
(
    {
        $and:
        [
            
                {web:{$regex: /es$/}},
                {pais:{$ne: "Londres, Inglaterra, Reino Unido"}},
        ]
        
    },

    {pais, nombreGrupo:1, web:1}

).pretty()


/* Un amigo me llamó por teléfono y me dijo que un grupo va a dar un concierto en Plaza de España 
el proximo sábadoy que no cuesta dinero, pero ahora mismo con la entrega de la base de datos de Mongo
he estado algo liado y no recuerdo el nombre del grupo. ¿Cuál es?*/

db.coleccionGrupos.find
(
    {precioEntradaConcierto: {$eq: 0.00}},
    {nombreGrupo:1, precioEntradaConcierto:1}

).pretty()


/*Quiero buscar aquellos grupos de música de rock cuyo país empiece por E, como por ejemplo EEUU. */ 

db.coleccionGrupos.find
(
    {pais:{$regex: /^E/, $options: 'm'}},
    {pais:1, nombreGrupo:1}

).pretty()

/* -----------------------*/

db.coleccionGrupos.find
( 
    {
        $and: 
        [
            {fechaLanzamiento:{$gte: new Date ("1980-01-01")}},

                { $and: 
                        [
                            {precioEntradaConcierto: { $gt : 10 } }, 
                            { precioEntradaConcierto : { $lt: 40 } } 
                        ] 
                },

                { $and: 
                    [ 
                        { enActivo: true },
                         { "discografia.unidadesVendidas": { $lt : 500 } } 
                    ] 
                }
        ]
    },

        {fechaLanzamiento:1, precioEntradaConcierto:1, enActivo:1, "discografia.unidadesVendidas":1} 
        
).pretty()

/*-------------GRUPOS CON FECHA 01/01/1980 Y MAYORES Y PRECIO ENTRADA SEA MAYOR QUE 10€ Ó MENOR QUE 40 Y ESTE ACTUANDO AÚN Ó UNIDADES DE DISCO VENDIDAS SEAN MENOR A 500 UDS----------------- */

db.coleccionGrupos.find
( 
    {
        $and: 
        [
            {fechaLanzamiento:{$gte: new Date ("1980-01-01")}},

                { $or: 
                        [
                            {precioEntradaConcierto: { $gt : 10 } }, 
                            { precioEntradaConcierto : { $lt: 40 } } 
                        ] 
                },

                { $or: 
                    [ 
                        { enActivo: true },
                         { "discografia.unidadesVendidas": { $lt : 500 } } 
                    ] 
                }
        ]
    },

        {fechaLanzamiento:1, precioEntradaConcierto:1, enActivo:1, "discografia.unidadesVendidas":1} 
        
).pretty()

/*El otro día estando en clase de Base de Datos me surgió una duda y por eso realicé esta consulta.
Y sería los grupos que han vendido 500 ó 1500000 unidades de discos */

db.coleccionGrupos.find
( 
    {
     "discografia.unidadesVendidas": { $in: [ 500, 1500000 ] } 
    },
    {nombreGrupo:1, "discografia.unidadesVendidas":1}
).pretty()

/*-----------GRUPOS YA RETIRADOS Y QUE UNIDADES VENDIDAS SEAN MAYOR QUE 500------------- */


db.coleccionGrupos.find
( 
    { 
        $nor: 
        [ 
            { enActivo: true },
            { "discografia.unidadesVendidas": { $lt : 500 } } 
        ] 
    }, {enActivo:1, "discografia.unidadesVendidas":1}
).pretty()


/*--------------GENERO QUE NO EMPIECE POR HARD Y QUE EL PRECIO DE ENTRADA SEA MENOR A 30€---------- */


db.coleccionGrupos.find
( 
    { $and: 
        [
            {genero: { $not : {$regex: /^Hard/i}} }, 
            { precioEntradaConcierto : { $not: { $gt: 30.00} } } 
        ] 
    }, {genero:1, precioEntradaConcierto:1, nombreGrupo:1}
).pretty()

/*----------------MUESTRA LOS GRUPOS QUE NACIERON EN UNA FECHA EN CONCRETO---------------- */


db.coleccionGrupos.find
(
    {
        año: {$eq: new Date("1988-05-11").getFullYear()}
    }, {nombreGrupo:1, año:1, fechaLanzamiento:1}
).pretty()


/*---------GRUPOS QUE NO LOS REPRESENTES ESAS DISCOGRAFICAS----- */

db.coleccionGrupos.find
( 
    { 
        discografica: { $nin: [ "Warner Music", "EMI", "Columbia Records" ] } 
    }, {discografica:1,nombreGrupo:1}
).pretty()


/*---- GRUPOS CON DICHOS GENEROS MUSICALES------------ */

db.coleccionGrupos.find
( 
    { 
        genero: { $all: [ "Hard rock", "Pop rock", "Blues rock" ] } 
    }, {genero:1, nombreGrupo:1}
).pretty()

/* MUESTRA AQUELLOS GRUPOS QUE HAN REALIZADO 4 GIRAS EN TOTAL*/

db.coleccionGrupos.find
( 
    { 
        gira: { $size: 4 } 
    }, {nombreGrupo:1, gira:1}
).pretty()

/*----------------------------------APORTACION ADICIONAL------------------------------------------------------------ */



/*Mi madre siempre llegaba a mi habitación y me decía que escuchaba siempre musica en inglés, que por qué 
escuchaba nada en español, así que decidí de mis 5 grupos preferidos escuchar la mitad de ellos, redondeando
al alza, pero no siempre escucho los mismo, voy variando pero escuchando la mitad de ellos */

db.coleccionGrupos.find
(
    {  
        pais: {$eq: "Londres, Inglaterra, Reino Unido"},
       $expr: { $lt: [0.5, {$rand: {} } ] }
    },{  nombreGrupo: 1, pais:1 }

 ).pretty()


/* Hace ya unos años mi colega y yo hicimos una investigación del número de fans y de managers que tenían
ciertos grupos de rock. Desgraciadamente perdí esos informes y me gustaría saber que grupo tiene más fans
que representantes técnicos*/

 db.coleccionGrupos.find
 ( 
     { 
         $expr: { $gt: [ "$numeroFans" , "$numeroManagers" ] } 
    }, {nombreGrupo:1, numeroFans:1, numeroManagers:1}
).pretty()

