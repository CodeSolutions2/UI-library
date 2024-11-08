export { UI_library, run_multiple_selections }


async function UI_library(obj) {
	
	function run_multiple_selections(obj) {

		var ui_num = Object.keys(obj.ui_elements);
		
		// for (let i=0; i<ui_num.length; i++) { 

			// Detect the type of selected ui to use the correct function.
			// if (ui_num.at(i) == ) {

			// }

		// }

		// const htmlString_IndexElements = '<!DOCTYPE html><html><head></head><body>'+htmlString+'<link href="./dist/ui_styles.css" rel="stylesheet" integrity="" crossorigin="anonymous"></body></html>';

		return ui_num;
	}

	
	function tabs_construct_DOM_elements_w_strings(tab_num) {

		// Create tabs
		var aElement = "";
		for (let i=0; i<tab_num; i++) {
			var aElement_class = i == 0 ? "tabs-nav-link active" : "tabs-nav-link";
			aElement = aElement + `<a class="${aElement_class}" href="#" id="tabs_${i}">Tab ${i}</a>`;
		}
	
		// Create content under each tab
		var divElement = "";
		var h1Element = "";
		var pElement = "";
		for (let i=0; i<tab_num; i++) {
			h1Element = `<h1 class="content-title" id="tabs_content_title_${i}">Title ${i}</h1>`;
			pElement = `<p class="content-text" id="tabs_content_text_${i}">Text ${i}</p>`;
			divElement = divElement + `<div class="content-container" id="tabs_content_${i}">` + h1Element + pElement + "</div>";
		}
		
		 return `<div class="tabs ${tabs_container_class}" id="tabs_container">
			  <nav class="tabs-nav">
			    ${aElement}
			  </nav>
			  ${divElement}
			</div>`;
	}

	// -----------------------------------------

	function tabs_addEventListener(htmlString) {
	
		// Just with the htmlString, determine how many eventlisteners are needed 
		
		
		document.getElementById(`tabs_${i}`).addEventListener("click", async () => {
			// console.log("document.querySelector('.tabs'): ", document.querySelector('.tabs'));
			// console.log("document.querySelector('.tabs-nav-link'): ", document.querySelector('.tabs-nav-link'));
	
			for (let j=0; j<tab_num; j++) {
				if (i == j) {
					// Only add to "tabs_i"
					document.getElementById(`tabs_${j}`).classList.add('active');
					document.getElementById(`tabs_content_${j}`).style.display = "block";
				} else {
					// Remove from all "tabs_j"
					document.getElementById(`tabs_${j}`).classList.remove('active');
					document.getElementById(`tabs_content_${j}`).style.display = "none";
				}
			}
		});
	}


	// -----------------------------------------


	// -----------------------------------------

}
