
/*Con el pretexto de saber que grupos de musica escuchaba mi padre en un años de adolescencia 
quiero filtrar, por aquellos grupos de musica rock que están comprendidos entre principio de 1969 y 
finales de 1979      ok*/

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

    {pais:1, nombreGrupo:1, web:1}

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

/*Mi padre quiere ir a ver un concierto de un grupo rock, pero como estamos a final de mes la cosa está un poco
canina y su presupuesto es de 25€. Mi padre como encima de todo es un poco especialito, no se conforma con ver
un grupo cualquiera, quiere ir a un concierto en el que el grupo sea de los 80 en adelante y que para colmo 
sea un grupo conocido, es decir, que haya vendido bastante albumes como para declararse famoso*/

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

/*Mi novia me ha regalado unas entradas para un concierto como regalo de Navidades. Yo como no soy curioso
(nótese la ironía)he investigado cuanto se ha gastado en las entradas , que ha sido más o menos ó <10€ ó >40€. 
El grupo es de los '80 y por último con esto de la pandemia es su última gira así que no se si podrá celebrarse
dicho concierto o no, ó si venderá una serie de discos en concreto o por el contrario el COVID-19 se lo impedirá.*/

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

/*Mi abuelo me ha dicho que le ponga en Youtube un grupo de rock. Cual es mi sorpresa, que al meterme 
en Wikipedia para informarme del grupo, todos sus componentes están muertos y en su discografía,
la unidades de discos vendidas es superior a 500 unidades. */


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


/*Este finde toca en la Cartuja mi grupo favorito, su estilo es Pop Rock y Rock andaluz, pero para nada 
el Hard rock. El inconveniente es que mi madre nada más me ha dado 15€, ¿podré ir a verlo? */


db.coleccionGrupos.find
( 
    { $and: 
        [
            {genero: { $not : {$regex: /^Hard/i}} }, 
            { precioEntradaConcierto : { $not: { $gt: 30.00} } } 
        ] 
    }, {genero:1, precioEntradaConcierto:1, nombreGrupo:1}
).pretty()

/*Nos han mandado en el clase un trabajo en el que se investigue sobre los grupos de rock que se formaron
el 11/05/1988 */


db.coleccionGrupos.find
(
    {
        año: {$eq: new Date("1988-05-11").getFullYear()}
    }, {nombreGrupo:1, año:1, fechaLanzamiento:1}
).pretty()


/* Quiero encontrar los grupos que como discográfica no tenga las indicadas*/

db.coleccionGrupos.find
( 
    { 
        discografica: { $nin: [ "Warner Music", "EMI", "Columbia Records" ] } 
    }, {discografica:1,nombreGrupo:1}
).pretty()


/*Yo soy mucho de coger los fines de semana y mientras limpio la casa, pongo una lista de reproducción
filtrada por grupos que toquen los géneros Hard rock, Pop rock y Blues rock.*/

db.coleccionGrupos.find
( 
    { 
        genero: { $all: [ "Hard rock", "Pop rock", "Blues rock" ] } 
    }, {genero:1, nombreGrupo:1}
).pretty()

/* Para Junio de 2022 tengo la entrada de un concierto y ésta es su cuarta gira. Muestrame que grupos
que lleven 4 giras a ver si alguno de ellos es del concierto al que iré.*/

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

