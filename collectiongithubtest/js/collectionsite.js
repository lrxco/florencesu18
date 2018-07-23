$( document ).ready(function() {

	$(".hamburger").on("click", () => {
    	$(".menudisplay").fadeToggle(900);
    	$(".imagefeed1, .imagefeed2, .imagefeed3, .imagefeed4, .imagefeed5, .infosection, .imgdisps").toggleClass("menublur");
	});

	$(".slide").hide();

	$(".topbarimg").on("mouseenter", () => {
		$(".slide").show();
	});

	$(".topbarimg").on("mouseleave", () => {
		$(".slide").hide();
	});

	$(".zoomer").on("click", () => {
		$(".zoomon, .zoomoff").toggleClass("zoomclick");
    	$(".gcimg2").toggleClass("zoomin");
    	$(".imgdisps").toggleClass("dispzoom");
	});

	$(".gcimg1, .gcimg2, .gcimg3, .gcimg4, .gcimg5, .gcimg6, .gcimg7, .gcimg8, .gcimg9, .gcimg10, .gcimg11, .gcimg12, .gcimg13, .gcimg14, .gcimg15, .gcimg16, .gcimg17, .gcimg18, .gcimg19, .gcimg20, .gcimg21, .gcimg22, .gcimg23, .gcimg24, .gcimg25, .gcimg26, .gcimg27, .gcimg28, .gcimg29, .gcimg30, .gcimg31, .gcimg32, .gcimg33, .gcimg34, .gcimg35, .gcimg36, .gcimg37, .gcimg38, .gcimg39, .gcimg40, .gcimg41, .gcimg42, .gcimg43, .gcimg44, .gcimg45, .gcimg46, .gcimg47, .gcimg48, .gcimg49, .gcimg50, .gcimg51, .gcimg52, .gcimg53, .gcimg54, .gcimg55, .gcimg56, .gcimg57, .gcimg58, .gcimg59, .gcimg60, .gcimg61, .gcimg62, .gcimg63, .gcimg64, .gcimg65, .gcimg66, .gcimg67, .gcimg68, .gcimg69, .gcimg70, .gcimg71, .gcimg72, .gcimg73, .gcimg74, .gcimg75, .gcimg76, .gcimg77, .gcimg78, .gcimg79, .gcimg80, .gcimg81, .gcimg82, .gcimg83, .gcimg84, .gcimg85, .gcimg86, .gcimg87, .gcimg88, .gcimg89, .gcimg90, .gcimg91, .gcimg92, .gcimg93, .gcimg94, .gcimg95, .gcimg96, .gcimg97, .gcimg98, .gcimg99, .gcimg100").okzoom({
		width: 350,
		height: 350,
		round: true,
		background: "#fff",
		backgroundRepeat: "no-repeat",
		shadow: "0 0 5px #0006",
		border: "0px solid black"
	});

});