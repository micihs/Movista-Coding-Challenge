# Movista-Coding-Challenge
Solutions to the assigned movista coding challenge.

## Challenge #1:

Create a page that contains a centered search field and a submit button with a display panel below it. The panel should be 800px wide. 
The panel should stretch vertically to accommodate additional images as they are added. Searching terms in the field should return results from http://giphy.com/ and display the images in the panel, 20 images at a time. 
Scrolling to the bottom of the page should automatically return the next 20 results and append them to those already returned without reloading the page. 
Searching a new term should reset the results.
 
Your project can be coded in any flavor of javascript and html that you are comfortable with though if possible React would be appreciated. 
Documentation for the giphy API can be found here: https://developers.giphy.com/docs/.

## Comments on solution:
Running the code:
  - once the repo has been downloaded and installed..
  - cd react_giphy_output
  - npm install
  - npm start
  
 This will run the react application on localhost port 3000.
 the first display of Gifs will be pulled from the trending section of the Giphy API.
 
Running the Linter
  Linting was completed using the Eslint library and has been integrated into npm to allow for easy usage.
  - npm lint

## Challenge #2:

Create a function that finds and returns the first occurrence of the longest word in a given string. 
Additionally, there should be a line of code that calls the function and then prints out the result. 
For example, given the string "I love Cats", the function should return the word "love". While "love" and "Cats" have the same number of characters, love is the first occurrence of a longest word in the string.
 
http://phptester.net/ is a handy resource to write PHP. Ideally your solution should be able to be copied and pasted into this page for testing.

## Comments on the solution

This solution is located in the PHP_Longest_Word file and is failry self explanatory. It has been run and tested on http://phptester.net/ and runs as expected.

I Look forward to hearing back!
