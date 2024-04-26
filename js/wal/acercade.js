function acd(){
	const btn1  = document.querySelector("#btn-abrir-modal");
	const btn2  = document.querySelector("#btn-cerrar-modal");
	const modal = document.querySelector("#modal");
	btn1.addEventListener("click",()=>{modal.showModal();})
	btn2.addEventListener("click",()=>{modal.close();})
}

export {acd};