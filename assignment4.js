// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

(function() {
    // Magic!
    console.log('Keepin\'n it clean with an external script!'); 

// This takes the input
   $('.flexsearch-input').keyup(function(event){
     var searchInput = $(".flexsearch-input").val();
     $(".matches").html("");
     jsonSearch(searchInput);
   });
 
 // This will allow me to search and compare the input of the text
   function jsonSearch(searchInput){
     $.ajax({url:"http://www.mattbowytz.com/simple_api.json?data=all",type:"GET",dataType:"json"}).done(function(json){
       var matches = [];
       json.data.programming.forEach(function(results){
         results = results.toLowerCase();
         if(searchInput.length > 0 && results.startsWith(searchInput.toLowerCase())){
           matches.push(results);
           $(".matches").append("<p>" + results + "</p>");
         }
       });
     })
   }
   
  // just as a note - I did not do the bonus.
 })();