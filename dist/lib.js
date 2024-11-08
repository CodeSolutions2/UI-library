
async function construct_DOM_elements_w_strings() {

	const tab_num = document.getElementById("tab_num").value;

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
	
	 const htmlString = `<div class="tabs ${tabs_container_class}" id="tabs_container">
		  <nav>
		    ${aElement}
		  </nav>
		  ${divElement}
		</div>`;
	console.log("htmlString: ", htmlString);

	htmlString_
	/*
<div class="tabs tab-left-right" id="tabs_container">
		  <nav>
		    <a class="tabs-nav-link active" href="#" id="tabs_0">Tab 0</a><a class="tabs-nav-link" href="#" id="tabs_1">Tab 1</a>
		  </nav>
		  <div class="content-container" id="tabs_content_0"><h1 class="content-title" id="tabs_content_title_0">Title 0</h1><p class="content-text" id="tabs_content_text_0">Text 0</p></div><div class="content-container" id="tabs_content_1"><h1 class="content-title" id="tabs_content_title_1">Title 1</h1><p class="content-text" id="tabs_content_text_1">Text 1</p></div>
		</div>


	const htmlString = `<div class="tabs ${tabs_container_class}" id="tabs_container">
  <nav>
    <a class="tabs-nav-link active" href="#" id="tabs_Main">Main</a>
    <a class="tabs-nav-link" href="#" id="tabs_About">About</a>
  </nav>
  <div class="content-container" id="tabs_content_Main">
    <h1 class="content-title" id="tabs_content_title_Main">Main Title</h1>
    <p class="content-text" id="tabs_content_text_Main">Main Text</p>
  </div>
  <div class="content-container" id="tabs_content_About">
    <h1 class="content-title" id="tabs_content_title_About">About Title</h1>
    <p class="content-text" id="tabs_content_text_About">About Text</p>
  </div>
</div>`;
*/

	 var htmlNode = document.createRange().createContextualFragment(htmlString);
	 document.getElementById('display_UI').appendChild(htmlNode);

	// Dynamically create addEventListener for each `tabs_${i}`.
	for (let i=0; i<tab_num; i++) {
		await tabs_addEventListener(i, tab_num);
	}

	console.log("tabs_container DOM elements: ", document.getElementById('tabs_container'));


	return '<!DOCTYPE html><html><head></head><body>'+htmlString+'<link href="https://XXX.XXX.XXX/XXX/UI_library@0.0.1/dist/css/UI_library.min.css" rel="stylesheet" integrity="" crossorigin="anonymous"></body></html>';
}
