const inputs = document.querySelectorAll('input');

function FocFun(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function RemFun(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}

inputs.forEach(input => {
    input.addEventListener("focus",FocFun);
    input.addEventListener("blur",RemFun);
})



