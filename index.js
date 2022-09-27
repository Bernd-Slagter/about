window.onscroll = function() {scrollFunc()};

var header= document.getElementById("nav")

var sticky = header.offsetTop;

function scrollFunc(){
	if (window.pageYOffset > sticky){
		header.classlist.add("sticky");
	} else {
		header.classlist.remove("sticky");
	}
}