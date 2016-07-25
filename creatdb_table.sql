CREATE database TeslaDB;

USE TeslaDB;

CREATE TABLE Reservation (
 resID INT NOT NULL AUTO_INCREMENT,
 start_date DATE NOT NULL,
 end_date DATE NOT NULL,
 guessName VARCHAR(10) NOT NULL,
 carID VARCHAR(10) NOT NULL,
 discountID VARCHAR(10) NOT NULL,
  PRIMARY KEY(resID)
);

DROP Table Reservation;


INSERT INTO CarDiscount(discountName, discounttype, amount)
VALUES ("Super Secret","Percent",70);
SELECT * FROM CarDiscount;

UPDATE car
SET  carColor = "Deep Blue Metallic"
WHERE teslaID = 1;
SELECT * FROM car;

DELETE from car
WHERE teslaID=2;