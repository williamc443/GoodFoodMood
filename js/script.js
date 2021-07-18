
$(document).ready(function(){
	$(".recepie-img").click(function(){
		var id = $(this).attr("id");
		location.href = `detail.php?id=${id}`;
	})

	const width = window.innerWidth;
	if(width <= 600){
		$(".nav-container").hide()
		$("#indexH1").hide()
		$(".nav-dropdown").show()
	}else{
		$(".nav-container").show()
		$(".nav-dropdown").hide()
	}
})
