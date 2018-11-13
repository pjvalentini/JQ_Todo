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

// EVENT BUBBLING...is when an event will continue to bubble up to its parent

// or with three lines of code!
// linethrough the finished list items
// "li" argument states will have events affect them witht he page loads 
// and takes in to account for future events.
$("ul").on("click", "li",  function() {
    $(this).toggleClass("completed");
});

// deletes the list items after completion or if you make a mistake.
// "span" argument states that event should only fire for an li inside of a ul.
$("ul").on("click", "span", function(event) {
    console.log("span")
    // .parent() can select the li the span is in.
    // that this refers to the span
    $(this).parent().fadeOut(1000, function() {
        // this this refers to the li
        $(this).remove();
    });
    // stops event bubbling to other elements
    event.stopPropagation();
});

// adding enter keypress event to the input field.
$("input[type='text']").keypress(function(event) {
    // checks that the enter key is pressed. (enter - 13)
    if(event.which === 13) {
    // grabbing the text from the input.
       var toDoText = $(this).val().trim();
       $(this).val("");
       // create a new li and add to ul.
       $("ul").append("<li><span>X</span> " + toDoText + "</li>");
    }
})
