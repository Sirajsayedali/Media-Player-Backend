// import json server library.
const jsonServer = require('json-server')
                   
//create server using create function
const mediaPlayerServer = jsonServer.create()

//create path for database.json file.
const router = jsonServer.router('database.json')

//create middleware to convert json into js
const middleware = jsonServer.defaults()

// connect
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//set up port for the server
const port = 5000 || process.env.PORT

//run the server - 
mediaPlayerServer.listen(port,()=>{
    console.log(`media player running successfully at port number ${port}`);
})