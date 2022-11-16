# This is script of a test Automation for a Pet store backend API
It tests Get, Put, Post and Delete calls

Tests are run in sequence by first creating a new Pet record , searching that new Pet record, updating the name of Pet 
and then deleting the Pet.


Steps for installation from scratch.

1. Create a folder to your desktop directory
2. Open the folder from VS Code
3. Download and install latest version of Nodejs and npm
3. Open Terminal and type npm init
4. npm install --save-dev supertest mocha chai @babel/cli @babel/core @babel/node @babel/preset-env @babel/register mochawesome
5. create folder test
6. copy petstore.js under test folder

Steps for running the test from zip or git repo
1. Copy zip or get from git repo
2. open folder in VS Code
3. Go to Termial
4. Run command
   npm test
5. It should run all 5 tests and generate report under petstorereport folder
6. Open the html file under the petstorereport folder to view the test summary.
