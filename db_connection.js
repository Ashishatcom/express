var pro = require('./db_properties');
var mysql = require('mysql');
module.exports = {
    getConnection :()=>{
        
        return mysql.createConnection(pro);
    }
}