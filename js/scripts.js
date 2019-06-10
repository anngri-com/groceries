$(document).ready(function() {
  $("form#list").submit(function(event) {
    var blanks = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8"];
    var empty = [];



    blanks.forEach(function(item) {
      var userInput = $("input#" + item).val();
      empty.push(userInput.toUpperCase());


    });

    empty.sort();

    empty.forEach(function(whatever) {
      $("#complete-list").append("<li>" + whatever +"</li>" );
    });

    $("#complete-list").show();
    $("#list").hide();

      // // $("#complete-list").show();
      // // $("#list").hide();
      // array.forEach(function(array){
      //   $("#complete-list").append("<li>" +array+"</li>" );
      // });

event.preventDefault();
    });
  });
