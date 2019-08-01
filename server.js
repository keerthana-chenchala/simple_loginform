var hapi=require('@hapi/hapi');
require("dotenv").config();
var mysql=require('mysql');

var server=new hapi.Server({
    host:'localhost',
    port:9000,
    routes :{
    	cors :true
    },
});
server.route({
        method:"GET",
        path:"/",
        handler:(request,reply)=>{
      return new Promise((resolve,reject)=>{
            var connection = mysql.createConnection({
                host     : process.env.DB_HOST,
                user     : process.env.DB_USER,
                password : process.env.DB_PASSWORD,
                database : process.env.DB_NAME
              });
              connection.connect();
                  connection.query(`SELECT * from users `, function (error, results, fields) {
                    if (error) reject(error);
                    resolve(results);
                  });
            
            })
        }
    })
    server.route({
    method:"POST",
        path:"/add",
        handler:(request,reply)=>{
        	let item = request.payload;
        	console.log(item);
      return new Promise((resolve,reject)=>{
            var connection = mysql.createConnection({
                host     : process.env.DB_HOST,
                user     : process.env.DB_USER,
                password : process.env.DB_PASSWORD,
                database : process.env.DB_NAME
              });
              connection.connect();
                  connection.query(`insert into users (Name,Date_of_Birth,eMail,Contact,About_You,State,Gender,Password) values('${item.name}','${item.dob}','${item.email}','${item.num}','${item.abtu}','${item.states}','${item.gender}','${item.password}')`, function (error, results, fields) {
                    if (error) reject(error);
                    resolve(results);
                  });
            
            })
        }
    })

    
server.start((err)=>{
    if(err) throw err;
    
})


console.log("Server is started");