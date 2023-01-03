const express= require ("express");
const app= express();

//end points//
app.get('./Backend', function (req, res){
    const respuesta=`
    <html>
        <body>
            <h1 style="color:red;">Bienvenido</h1>
        </body>
    </html>
    `;
    res.send(respuesta);
});

app.get('./Index', function (req, res){
   const respuesta=`
nombre: "Juanjose",
apellido: "Bascuñan",
edad: "25",
`;
res.send(respuesta);
})

const port= 5500;

app.listen(port, () =>{
    console.log("Subido al servidor", port);
});