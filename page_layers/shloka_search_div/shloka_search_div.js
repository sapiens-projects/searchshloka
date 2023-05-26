'use strict'


function addlyrShlokaSearchDiv(attachTo, thisFileLoc='/searchshloka/page_layers/shloka_search_div/'){
	var bSites = null;

	var code = `
		<div id='shlokaSearchDiv'>
			<select class="searchInputBox">
				<option name="prof1" value="prof1">Prof1</option>
				<option name="prof2" value="prof2">Prof2</option>
				<option name="prof3" value="prof3">Prof3</option>
			</select>
			<select class="searchInputBox">
				<option name="prof1" value="astang">Astang</option>
				<option name="rachnaSharir" value="rachnaSharir">Rachna Sharir</option>
				<option name="kriyaSharir" value="kriyaSharir">Kriya Sharir</option>
			</select>
			<input class="searchInputBox" name="pageNum" type="number" placeholder="page number">
			<button class="button" type="submit">search</button>
		</div>
		<link rel="stylesheet" href="${thisFileLoc}main.css">
	`;

	document.getElementById(attachTo).innerHTML += code;
	return bSites;
}