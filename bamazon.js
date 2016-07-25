//INITIALIZES THE NPM PACKAGES USED//
var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('console.table');
var prodTable =[]

var choice; 
var res;
var ai;
var stock;
var amount;
var order[];
var stockUpdate [];

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
      if (err) {
        throw err;
        console.log("----------------------------------------------------------");
      }
        console.table(res);
        promptCustomer(res); 

      });  
};

var promptCustomer = function(res) {
    inquirer.prompt([{
    type: 'input',
    name: 'choice',
    message: 'What Item ID would you like to purchase?'
  }]).then(function(val) {

      choice = val.choice

      choiceValidation(choice,res);

    });        
};

function choiceValidation(choice,res){
  var valid = 'false'
  for (var i = 0;i < res.length ; i++){
    if (choice == res[i].ItemID ){
      valid = 'true';
    }
  }


  if (valid =='true'){
    quantity(choice,res);
  }else{
    promptCustomer(res);
  }
}


function quantity(choice,res) {
  inquirer.prompt([{
  type: 'input',
  name: 'amount',
  message:'How Many would you like?'
  }]).then(function(val) {


    ai = choice - 1
    stock = res[ai].StockQuantity;
    amount = val.amount

      if (amount < stock){
        dbUpdate(choice, amount, stock);
      }else{
        console.log('That amount is not available we can do up to'+ ' '+ stock +'?')
      }          
  });                  
};


function dbUpdate(choice, amount, stock){

  var newStock = stock - amount;

  var update = 'UPDATE products SET StockQuantity = '+ newStock +' WHERE ItemID ='+ choice +';'


    connection.query(update, function(err, res) {
    if (err) throw err;
    console.log("----------------------------------------------------------");
    }); 

     printOrder() 

    connection.query('SELECT * FROM products', function(err, res) {
    if (err) throw err;
    console.log("----------------------------------------------------------");

    console.table(res);

  });  
} 





function printOrder(){

var printArray = []

var  pa = printArray.push

   pa(console.log("----------------------------------------------------------"))

 

}

