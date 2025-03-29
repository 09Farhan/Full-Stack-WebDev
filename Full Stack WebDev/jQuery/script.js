// $("h1").css("color", "red");

// $("h1").addClass("big-title margin-50");

// $("h1").removeClass("margin-50");

$("h1").text("Bye.");

$("button").html("<em>Hey</em>");

console.log($("img").attr("src"));

$("a").attr("href", "https://www.yahoo.com");

$("h1").click(function(){
    $("h1").css("color", "purple");
}); 

$("button").click(function(){
    $("h1").text("Hello!"); 
})

// $("input").keydown(function(event){
//     console.log(event.key);
// });

$(document).keydown(function(event){
    $("h1").text(event.key)
});

$("h1").on("mouseover", function(){
    $("h1").css("color", "blue");
}
)