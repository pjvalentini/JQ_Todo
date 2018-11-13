// adding check off of todos by clicking
// $("li").click(function() {
//     // checking if its gray to its rgb value...it will not work out other wise.
//     if($(this).css("color") === "rgb(128, 128, 128)") {
//         // turn text black
//         $(this).css({
//             color: "black",
//             textDecoration: "none"
//         });
//     }
//     // store styles in an object... that targets the lis
//     else {
//          $(this).css({
//              color: "grey",
//              textDecoration: "line-through"
//          });
//     }
// });

// EVENT BUBBLING...

// or with three lines of code!
$("li").click(function() {
    $(this).toggleClass("completed");
});

$("span").click(function(event) {
    console.log("span")
    // stops event bubbling...
    event.stopPropagation();
});
