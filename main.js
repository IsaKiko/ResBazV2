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



speech_viz = d3.select("body").append("div")
		.style("background-color","white").style("position","absolute")
		.style("top","340px").style("left","280px")
		.style("padding","10px")
		.text("I am visualising data on the web, open and interactive!").moveToFront()
		.style("border-radius","5px")
		.style("opacity",0)
		.style("width","100px")
		.style("font-family","sans-serif")
		.attr("class","hidden");

page_viz = d3.select("body").append("div").attr("class","viz_div")
				.style("width",mommy_w+"px")
				.style("opacity",0)
				.style("position","absolute")
				.style("top","10px")
				.style("left","10px")
				.style("visibility","hidden");

page_viz.append("div").text("Web Vizardry!").style("font-family","sans-serif")
		.style("font-size","2em").style("color","white")
		.style("padding","20px");

page_viz.append("div").text("By tapping into the brilliant little abstract visual computer in our brains, visualisations can not only summarise and make navigable and comprehensible otherwise boring or impenetrable data, but can also capture the essence of a topic or question and close the understanding gap so many of us find hard to bridge").style("font-family","sans-serif")
		.style("font-size","1em").style("color","white")
		.style("padding","20px");

page_viz.append("img").attr("src","isabell.jpg")
		.style("width","80px")
		.style("border-radius","100px")
		.style("padding","20px");

page_viz.append("img").attr("src","errol.jpg")
		.style("width","80px")
		.style("border-radius","100px")
		.style("padding","20px");


// rad circle animation
var cad_state = 1;
var wra_state = 1;
var dav_state = 1;
var viz_state = 1;

circ_cad.on("click", function(){
	if (cad_state == 1){
		d3.selectAll(".element").transition().duration(trans_op).attr("opacity",0);
		d3.selectAll(".op_element").transition().duration(trans_op).attr("opacity",0);
		d3.selectAll(".op7_element").transition().duration(trans_op).attr("opacity",0);
		d3.select(this).transition().duration(trans_exp).attr("r",expand_rad).attr("opacity",1);
		cad_state = 0;
	}
	else {
		d3.selectAll(".element").transition().delay(trans_exp-2*trans_op).duration(trans_op).attr("opacity",opacity);
		d3.selectAll(".op_element").transition().delay(trans_op).duration(trans_op).attr("opacity",1);
		d3.selectAll(".op7_element").transition().delay(trans_op).duration(trans_op).attr("opacity",.7);
		d3.select(this).transition().duration(trans_exp).attr("r",rad).attr("opacity",opacity);
		cad_state = 1;
	
	}
});

circ_wra.on("click", function(){
	if (wra_state == 1){
		d3.selectAll(".element").transition().duration(trans_op).attr("opacity",0);
		d3.selectAll(".op_element").transition().duration(trans_op).attr("opacity",0);
		d3.selectAll(".op7_element").transition().duration(trans_op).attr("opacity",0);
		d3.select(this).transition().duration(trans_exp).attr("r",expand_rad).attr("opacity",1);
		wra_state = 0;
	}
	else {
		d3.selectAll(".element").transition().delay(trans_exp-2*trans_op).duration(trans_op).attr("opacity",opacity);
		d3.selectAll(".op_element").transition().delay(trans_op).duration(trans_op).attr("opacity",1);
		d3.selectAll(".op7_element").transition().delay(trans_op).duration(trans_op).attr("opacity",.7);
		d3.select(this).transition().duration(trans_exp).attr("r",rad).attr("opacity",opacity);
		wra_state = 1;
	
	}
});

circ_dav.on("click", function(){
	if (dav_state == 1){
		d3.selectAll(".element").transition().duration(trans_op).attr("opacity",0);
		d3.selectAll(".op_element").transition().duration(trans_op).attr("opacity",0);
		d3.selectAll(".op7_element").transition().duration(trans_op).attr("opacity",0);
		d3.select(this).transition().duration(trans_exp).attr("r",expand_rad).attr("opacity",1);
		dav_state = 0;
	}
	else {
		d3.selectAll(".element").transition().delay(trans_exp-2*trans_op).duration(trans_op).attr("opacity",opacity);
		d3.selectAll(".op_element").transition().delay(trans_op).duration(trans_op).attr("opacity",1);
		d3.selectAll(".op7_element").transition().delay(trans_op).duration(trans_op).attr("opacity",.7);
		d3.select(this).transition().duration(trans_exp).attr("r",rad).attr("opacity",opacity);
		dav_state = 1;
	
	}
});

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
	}
	else {
		d3.selectAll(".element").transition().delay(trans_exp-2*trans_op).duration(trans_op).attr("opacity",opacity);
		d3.selectAll(".op_element").transition().delay(trans_op).duration(trans_op).attr("opacity",1);
		d3.selectAll(".platy").transition().duration(trans_exp-2).attr("opacity",1);
		d3.selectAll(".op7_element").transition().delay(trans_op).duration(trans_op).attr("opacity",.7);
		circ_viz.transition().duration(trans_exp).attr("r",rad).attr("opacity",opacity);

		page_viz.transition().duration(trans_exp).style("opacity",0);
		page_viz.style("visibility","hidden");

		viz_state = 1;
	
	}
});

viz.on("mouseover", function(){
	if (viz_state == 1){
	speech_viz.transition().duration(trans_sp).style("opacity",0.7);}
})
viz.on("mouseout", function(){
	speech_viz.transition().duration(trans_sp).style("opacity",0);
})
