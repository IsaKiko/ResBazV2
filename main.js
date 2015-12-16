var rad = 200;
var expand_rad = 550;
var hor_os = 120;
var ver_os = 120;
var opacity = "0.13";
var green = "rgb(33,119,99)";
var red = "rgb(176,44,47)";
var orange = "rgb(217,132,105)";
var purple = "rgb(103,79,144)";

var trans_exp = 1200;
var trans_op = 500;
var trans_sp = 200;

var mommy_w = 500; 
var mommy_h = 500;

var speech_w = 140; 
var speech_h = 80;


var twi_viz = d3.select("#twit_resplat").style("display","none")
.style("position","absolute")
.style("top","330px")
.style("left","20px");

d3.selection.prototype.moveToFront = function(){
	return this.each(function(){
		this.parentNode.appendChild(this);
	})
}

d3.selection.prototype.moveToBack = function(){
	return this.each(function(){
		var firstChild = this.parentNode.firstChild;
		if (firstChild) {
			this.parentNode.insertBefore(this, firstChild);
		}
	})
}

var mommy = d3.select("#mommy").attr("width", mommy_w).attr("height", mommy_h);

var circ_cad = mommy.append("circle")
				 .attr("cx", hor_os).attr("cy", ver_os)
				 .attr("r",rad)
				 .attr("fill",green)
				 .attr("opacity", opacity)
				 .attr("class","element");
var circ_wra = mommy.append("circle")
				 .attr("cx", mommy_w - hor_os).attr("cy", ver_os).attr("r",rad)
				 .attr("fill",orange)
				 .attr("opacity", opacity)
				 .attr("class","element");
var circ_dav = mommy.append("circle")
				 .attr("cx", hor_os).attr("cy", mommy_h - ver_os).attr("r",rad)
				 .attr("fill",red)
				 .attr("opacity", opacity)
				 .attr("class","element");
var circ_viz = mommy.append("circle")
				 .attr("cx", mommy_w - hor_os).attr("cy", mommy_h - ver_os).attr("r",rad)
				 .attr("fill",purple)
				 .attr("opacity", opacity)
				 .attr("class","element");

mommy.append("circle").attr("cx", mommy_w/2).attr("cy", mommy_h/2).attr("r",70).attr("fill","white").attr("filter","url(#f1)").attr("opacity",0.7).attr("class","op7_element");

var logo = d3.select("#logo").attr("x",(mommy_w/2-55)).attr("y",(mommy_h/2-80/2)).attr("class","op_element");
logo.moveToFront();

var cad = d3.select("#cad").attr("x",10).attr("y",35).attr("class","platy");
cad.moveToFront();

var wra = d3.select("#wra").attr("x",335).attr("y",45).attr("class","platy");
wra.moveToFront();

var dav = d3.select("#dav").attr("x",10).attr("y",320).attr("class","platy");
dav.moveToFront();

var viz = d3.select("#viz").attr("x",380).attr("y",310).attr("class","platy");
viz.moveToFront();


//// PAGES //// 


// WRANGLER
speech_wra = d3.select("body").append("div")
		.style("top","40px").style("left","270px")
		.text("I am rounding up and analysing data!").moveToFront()
		.attr("class","hidden speechbubble");

page_wra = d3.select("body").append("div").attr("class","wra_div")
				.style("width",mommy_w+"px")
				.style("opacity",0)
				.style("position","absolute")
				.style("top","10px")
				.style("left","10px")
				.style("visibility","hidden");

page_wra.append("div").text("Data Wrangling!").style("font-family","sans-serif")
		.style("font-size","2em").style("color","white")
		.style("padding","25px");

page_wra.append("div").text("blurb")
		.style("font-family","sans-serif")
		.style("font-size","1em").style("color","white")
		.style("padding","25px");

page_wra.append("img").attr("src","kerry.jpg")
		.style("width","65px")
		.style("border-radius","100px")
		.style("padding","25px");

page_wra.append("img").attr("src","pippa.jpg")
		.style("width","65px")
		.style("border-radius","100px")
		.style("padding","25px");



// CADVENTURER
speech_cad = d3.select("body").append("div")
		.style("top","30px").style("left","120px")
		.text("I am playing and printing in 3D!").moveToFront()
		.attr("class","hidden speechbubble");

page_cad = d3.select("body").append("div").attr("class","cad_div")
				.style("width",mommy_w+"px")
				.style("opacity",0)
				.style("position","absolute")
				.style("top","10px")
				.style("left","10px")
				.style("visibility","hidden");

page_cad.append("div").text("Come on a CADventure!").style("font-family","sans-serif")
		.style("font-size","2em").style("color","white")
		.style("padding","25px");

page_cad.append("div").text("blurb.")
		.style("font-family","sans-serif")
		.style("font-size","1em").style("color","white")
		.style("padding","25px");

page_cad.append("img").attr("src","paul.jpg")
		.style("width","65px")
		.style("border-radius","100px")
		.style("padding","25px");

page_cad.append("img").attr("src","louise.jpg")
		.style("width","65px")
		.style("border-radius","100px")
		.style("padding","25px");

// DAVINCI
speech_dav = d3.select("body").append("div")
		.style("top","330px").style("left","130px")
		.text("I am mining and analysing social data!").moveToFront()
		.attr("class","hidden speechbubble");

page_dav = d3.select("body").append("div").attr("class","dav_div")
				.style("width",mommy_w+"px")
				.style("opacity",0)
				.style("position","absolute")
				.style("top","10px")
				.style("left","10px")
				.style("visibility","hidden");

page_dav.append("div").text("Text mining!").style("font-family","sans-serif")
		.style("font-size","2em").style("color","white")
		.style("padding","25px");

page_dav.append("div").text("blurb.")
		.style("font-family","sans-serif")
		.style("font-size","1em").style("color","white")
		.style("padding","25px");

page_dav.append("img").attr("src","kim.jpg")
		.style("width","65px")
		.style("border-radius","100px")
		.style("padding","25px");

page_dav.append("img").attr("src","yuandra.jpg")
		.style("width","65px")
		.style("border-radius","100px")
		.style("padding","25px");


// VIZARD
speech_viz = d3.select("body").append("div")
		.style("top","340px").style("left","280px")
		.text("I am visualising data on the web, open and interactive!").moveToFront()
		.attr("class","hidden speechbubble");

page_viz = d3.select("body").append("div").attr("class","viz_div")
				.style("width",mommy_w+"px")
				.style("opacity",0)
				.style("position","absolute")
				.style("top","10px")
				.style("left","10px")
				.style("visibility","hidden");

page_viz.append("div").text("Web Vizardry!").style("font-family","sans-serif")
		.style("font-size","2em").style("color","white")
		.style("padding","25px");

var blurb_div_viz = page_viz.append("div")
		.style("padding","25px")
		.style("background-color","#917DB3")
		.attr("class","blurb_div");

blurb_div_viz.append("img").attr("src","isabell.jpg")
		.style("width","65px")
		.style("border-radius","100px");

blurb_div_viz.append("span").text("By tapping into the brilliant little abstract visual computer in our brains, visualisations can not only summarise and make navigable and comprehensible otherwise boring or impenetrable data, but can also capture the essence of a topic or question and close the understanding gap so many of us find hard to bridge.")
		.attr("class","blurb");

var footer_viz = page_viz.append("ul").attr("class","footer");

footer_viz.append("li")
		.append("a").text("MATERIAL")
		.attr("href","https://isakiko.github.io/D3-visualising-data");

footer_viz.append("li").attr("class","vertline");

footer_viz.append("li")
		.append("a").text("COMMUNITY")
		.attr("href","https://www.facebook.com/groups/1690932847854289/");

footer_viz.append("li").attr("class","vertline");


var teambtn_viz = footer_viz.append("li")
	  .text("TEAM").attr("class","link");


var mainbtn_viz = footer_viz.append("li")
	  .text("MAIN").attr("class","link")
	  .style("margin-left","50px");

footer_viz.append("li").attr("class","vertline");


var teampage_viz = d3.select("body").append("div").attr("class","viz_div")
				.style("width",mommy_w+"px")
				.style("position","absolute")
				.style("top","10px")
				.style("left","510px");


teampage_viz.append("div").text("Vizards").style("font-family","sans-serif")
		.style("font-size","2em").style("color","white")
		.style("padding","25px");

teampage_viz.append("img").attr("src","isabell.jpg")
		.style("width","65px")
		.style("border-radius","100px")
		.style("padding","20px");

teampage_viz.append("img").attr("src","errol.jpg")
		.style("width","65px")
		.style("border-radius","100px")
		.style("padding","20px");




// rad circle animation
var cad_state = 1;
var wra_state = 1;
var dav_state = 1;
var viz_state = 1;

//// PAGE INTERACTION

// WRANGLER

wra.on("click", function(){
	if (wra_state == 1){
		d3.selectAll(".element").transition().duration(trans_op).attr("opacity",0);
		d3.selectAll(".op_element").transition().duration(trans_op).attr("opacity",0);
		d3.selectAll(".op7_element").transition().duration(trans_op).attr("opacity",0);
		d3.selectAll(".platy").transition().duration(trans_op).attr("opacity",0);
		circ_wra.transition().duration(trans_exp).attr("r",expand_rad).attr("opacity",1);
		d3.select(this).transition().attr("opacity",1);
		speech_wra.transition().duration(trans_sp).style("opacity",0);

		page_wra.style("visibility","visible");
		page_wra.transition().duration(trans_exp).style("opacity",1);

		wra.transition("ease").delay(200).duration(trans_exp).attr("x",335).attr("y",310);

		wra_state = 0;
		d3.select(this).moveToFront();

		dav.moveToBack();
		viz.moveToBack();
		cad.moveToBack();

	}
	else {
		d3.selectAll(".element").transition().delay(trans_exp-2*trans_op).duration(trans_op).attr("opacity",opacity);
		d3.selectAll(".op_element").transition().delay(trans_op).duration(trans_op).attr("opacity",1);
		d3.selectAll(".platy").transition().duration(trans_exp-2).attr("opacity",1);
		d3.selectAll(".op7_element").transition().delay(trans_op).duration(trans_op).attr("opacity",.7);
		circ_wra.transition().duration(trans_exp).attr("r",rad).attr("opacity",opacity);

		page_wra.transition().duration(trans_exp).style("opacity",0);
		page_wra.style("visibility","hidden");

		wra.transition("ease").duration(trans_exp).attr("x",335).attr("y",45);

		wra_state = 1;
		
		dav.moveToFront();
		viz.moveToFront();
		cad.moveToFront();
	
	}
});

wra.on("mouseover", function(){
	if (wra_state == 1){
	speech_wra.transition().duration(trans_sp).style("opacity",0.7);}
})
wra.on("mouseout", function(){
	speech_wra.transition().duration(trans_sp).style("opacity",0);
})

// CADVENTURER

cad.on("click", function(){
	if (cad_state == 1){
		d3.selectAll(".element").transition().duration(trans_op).attr("opacity",0);
		d3.selectAll(".op_element").transition().duration(trans_op).attr("opacity",0);
		d3.selectAll(".op7_element").transition().duration(trans_op).attr("opacity",0);
		d3.selectAll(".platy").transition().duration(trans_op).attr("opacity",0);
		circ_cad.transition().duration(trans_exp).attr("r",expand_rad).attr("opacity",1);
		d3.select(this).transition().attr("opacity",1);
		speech_cad.transition().duration(trans_sp).style("opacity",0);

		page_cad.style("visibility","visible");
		page_cad.transition().duration(trans_exp).style("opacity",1);
		

		cad.transition("ease").delay(200).duration(trans_exp).attr("x",10).attr("y",310);

		cad_state = 0;
		d3.select(this).moveToFront();
		dav.moveToBack();
		viz.moveToBack();
		wra.moveToBack();
	}
	else {
		d3.selectAll(".element").transition().delay(trans_exp-2*trans_op).duration(trans_op).attr("opacity",opacity);
		d3.selectAll(".op_element").transition().delay(trans_op).duration(trans_op).attr("opacity",1);
		d3.selectAll(".platy").transition().duration(trans_exp-2).attr("opacity",1);
		d3.selectAll(".op7_element").transition().delay(trans_op).duration(trans_op).attr("opacity",.7);
		circ_cad.transition().duration(trans_exp).attr("r",rad).attr("opacity",opacity);

		page_cad.transition().duration(trans_exp).style("opacity",0);
		page_cad.style("visibility","hidden");

		cad.transition("ease").duration(trans_exp).attr("x",10).attr("y",35);

		cad_state = 1;
		dav.moveToFront();
		viz.moveToFront();
		wra.moveToFront();
	
	}
});

cad.on("mouseover", function(){
	if (cad_state == 1){
	speech_cad.transition().duration(trans_sp).style("opacity",0.7);}
})
cad.on("mouseout", function(){
	speech_cad.transition().duration(trans_sp).style("opacity",0);
})


// DAVINCI

dav.on("click", function(){
	if (dav_state == 1){
		d3.selectAll(".element").transition().duration(trans_op).attr("opacity",0);
		d3.selectAll(".op_element").transition().duration(trans_op).attr("opacity",0);
		d3.selectAll(".op7_element").transition().duration(trans_op).attr("opacity",0);
		d3.selectAll(".platy").transition().duration(trans_op).attr("opacity",0);
		circ_dav.transition().duration(trans_exp).attr("r",expand_rad).attr("opacity",1);
		d3.select(this).transition().attr("opacity",1);
		speech_dav.transition().duration(trans_sp).style("opacity",0);

		page_dav.style("visibility","visible");
		page_dav.transition().duration(trans_exp).style("opacity",1);

		dav_state = 0;
		d3.select(this).moveToFront();

		cad.moveToBack();
		viz.moveToBack();
		wra.moveToBack();

	}
	else {
		d3.selectAll(".element").transition().delay(trans_exp-2*trans_op).duration(trans_op).attr("opacity",opacity);
		d3.selectAll(".op_element").transition().delay(trans_op).duration(trans_op).attr("opacity",1);
		d3.selectAll(".platy").transition().duration(trans_exp-2).attr("opacity",1);
		d3.selectAll(".op7_element").transition().delay(trans_op).duration(trans_op).attr("opacity",.7);
		circ_dav.transition().duration(trans_exp).attr("r",rad).attr("opacity",opacity);

		page_dav.transition().duration(trans_exp).style("opacity",0);
		page_dav.style("visibility","hidden");

		dav_state = 1;

		cad.moveToFront();
		viz.moveToFront();
		wra.moveToFront();
	
	}
});

dav.on("mouseover", function(){
	if (dav_state == 1){
	speech_dav.transition().duration(trans_sp).style("opacity",0.7);}
})
dav.on("mouseout", function(){
	speech_dav.transition().duration(trans_sp).style("opacity",0);
})


// VIZARD

viz.on("click", function(){
	if (viz_state == 1){
		d3.selectAll(".element").transition().duration(trans_op).attr("opacity",0);
		d3.selectAll(".op_element").transition().duration(trans_op).attr("opacity",0);
		d3.selectAll(".op7_element").transition().duration(trans_op).attr("opacity",0);
		d3.selectAll(".platy").transition().duration(trans_op).attr("opacity",0);
		circ_viz.transition().duration(trans_exp).attr("r",expand_rad).attr("opacity",1);
		d3.select(this).transition().attr("opacity",1);
		speech_viz.transition().duration(trans_sp).style("opacity",0);

		page_viz.style("visibility","visible");
		page_viz.transition().duration(trans_exp).style("opacity",1);

		viz_state = 0;
		d3.select(this).moveToFront();

		dav.moveToBack();
		cad.moveToBack();
		wra.moveToBack();
		
		setTimeout(function(){ 
			twi_viz.style("display","block")}, 1000);

	}
	else {
		d3.selectAll(".element").transition().delay(trans_exp-2*trans_op).duration(trans_op).attr("opacity",opacity);
		d3.selectAll(".op_element").transition().delay(trans_op).duration(trans_op).attr("opacity",1);
		d3.selectAll(".platy").transition().duration(trans_exp-2).attr("opacity",1);
		d3.selectAll(".op7_element").transition().delay(trans_op).duration(trans_op).attr("opacity",.7);
		circ_viz.transition().duration(trans_exp).attr("r",rad).attr("opacity",opacity);


		teampage_viz.transition().duration(1000).style("left","510px");	

		page_viz.transition().duration(trans_exp).style("opacity",0).style("left","10px");
		page_viz.style("visibility","hidden");

		viz_state = 1;
		
		dav.moveToFront();
		cad.moveToFront();
		wra.moveToFront();

		twi_viz.style("display","none");

	}
});

viz.on("mouseover", function(){
	if (viz_state == 1){
	speech_viz.transition().duration(trans_sp).style("opacity",0.7);}
})
viz.on("mouseout", function(){
	speech_viz.transition().duration(trans_sp).style("opacity",0);
})

teambtn_viz.on("click",function(){
	page_viz.transition().duration(1000).style("left","-500px");
	teampage_viz.transition().duration(1000).style("left","10px");
})

mainbtn_viz.on("click", function(){
	page_viz.transition().duration(1000).style("left","10px");
	teampage_viz.transition().duration(1000).style("left","510px");	
})
