Title - 
----------------
Bamazon


Version - 
----------
1.1


Release date & Info - 
---------------------
Working copy 7/24/2016 with minor issues.


Description -
-------------
A node based command line software program which displays a 
list of products captured from a local database.  The items can used to create an order which provides the product information, quantity, price and order total. 
            
                      
Features -
----------
- Lists all product from the local data base
- Product ID validation
- Product inventory check confirms quantity is sufficent for order 


Setup & Run - 
-------------
The following NPM packages will installed to runn program:
  Console.table
  inquirer
  mysql

To run application- 
  In Terminal, navigate to directory where github repository files are located.  To run the file type 'node bamazon.js'.   


Pricing -
---------
freeware


Devloper notes -
-----------------
Bamazon.js has several areas that are under coinstruction:

** Future Enhancements **

+ To improve performance, a record check feature that estabishes a record limit and pulls product info from the database in sets based on a variable limit.  


** Issues/fixes v 1.1 **

Fixed - 
Quantity check, can now order equal to quanity.  Quanity now also loops correctly for re-asking quanity after quanity not avaialble.

Issues-
since quanity data is reused from initial db call, a db quanity check needs to be added prior to final order to confirm quanity still avaiable for item selected.

Order total calculation still needed. 


Want to see?  follow the link for a recorded version of the application.
------------


Contact info -
--------------
Jen Ward
jenforce@aol.com