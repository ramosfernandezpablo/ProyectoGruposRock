db.coleccionGrupos.insertOne(
    {
        nombreGrupo:"Guns 'N Roses", 
        fechaLanzamiento: new Date ("1985-03-25"), 
        detalles:
        {
            miembro:["Dizzy Reed", "Richard Fortus", "Duff McKagan", "Axl Rose", "Slash", "Melissa Reese", "Frank Ferrer"], 
            componente:["Teclista", "Guitarrista", "Compositor", "Vocalista", "Batería", "Bajista"]
        }, 
        discografia:
        {
            disco:["Appetite for Destruction", "G N' R Lies", "Use Your Ilusion I", "The Spaghetti Incident?", "Chinese Democracy"], 
            unidadesVendidas:[35000000, , 18000000, 30000000, 16000000 , 8500000]
        }, 
        pais:"EEUU Los Ángeles, California", 
        genero:["Hard rock","Heavy metal","Punk rock","Blues rock", "Glam metal", "Sleaze rock"], 
        enActivo:true, 
        gira: ["Welcome to the Jungle", "Sweet Child o'Mine", "Paradise City", "You Could Be Mine", "Don´t Cry", "November Rain", "Knockin' on Heaven´s Door", "Garden of Eden", "Civil War", "I Don´t Care About You", "Better", "Prostitute", "It´s So Easy"], 
        discografica: ["Geffen Records", "UZI Suicide", "Black Frog"], 
        web: "https://wwww.gunsroses.com", 
        precioEntradaConcierto: 55.30,
        año: 1985,
        numeroFans: 100,
        numeroManagers: 50
}
)

db.coleccionGrupos.drop()
db.coleccionGrupos.insertMany
([
    {
        nombreGrupo: "Led Zeppelin",
        fechaLanzamiento: new Date ("1969-01-12"), 
        detalles:{miembro:["Jimmy Page", "Robert Plant", "Jhon", "John Bonham"], 
                componente:["Teclista", "Guitarrista", "Compositor", "Vocalista", "Batería", "Bajista"]},
        discografia:{disco:["Led Zeppelin (1969)", "Houses of the Holy", "Physical Graffiti", "In Through the Out Door", "Coda"], 
                    unidadesVendidas:[8000000, 12000000, 15000000 ,8500000 , 10000000]},  
        pais:"Londres, Reino Unido", 
        genero:["Hard rock","Folk rock","Blues rock", "Pop rock"], 
        enActivo: false, 
        gira: ["Live Aid concierto en JFK Estadio" , "40 aniversario de Atlantic Records", "Hall of Fame", "Ahmet Ertegün Tribute Concert en The O 2 en Londres"], 
        discografica: ["Atlantic Records", "Swang Song", "Black Frog"], 
        web: "https://wwww.ledzeppelin.com",
        precioEntradaConcierto: 123.55,
        año: 1969,
        numeroFans: 30,
        numeroManagers: 60
    },
    
    {
        nombreGrupo: "Extremoduro",
        fechaLanzamiento: new Date ("1987-11-15"), 
        detalles:{miembro:["Roberto Iniesta", "Kaíto", "William", "Gonzalo", "Luis", "Carlos", "Jorge Pérez", "Ramón Sogas", "Miguel Ferreras", "Eugenio Ortiz", "Iñaki Setién", "Alberto Gil", "Iñaki Antón", "José Ignacio Cantera", "Diego Garay", "Miguel Colino"], 
                componente:["Teclista", "Guitarrista", "Compositor", "Vocalista", "Batería", "Bajista"]}, 
        discografia:{disco:["La ley innata", "Yo, minoria absoluta", "Para todos los publicos", "Iros todos a tomar por culo", "Agila"], 
                    unidadesVendidas:[10000000, 5000000 , 3000000 , 5000000, 30000000]},  
        pais:"Plasencia, Cáceres, \nEspaña", 
        genero:["Hard rock"], 
        enActivo: false, 
        gira: ["Live Aid concierto en JFK Estadio" , "40 aniversario de Atlantic Records", "Hall of Fame", "Ahmet Ertegün Tribute Concert en The O 2 en Londres"], 
        discografica: ["Avispa Music", "Área Creativa/Pasión Cía.", "DRO/Warner Music", "El Dromedario Records"], 
        web: "https://wwww.extremoduro.com",
        precioEntradaConcierto: 30.20,
        año: 1987,
        numeroFans: 110,
        numeroManagers: 250
    }, 

    {
        nombreGrupo: "Aerosmith",
        fechaLanzamiento: new Date ("1969-09-10"), 
        detalles:{miembro:["Steven Tayler", "Joe Perry", "Brad Whitford", "Tom Hamilton", "Joey Kramer"], 
                componente:["Teclista", "Guitarrista", "Compositor", "Vocalista", "Batería", "Bajista"]},
        discografia:{disco:["Get Your Wings", "Rocks", "Night in the Ruts", "Pump", "Nine Lives"], 
                    unidadesVendidas:[13000000,4000000 ,250000 ,500 , 45000000 ]},  
        pais:"Boston, \nEEUU", 
        genero:["Hard rock","Heavy metal","Rock and roll","Blues rock", "Glam metal"], 
        enActivo: true, 
        gira: ["Aerosmith Tour" , "Pump Tour", "Done whit Mirrors Tour", "Roar of the Dragon Tour", "Rockin' the Join Tour"], 
        discografica: ["Intermedia Studio", "Columbia Records", "Record Plant", "Geffen Records"], 
        web: "https://wwww.aerosmith.com",
        precioEntradaConcierto: 35.00,
        año: 1969,
        numeroFans: 170,
        numeroManagers: 50
    },
    
    {
        nombreGrupo: "Metallica", 
        fechaLanzamiento: new Date ("1981-02-21"), 
        detalles:{miembro:["Lars Ulrich", "James Hetfield", "Kirk Hammet", "Robert Trujillo"], 
                componente:["Teclista", "Guitarrista", "Compositor", "Vocalista", "Batería", "Bajista"]},
        discografia:{disco:["Kill 'Em All", "Master of Puppets", "Metallica", "ReLoad", "Hardwired... to Self-Destruct"], 
                    unidadesVendidas:[3000, 17500000, 25000000, 150, 650000]},  
        pais:"EEUU Los Ángeles, California", 
        genero:["Hard rock","Heavy metal","Speed metal", "Trash metal"], 
        enActivo: true, 
        gira: ["Mátalos a todos por uno" , "Siete fechas del infierno", "Tour de Damage", "Monster of Rock '87", "Justicia dañada"], 
        discografica: ["Backened Recordings", "Music for Nations", "Warner Bros. Records", "Elektra Records", "Vertigo Records", "Megaforce Records"], 
        web: "https://wwww.metallica.com",
        precioEntradaConcierto: 75.40,
        año: 1981,
        numeroFans: 100,
        numeroManagers: 234
    },
    
    {
        nombreGrupo: "The Beatles", 
        fechaLanzamiento: new Date ("1965-06-16"), 
        detalles:{miembro:["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"], 
                componente:["Teclista", "Vocalista", "Batería", "Bajista"]},
        discografia:{disco:["A Hard Day´s Night", "Help!", "Revolver", "Yellow Submarine", "Let It Be"], 
                     unidadesVendidas:[120000,14000000,250000,37500050,41332000]},     
        pais:"Liverpool, Inglaterra, Reino Unido", 
        genero:["Rock y Pop"], 
        enActivo: false, 
        gira: ["Scotish Tour" , "Break in Tour", "Tommy Roe / Chis Montes Tour", "Roy Orbison / The Beatles Tour", "Beatles Tour of Sweden"], 
        discografica: ["Parlophone", "Apple", "Capitol"], 
        web: "https://wwww.thebeatles.com",
        precioEntradaConcierto: 15.30,
        año: 1965,
        numeroFans: 101,
        numeroManagers: 99
    },

    {
        nombreGrupo: "Heroes del Silencio", 
        fechaLanzamiento: new Date ("1984-12-16"), 
        detalles:{miembro:["Enrique Bunbury", "Juan Valdivia", "Joaquín Cardiel", "Pedro Andreu"], 
                componente:["Teclista", "Guitarrista", "Compositor", "Vocalista", "Bajista"]},
        discografia:{disco:["El mar no cesa", "Senda '91", "El espiritu del vino", "Avalancha", "En directo"], 
                    unidadesVendidas:[150000, 25000, 600000, 200000, 5000]},  
        pais:"España", 
        genero:["Rock", "Hard rock", "Pop rock", "Blues rock"], 
        enActivo: false, 
        gira: ["El mar no cesa", "Tour Senda", "Gira Europea '92", "Gira del Exceso", "Avalancha Tour", "Héroes del Silencio Tour 2007"], 
        discografica: ["EMI"], 
        web: "https://wwww.heroesdelsilencio.es",
        precioEntradaConcierto: 23.50,
        año: 1984,
        numeroFans: 100,
        numeroManagers: 50
    },
    
    {
        nombreGrupo: "Queen", 
        fechaLanzamiento: new Date ("1970-06-27"), 
        detalles:{miembro:["Brain May", "Freddy Mercuery", "Pablo", "Roger Taylor"], 
                componente:["Teclista", "Guitarrista", "Compositor", "Vocalista", "Bajista"]},
        discografia:{disco:["A Night At The Opera", "Innuendo", "The Game", "Jazz", "The Miracle"], 
                    unidadesVendidas:[200000000, 15000, 1500000, 20000000, 300000]},  
        pais:"Londres, Inglaterra, Reino Unido", 
        genero:["Art Rock", "Hard rock", "Pop rock", "Glam rock", "Opera rock", "Rock progresivo", "Arena rock", "Heavy metal"], 
        enActivo: true, 
        gira: ["Queen I", "Sheer Heart Attack", "A Night At The Opera ", "Hot Space", "The Game", "Magic"], 
        discografica: ["EMI", "Hollywood Records", "Elektra Records", "Capitol Records", "Warner Music"], 
        web: "https://wwww.queenonline.com",
        precioEntradaConcierto: 2555.72,
        año: 1970,
        numeroFans: 222,
        numeroManagers: 555

    },

    {
        nombreGrupo: "The Rolling Stones", 
        fechaLanzamiento: new Date ("1962-04-17"), 
        detalles:{miembro:["Mick Jagger", "Keith Richards", "Ronnie Wood"], 
                componente:["Teclista", "Compositor", "Vocalista", "Batería", "Bajista"]},
        discografia:{disco:["Beggars Banquet", "Some Girls", "The Rolling Stones", "A Bigger Bang", "Blue & Lonesome"], 
                    unidadesVendidas:[1000000, 6000000, 500000, 1000000, 123000 ]},  
        pais:"Londres, Inglaterra, Reino Unido", 
        genero:["Rock and roll", "Blues rock", "Rhythm and blues", "Hard rock", "Pop rock", "Rock psicodelico", "Pop psicodelico", "Soul rock"], 
        enActivo: true, 
        gira: ["The Rolling Stones British Tour 1963","The Rolling Stones 1 st European Tour 1965", "The Rolling Stones American Tour 1966", "Voodoo Lounge Tour", "America Latina Olé Tour"], 
        discografica: ["Decca", "London", "ABKCO", "Rolling Stones", "CBS Records", "Virgin", "Polydor"], 
        web: "https://wwww.rollingstones.com",
        precioEntradaConcierto: 50.00,
        año: 1962,
        numeroFans: 10,
        numeroManagers: 50
    },

    {
        nombreGrupo: "U2", 
        fechaLanzamiento: new Date ("1976-05-15"), 
        detalles:{miembro:["Bono", "The Edge", "Adam Clayton", "Larry Mullen Jr."], 
                componente:["Teclista", "Guitarrista", "Compositor", "Vocalista", "Batería", "Bajista"]},
        discografia:{disco:["Boy", "War", "October", "Zooropa", "Pop"], 
                    unidadesVendidas:[1500000, 3000000, 250000,1000000, 13550600]},  
        pais:"Dublin, Irlanda", 
        genero:["Pop rock", "Rock alternativo", "Post-punk"], 
        enActivo: true, 
        gira: ["Irish Tour", "11 O'clock Tick Tock", "War Tour", "Joshua Tour", "U2 360º Tour", "Experience + Innocence Tour"], 
        discografica: ["CBS Ireland", "Island", "Interscope", "Universal", "Mercury"], 
        web: "www.u2.com",
        precioEntradaConcierto: 37.99,
        año: 1976,
        numeroFans: 1000,
        numeroManagers: 5
    },

    {
        nombreGrupo: "Pink Floyd", 
        fechaLanzamiento: new Date ("1965-02-09"), 
        detalles:{miembro:["Roger Waters", "Nick Manson", "David Gilmour", "Richard Wright", "Syd Barret", "Bob Klose", "Jhon"], 
                componente:["Teclista", "Guitarrista", "Compositor", "Vocalista", "Bajista"]},
        discografia:{disco:["A Sauceful os Secrets", "Meddle", "Animals", "The Wall", "The Final Cut", "", ""], 
                    unidadesVendidas:[15000000, 2500000, 1000000, 10000000, 9666500]},  
        pais:"Londres, Inglaterra, Reino Unido", 
        genero:["Art rock", "Rock progresivo", "Rock psicodelico", "Rock experimental", "Hard rock", "Rock espacial", "Rock sinfonico", "Blues rock"], 
        enActivo: false, 
        gira: ["A Momentary Lapse of Reason", "Steel Wheels", "The Division Bell ", "The Dark Side of the Moon", "Run Like Hell", "Comfortably Numb"], 
        discografica: ["Capital Records", "Columbia Records", "EMI", "Sigma 6", "Warner Music"], 
        web: "www.pinkfloyd.com",
        precioEntradaConcierto: 159.42,
        año: 1965,
        numeroFans: 1001,
        numeroManagers: 5002
    },

    {
        nombreGrupo: "The Who", 
        fechaLanzamiento: new Date ("1964-03-22"), 
        detalles:{miembro:["Roger Daltrey", "John Entwistle", "Keith Moon", "Pete Townshend", "Pablo"], 
                componente:["Teclista", "Compositor", "Vocalista", "Batería", "Bajista"]},
        discografia:{disco:["My Generation", "Tommy", "Who Are You", "It´s Hard", "Who"], 
                    unidadesVendidas:[1200000, 20000000, 255000, 100000, 12500050]},  
        pais:"Londres, Inglaterra, Reino Unido", 
        genero:["Hard Rock", "Rock and Roll", "Mod", "Freakbeat", "Opera rock", "Rock progresivo", "Power pop"], 
        enActivo: true, 
        gira: [" Festival Nacional de Jazz y Blues en Richmond", "Tommy Tour", "Quadrophenia Tour", "The Who by Numbers Tour"], 
        discografica: ["Brunswick", "Reaction", "Track", "Polydor", "Decca", "MCA", "Warner Music", "Universal"], 
        web: "http://thewho.es",
        precioEntradaConcierto: 23.47,
        año: 1964,
        numeroFans: 100,
        numeroManagers: 50
    },

    {
        nombreGrupo: "Nirvana", 
        fechaLanzamiento: new Date ("1987-06-17"), 
        detalles:{miembro:["Kurt Cobain", "Krist Novoselic", "Dave Grohl"], 
                componente:["Teclista", "Guitarrista", "Compositor", "Vocalista", "Batería", "Bajista"]},
        discografia:{disco:["Bleach", "Nervermind", "In Utero"], 
                    unidadesVendidas:[6000000, 35000000, 15000000]},  
        pais:"Aberdeen, Washinton, \nEstados Unidos", 
        genero:["Grunge", "Rock alternativo"], 
        enActivo: false, 
        gira: [ "First Live Show", "Crash Worship", "Screaming Trees", "Hollywood Rock Festival", "In Utero live 1994"], 
        discografica: ["Sub Pop", "Tupelo Records", "DGC Records", "Geffen Records"], 
        web: "http://www.nirvana.com",
        precioEntradaConcierto: 22.50,
        año: 1987,
        numeroFans: 1,
        numeroManagers: 5
    },

    {
        nombreGrupo: "Leño", 
        fechaLanzamiento: new Date ("1977-12-31"), 
        detalles:{miembro:["Rosendo Mercado", "Ramiro Penas", "Chiqui Mariscal", "Tony Urbano"], 
                componente:["Teclista", "Guitarrista", "Compositor", "Vocalista", "Batería", "Bajista"]},
        discografia:{disco:["Mas madera", "El tren", "Maneras de vivir", "¡Que tire la toalla!", "Nos va la marcha"], 
                    unidadesVendidas:[150000, 100000, 1550000, 300, 178000]},  
        pais:"Madrid, \nEspaña", 
        genero:["Hard rock", "Blues rock", "Rock and Roll"], 
        enActivo: false, 
        gira: ["Viña Rock 2007"], 
        discografica: ["Chapa Discos", "Sony BMG", "Ñu", "Coz"],
        precioEntradaConcierto: 17.30,
        año: 1977,
        numeroFans: 350,
        numeroManagers: 0
        
    },

    {
        nombreGrupo: "Los suaves", 
        fechaLanzamiento: new Date ("1979-12-20"), 
        detalles:{miembro:["Yosi Dominguez", "Alberto Cereijo", "Fernando Calvo", "Charli Dominguez", "Toni Mojon"], 
                componente:["Teclista", "Guitarrista", "Compositor", "Vocalista", "Batería", "Bajista"]},
        discografia:{disco:["Esta vida me va a matar", "Maldita sea mi suerte", "Si yo fuera Dios", "Adios, adios", "Gira de los mil conciertos"], 
                    unidadesVendidas:[1000000, 550000, 3555000, 150, 5000000]},  
        pais:"Orense, Galicia, \nEspaña", 
        genero:["Hard rock", "Heavy metal", "Punk rock"], 
        enActivo: true, 
        gira: ["29 años, 9 meses y 1 día", "Gira de los mil conciertos"], 
        discografica: ["Locomotive", "Eco"],
        precioEntradaConcierto: 9.95,
        año: 1979,
        numeroFans: 768,
        numeroManagers: 876
        
    },

    {
        nombreGrupo: "Loquillo", 
        fechaLanzamiento: new Date ("1980-04-17"), 
        detalles:{miembro:["José María Sanz Beltrán", "Igor Paskual", "Laurent Castagnet", "Josu Garcia", "Alfonso Alcala", "Mario Cobo", "Lucas Albaladejo"], 
                componente:["Teclista", "Guitarrista", "Compositor", "Vocalista", "Batería", "Bajista"]},
        discografia:{disco:["Rock and Roll actitud", "Enamorado de la dependienta de la tienda de patatas fritas", "Chanel, cocaína y Don Perignon", "Cadillac solitario", "Maldigo mi destino"], 
                    unidadesVendidas:[150000, 500, 1000, 6000000, 3500]},  
        pais:"España", 
        genero:["Rock and roll", "Rockabilly", "Country rock", "Soft rock", "Hard rock"], 
        enActivo: true, 
        gira: ["El ultimo clasico", "Loquillo te presenta su cara A", "Loquillo regresa a Madrid mas loquillo que nunca ", "La vida por delante II"], 
        discografica: ["Cuspide", "Tres Ciprese", "DRO Atlantic", "Hispavox", "EMI", "Odeon", "Konga Music/Blanco y Negro Music"], 
        web: "http://www.loquillo.es",
        precioEntradaConcierto: 15.00,
        año: 1980,
        numeroFans: 100,
        numeroManagers: 500
    },

    {
        nombreGrupo: "Mago de Oz", 
        fechaLanzamiento: new Date ("1988-05-11"), 
        detalles:{miembro:["Javier Dominguez", "Patricia Tapia", "Jesus Hernandez", "Carlos Prieto", "Manuel Seoane", "Victor de Andres", "Fernando Mainer", "Javi Diez", "Josema Pizarro"], 
                componente:["Teclista", "Guitarrista", "Compositor", "Vocalista", "Batería", "Bajista"]},
        discografia:{disco:["Gaia", "Jesus de Chamberi", "Gaia II: La voz dormida", "Hechizos, Pocimas y Brujeria", "Ira Dei"], 
                    unidadesVendidas:[6000000000, 150, 200000, 3000, 150]},  
        pais:"Madrid, \nEspaña", 
        genero:["Folk metal", "Heavy metal", "Power metal"], 
        enActivo: true, 
        gira: ["Via Crusis", "A la Mierda", " Se Hará Como Pueda... y Encima Llueve", "Hasta que el Cuerpo Aguante", "Arbol de Cerveza", "Ven Quiero Oír tu Voz"], 
        discografica: ["Locomotive Music", "Warner Music", "DRO Atlantic"], 
        web: "htttp://www.magodeozoficial.com",
        precioEntradaConcierto: 0.00,
        año: 1988,
        numeroFans: 321,
        numeroManagers: 123
    },

    {
        nombreGrupo: "Fito y Fitipaldis", 
        fechaLanzamiento: new Date ("1998-04-11"), 
        detalles:{miembro:["Fito Cabrales", "Carlos Raya", "Javier Alzola", "Joserra Senperena", "Alejandro Climent", "Daniel Griffin"], 
                componente:["Teclista", "Guitarrista", "Compositor", "Vocalista", "Batería", "Bajista"]},
        discografia:{disco:["A puerta cerrada", "Por la boca vive el pez", "Antes de que cuente diez", "Los sueños locos", "Cada vez mas cadaver"], 
                    unidadesVendidas:[1780, 2550000, 10000000, 250000, 5650000]},  
        pais:"España", 
        genero:["Rock and roll", "Blues rock", "Pop rock", "Rockabilly"], 
        enActivo: true, 
        gira: ["DRO", "Warner Music"], 
        discografica: ["Cada vez cadaver Tour 2022"], 
        web: "http://www.fitoyfitipaldis.com",
        precioEntradaConcierto: 37.50,
        año: 1998,
        numeroFans: 1765,
        numeroManagers: 32
    },

    {
        nombreGrupo: "Hombres G", 
        fechaLanzamiento: new Date ("1982-12-07"), 
        detalles:{miembro:["David Summers", "Dani Mezquita Hardy", "Rafa Gutierrez", "Javier Molina"], 
                componente:["Teclista", "Guitarrista", "Compositor", "Vocalista", "Batería", "Bajista"]},
        discografia:{disco:["La cagaste...Burt Lancaster", "Voy a pasarmelo bien", "Historia del bikini", "Todo esto es muy extraño", "Desayuno continental", "La esquina de Rowland"], 
                    unidadesVendidas:[20000, 335000, 2000, 150, 500, 3000]},  
        pais:"España", 
        genero:["Rock español", "Pop rock"], 
        enActivo: true, 
        gira: ["Resureccion Tour", "Ruta Firestone", " Voy a pasarmelo bien"], 
        discografica: ["Lollipop", "Twins", "DRO East West", "Warner Music"], 
        web: "http://www.hombresg.net/",
        precioEntradaConcierto: 7.50,
        año: 1982,
        numeroFans: 450,
        numeroManagers: 734
    },

    {
        nombreGrupo: "Triana", 
        fechaLanzamiento: new Date ("1988-05-11"), 
        detalles:{miembro:["Jesus de la Rosa Luque", "Eduardo Rodriguez Rodway", "Juan Jose Palacios Tele"], 
                componente:["Teclista", "Guitarrista", "Compositor", "Vocalista", "Batería", "Bajista"]},
        discografia:{disco:["Hijos del agobio", "Sombra y luz", "Un encuentro", "Un mal sueño", "El patio", "Llego el dia"], 
                    unidadesVendidas:[190, 250000, 300, 2200, 400000, 1555000]},  
        pais:"Sevilla, \nEspaña", 
        genero:["Rock andaluz", "Rock progresivo"], 
        enActivo: true, 
        gira: ["Queremos elegir", "Sin que nadie diga más", "El rumbo que lleva a la orilla de la libertad ", "Cantaban en '¡Ya está bien!"], 
        discografica: ["Movieplay", "Fonomusic"],
        año: 1988,
        numeroFans: 10,
        numeroManagers: 50
    
    }  
    
])

/*------------APORTACION PERSONAL----------
Esta es otra forma de añadir nuevos grupos (aunque de manera desordenada) sin tener que usar 
el insertOne o el insertMany."Bulk" declara una variable, que va a ser llamada por medio de un insert, 
una vez añadidos los nuevos grupos, ejecutamos la variable */

var bulk = db.coleccionGrupos.initializeUnorderedBulkOp();
bulk.insert({ nombreGrupo: "Blues Cal Experience", precioEntradaConcierto: 7.55, discografica: "DOMI Music"});
bulk.insert({ nombreGrupo: "Los niños del Ventorrillo", precioEntradaConcierto: 20.00, discografica: "Pruna Records"});
bulk.insert({ nombreGrupo: "Borneo", precioEntradaConcierto: 2.00, discografica: "DOMI Music"});
bulk.execute();



