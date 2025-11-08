---
page_type: DiceRoller
languages:
- nodejs
- javascript
products:
- azure
- azure-app-service
description: "This DiceRoller nodeje application demonstrates a Dice Roll program that randomly selects a number between 1 to 6 inclusive. and has an api endpoint to check if the server is online.
---

web.config - This This configuration file is required if iisnode is used to run node processes behind
     IIS or IIS Express.  For more information, visit:

     https://github.com/tjanczuk/iisnode/blob/master/src/samples/configuration/web.config
process.json - Identifies the program entry point for the server and defines
the number of workers to use.


Requirement 1
Create a website that:

1. Is hosted in Microsoft Azure and is globally available
2. Has no standard user interface
3. Provides RESTful APIs for your Dice Roller application
4. Has a main file named index.html that tests the RESTful APIs but does NOT implement your Dice Roller application

Requirement 2
Update your Dice Roller so that it:

1. Is hosted on an Azure static website
2. Asynchronously calls one of the remote RESTful APIs to “wake up” the Node.js server
3. Calls remote RESTful APIs for all random numbers
4. Demonstrates a CORS failure condition
