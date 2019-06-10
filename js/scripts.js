$(document).ready(function() {
//   $("form#list").submit(function(event) {
//     var blanks = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8"];
//     var empty = [];
//
//
//
//     blanks.forEach(function(item) {
//       var userInput = $("input#" + item).val();
//       empty.push(userInput.toUpperCase());
//
//
//     });
//
//     empty.sort();
//
//     empty.forEach(function(whatever) {
//       $("#complete-list").append("<li>" + whatever +"</li>" );
//     });
//
//     $("#complete-list").show();
//     $("#list").hide();
//
//       // // $("#complete-list").show();
//       // // $("#list").hide();
//       // array.forEach(function(array){
//       //   $("#complete-list").append("<li>" +array+"</li>" );
//       // });
//
// event.preventDefault();
//     });
//


   var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
   var suits = ["spades", "diamonds", "clubs", "hearts"];
   var deck = [];

   suits.forEach(function(suit) {
     cards.forEach(function(card) {
       deck.push(card + "of" + suit);


     });
   });
console.log(deck);
  });
