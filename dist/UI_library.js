export async function UI_library(obj) {

	// -----------------------------------------
	
	function run_selections(obj) {

		var ui_num = Object.keys(obj.ui_elements);

		var htmlString = "";
		
		for (let i=0; i<ui_num.length; i++) { 

			var key_name = ui_num.at(i);
			var value_name = obj.ui_elements[key_name];

			// Detect the type of selected ui to use the correct function.
			if ((/dropdown/g).test(ui_num.at(i)) == true) {
				htmlString = htmlString + dropdown_construct_DOM_elements_w_strings();
				
			} else if ((/input/g).test(ui_num.at(i)) == true) {
				htmlString = htmlString + input_construct_DOM_elements_w_strings();
				
			} else if ((/navbar/g).test(ui_num.at(i)) == true) {
				htmlString = htmlString + navbar_construct_DOM_elements_w_strings();
				
			} else if ((/radio/g).test(ui_num.at(i)) == true) {
				htmlString = htmlString + radio_construct_DOM_elements_w_strings();
				
			} else if ((/sidebar/g).test(ui_num.at(i)) == true) {
				htmlString = htmlString + sidebar_construct_DOM_elements_w_strings();
				
			} else if ((/tab/g).test(ui_num.at(i)) == true) {
				htmlString = htmlString + tab_construct_DOM_elements_w_strings(key_name, value_name);

			} else if ((/toggle/g).test(ui_num.at(i)) == true) {
				htmlString = htmlString + toggle_construct_DOM_elements_w_strings();
			}

			htmlString = htmlString + "<br><br><br><br>";
		}

		return htmlString;
	}

	// -----------------------------------------
	
	function tab_construct_DOM_elements_w_strings(key_name, value_name) {

		// Create tabs
		var aElement = "";
		for (let i=0; i<value_name; i++) {
			var aElement_class = i == 0 ? "tabs-nav-link active" : "tabs-nav-link";
			aElement = aElement + `<a class="${aElement_class}" href="#" id="tabs_${i}">Tab ${i}</a>`;
		}
	
		// Create content under each tab
		var divElement = "";
		var h1Element = "";
		var pElement = "";
		for (let i=0; i<value_name; i++) {
			h1Element = `<h1 class="content-title" id="tabs_content_title_${i}">Title ${i}</h1>`;
			pElement = `<p class="content-text" id="tabs_content_text_${i}">Text ${i}</p>`;
			divElement = divElement + `<div class="content-container" id="tabs_content_${i}">` + h1Element + pElement + "</div>";
		}
		
		 return `<div class="tabs ${key_name}" id="tabs_container">
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
	
	return Object.freeze({ run_selections: run_selections });
	
	// -----------------------------------------
}
