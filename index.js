const express = require("express");
const createError = require("http-errors");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

//variables

//     "Gabinetes",
//     "Tarjetas de video",
//     "Tarjetas madre",
//     "Discos duros",
//     "Perifericos",
//     "Fuentes de poder",
//     "RAM",
//     "Procesadores",

let gabinetes = [
    {
        id: 1,
        nombre: 'Aerocool Bolt',
        img: '/img/CP-AEROCOOL-A4718009156326-1.webp',
        escala: 'Atx, Atxmicro, Atxmini',
        caracteristicas: 'Negro, Ventana Rgb',
        precio: '939$',
        tipo: 'gabiente',
    },

    {
        id: 2,
        nombre: 'Cougar MX410-G',
        img: '/img/CP-COUGAR-385VM600001-1.webp',
        escala: 'Atx, MicroAtx, miniItx',
        caracteristicas: 'Negro',
        precio: '1389$',
        tipo: 'gabiente',
    },
    {
        id: 3,
        nombre: 'Yeyian Kalt',
        img: '/img/CP-YEYIAN-KALT1101-1.webp',
        escala: 'Micro-ATX',
        caracteristicas: 'Ventana LED, Negro',
        precio: '749$',
        tipo: 'gabiente',
    },
    {
        id: 4,
        nombre: 'Corsair SPEC-DELTA',
        img: '/img/CP-CORSAIR-CC-9011166-WW-1.webp',
        escala: 'Midi-Tower, ATX/Micro-ATX/Mini-ITX',
        caracteristicas: 'Negro',
        precio: '1529$',
        tipo: 'gabiente',
    },
];

let tarjetasDeVideo = [
    {
        id: 1,
        nombre: 'NVIDIA GeForce GT 710',
        img: '/img/CP-GIGABYTE-GV-N710D5-2GL-1.jpg',
        escala: '',
        caracteristicas: 'GDDR5 2GB 64-bit',
        precio: '2789$',
        tipo: 'tarjetasDeVideo',
    },
    {
        id: 2,
        nombre: 'NVIDIA GeForce GT 1030',
        img: '/img/CP-GIGABYTE-GV-N1030D5-2GL-1.webp',
        escala: '',
        caracteristicas: '2GB 64-bit GDDR5',
        precio: '2789$',
        tipo: 'tarjetasDeVideo',
    },
    
    {
        id: 4,
        nombre: 'NVIDIA GeForce GTX 1050 Ti',
        img: '/img/CP-GIGABYTE-GV-N105TD5-4GD-1.jpg',
        escala: '',
        caracteristicas: '4GB 128-bit GDDR5',
        precio: '6189$',
        tipo: 'tarjetasDeVideo',
    },

];

let tarjetasMadre = [
    {
        id: 1,
        nombre: 'AORUS B365 M ELITE',
        img: '/img/CP-AORUS-B365MAORUSELITE-1.jpg',
        escala: 'Micro ATX',
        caracteristicas: 'HDMI',
        precio: '2189$',
        tipo: 'tarjetasMadre',
    },
    {
        id: 2,
        nombre: 'ASRock B450M Steel Legend',
        img: '/img/CP-ASROCK-90-MXB9Y0-A0UAYZ-1.jpg',
        escala: 'Micro ATX',
        caracteristicas: 'HDMI',
        precio: '1919$',
        tipo: 'tarjetasMadre',
    },
    {
        id: 3,
        nombre: 'Gigabyte GA-A320M-H',
        img: '/img/CP-GIGABYTE-GA-A320M-H-1.jpg',
        escala: 'Micro ATX',
        caracteristicas: 'HDMI, 32GB DDR4 para AMD',
        precio: '1149$',
        tipo: 'tarjetasMadre',
    },
    {
        id: 4,
        nombre: 'Gigabyte B450M H, S-AM4',
        img: '/img/CP-GIGABYTE-B450MH-1.jpg',
        escala: 'Micro ATX',
        caracteristicas: '2GB DDR4 para AMD',
        precio: '1549$',
        tipo: 'tarjetasMadre',
    },
];


let discosDuros =[
    {
        id: 1,
        nombre: 'SSD Adata Ultimate SU800',
        img: '/img/CP-ADATA-ASU800SS-256GT-C-1.jpg',
        escala: '7mm',
        caracteristicas: '256GB',
        precio: '829$',
        tipo: 'discosDuros',
    },
    {
        id: 2,
        nombre: 'SSD Crucial BX500',
        img: '/img/CP-CRUCIAL-CT240BX500SSD1-1.jpg',
        escala: '7mm ',
        caracteristicas: '240GB',
        precio: '789$',
        tipo: 'discosDuros',
    },
    {
        id: 3,
        nombre: 'SSD Kingston A400',
        img: '/img/CP-KINGSTON-SA400S37960G-1.jpg',
        escala: '7mm',
        caracteristicas: '960GB',
        precio: '2039$',
        tipo: 'discosDuros',
    },
    {
        id: 4,
        nombre: 'SSD Western Digital WD',
        img: '/img/CP-WESTERNDIGITAL-WDS500G2B0A-1.webp',
        escala: '7mm',
        caracteristicas: '500GB',
        precio: '1249$',
        tipo: 'discosDuros',
    },
];

let perifericos = [
    {
        id: 1,
        nombre: 'Ocelot Gaming OGMK01',
        img: '/img/CP-OCELOTGAMING-OGMK01-1.jpg',
        escala: '',
        caracteristicas: 'Teclado Gamer',
        precio: '619$',
        tipo: 'perifericos',
    },
    {
        id: 2,
        nombre: 'Ocelot Gaming OGMK02',
        img: '/img/CP-OCELOTGAMING-OGMK02-1.jpg',
        escala: '',
        caracteristicas: 'Teclado Gamer',
        precio: '509$',
        tipo: 'perifericos',
    },
    {
        id: 3,
        nombre: 'Logitech Óptico G203',
        img: '/img/CP-LOGITECH-910-005793-1.webp',
        escala: '',
        caracteristicas: 'Mouse Gamer',
        precio: '429$',
        tipo: 'perifericos',
    },
    {
        id: 4,
        nombre: 'Logitech Óptico M110 Silent',
        img: '/img/CP-LOGITECH-910-005493-1.jpg',
        escala: '',
        caracteristicas: 'Mouse',
        precio: '123$',
        tipo: 'perifericos',
    },
];


// Rutas
app.use(express.static("public"));

app.get("/", (req, res) => {
    // render -> mostrar una vista/html/ejs
    res.render("pages/index");
});
// TODO: hacer mis rutas

app.get("/about", (req, res) => {
    res.render("pages/about", {});
});

app.get ("/partes/:tipos", (req, res) =>{
    let tipos = req.params.tipos;

    if (tipos.toString() === "gabinetes"){
        res.render("pages/partes", {
            partes: gabinetes
        });
    }

    if (tipos.toString() === "tarjetasDeVideo"){
        res.render("pages/partes", {
            partes: tarjetasDeVideo
        });
    }

    if (tipos.toString() === "tarjetasMadre"){
        res.render("pages/partes", {
            partes: tarjetasMadre
        });
    }

    if (tipos.toString() === "discosDuros"){
        res.render("pages/partes", {
            partes: discosDuros
        });
    }

    if (tipos.toString() === "perifericos"){
        res.render("pages/partes", {
            partes: perifericos
        });
    }
    
});

app.get("/productos/:partes/datos", (req,res)=>{
    let id = req.query.id
    let partes = req.params.partes;
    let listaPartes = [];

    switch (partes){
        case "gabiente":
            listaPartes = gabinetes;
            break;
        case "tarjetasDeVideo":
            listaPartes = tarjetasDeVideo;
            break;
        case "tarjetasMadre":
            listaPartes = tarjetasMadre;
            break;
        case "discosDuros":
            listaPartes = discosDuros;
            break;
        case "perifericos":
            listaPartes = perifericos;
            break;
        
        default:

        break;
    }

    listaPartes.forEach((parte) => {
        if (parte.id.toString() === id){
            return res.render("pages/productos",{
                parte
            })
        }
    });

});

app.get("/search",(req,res) =>{
    console.log('req.query.query', req.query.query);
    let query = req.query.query;
    

    let resultados = [];


    for (let i = 0; i < gabinetes.length; i++) {
        const partes = gabinetes[i];
    
        if (partes.nombre.toLowerCase() === query.toLowerCase()) {
            resultados.push(partes);
        }
    }
    for (let i = 0; i < tarjetasDeVideo.length; i++) {
        const partes = tarjetasDeVideo[i];
    
        if (partes.nombre.toLowerCase() === query.toLowerCase()) {
            resultados.push(partes);
        }
    }
    for (let i = 0; i < tarjetasMadre.length; i++) {
        const partes = tarjetasMadre[i];
    
        if (partes.nombre.toLowerCase() === query.toLowerCase()) {
            resultados.push(partes);
        }
    }
    for (let i = 0; i < discosDuros.length; i++) {
        const partes = discosDuros[i];
    
        if (partes.nombre.toLowerCase() === query.toLowerCase()) {
            resultados.push(partes);
        }
    }
    for (let i = 0; i < perifericos.length; i++) {
        const partes = perifericos[i];
    
        if (partes.nombre.toLowerCase() === query.toLowerCase()) {
            resultados.push(partes);
        }
    }

    

    console.log('resultados', resultados);
    res.render("pages/search", {
        resultados
    })
});



// Not Found
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    let message = err.message;
    let error = err;

    res.status(err.status || 500);
    res.render("pages/error", {
        message,
        error
    });
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});