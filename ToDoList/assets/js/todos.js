// checking and unchecking todos

$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});


// deleting

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});


// adding

$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		var text = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>"
			+text+"</li>");
	}
});

// toggling

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});