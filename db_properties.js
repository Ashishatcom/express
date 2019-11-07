// module.exports ={
//  host  : "localhost",
//  user  :  "root",
//  password :"",
//  database : "curd"

 var mysql      = require('mysql');
 var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password :  '',
   database : 'curd'
 });
  
 var q = connection.connect();
 console.log(q);
  
 connection.query('SELECT 1 + 1  AS solution', function (error, results, fields) {
   if (error) throw error;
   console.log('The solution is: ', results[0].solution);
 });
  
 connection.end();

// }