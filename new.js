//INITIALIZES THE NPM PACKAGES USED//
var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('console.table');
var prodTable =[]

var choice 
var res
var ai
var stock
var amount

//INITIALIZES THE CONNECTION VARIABLE TO SYNC WITH A MYSQL DATABASE//
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username//
    password: "", //Your password//
    database: "bamazon"
})

//CREATES THE CONNECTION WITH THE SERVER AND MAKES THE TABLE UPON SUCCESSFUL CONNECTION//
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
    }
    tableCreate();
    //recordCheck();
})

//var sendQuery 

function recordCheck(){
  var limit = 3
  var sendQuery = 'SELECT * FROM products'


  connection.query('SELECT COUNT(ItemID) AS ICount FROM products;', function(err, res) {
      var recCount = res[0].ICount
        if (err) {
            throw err;
            console.log("----------------------------------------------------------");
        }else if (recCount < limit) {
           tableCreate(sendQuery); 

        }else if (recCount > limit) {
           sendQuery = 'SELECT * FROM products LIMIT'+ limit;
           tableCreate(sendQuery);     
        }
    });    
}

 function tableCreate (){

    connection.query('SELECT * FROM products', function(err, res) {
        if (err) throw err;
          console.log("----------------------------------------------------------");
      
          console.table(res);
        //console.log(res);
        //promptCustomer(prodTable); 
    });  
 };

