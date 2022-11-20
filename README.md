# Lab_projects
Console application for editing JSON files

This program is intended for editing and making direct changes on given JSON file from console. 
Working with any depth of JSON file, the program is easy to use.

To run the program, download "JSON editor" folder which contains 
index.js and main.js files and an example.json file for testing the program. Make the change in index.js passing your JSON file instead of example.json. Make sure that direction of the file is correct.

//to read the file

const userJson = parseJsonFile("./example.json");

// to save changed properties

changeJsonFile("./example.json", userJson);

In the terminal, type

node index.js property=property value

The program will make the change in your JSON file.	Run in Visual Studio Code, the program works accurately and without errors.

For formatted files, download "Formatted" folder.
