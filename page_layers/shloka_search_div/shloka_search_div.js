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
			<input class="searchInputBox" maxlength="4" name="pageNum" type="number" placeholder="page number">
			<input class="button" value="search">
			<link rel="stylesheet" href="${thisFileLoc}main.css">
		</div>
	`;

	document.getElementById(attachTo).innerHTML += code;
	return bSites;
}
