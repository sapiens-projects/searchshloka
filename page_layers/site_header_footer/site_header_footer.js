'use strict'


function addlyrSiteHeaderFooter(attachTo, thisFileLoc='/search_shloka/page_layers/site_header_footer/'){
	const bsites = ['pageMid']
	const code = `
		<a href="#" id="siteNameBannerAnchor">
		<div id="siteNameBanner">
		<img src="${thisFileLoc}images/logo.png" alt="logo">
		<p>search shloka</p>
		</div>
		</a>
		
		<div id="${bsites[0]}"><p>hello</p><p>world</p></div>
		
		<div id="siteFooterBanner">
			<p class="footerHeading">Quick Links</p>
			<ul class="quickLinks">
				<li><a href="./mislleneous/shlokas/001.html">Todays Shloka</a></li>
				<li><a href="/hello.html">hello page</a></li>
			</ul>
			<p class="siteDevCredit">Build and maintain with <img src="${thisFileLoc}images/heart.jpg" alt="love"> by BAMS 1st Year students of session '22-23' of SPIAMSR.</p>
		</div>
		
		<link rel="stylesheet" href="${thisFileLoc}main.css">
		`;

	document.getElementById(attachTo[0]).innerHTML += code
	return bsites;
}
