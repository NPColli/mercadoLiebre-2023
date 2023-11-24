const express = require("express");
const app = express();
const path = require("path")

//Usando recursos estáticos
app.use(express.static("public"));

//Ponemos a escuchar el servidor
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
}); 


//Rutas
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"));
});
app.get("/register", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/register.html"))
})
app.get("/login", (req,res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"))
})