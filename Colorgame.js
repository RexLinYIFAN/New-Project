var currentmode=6 ;
var colorbox=document.getElementsByClassName("colorbox");
var colorpool=generateColorPool(6);
var colordisplay=document.querySelector("span");
var message=document.querySelector("#message");
var h1=document.querySelector("h1")
var resetbutton=document.querySelector("#reset")
var easymode=document.querySelector("#easyone")
var hardmode=document.querySelector("#hardone")
var pickedcolor=selectedColor();


colordisplay.textContent=pickedcolor;

//Reset button
resetbutton.addEventListener("click",function(){
	resetbutton.textContent="New Color";
	message.textContent="";	
	colorpool=generateColorPool(6);
	pickedcolor=selectedColor();
	colordisplay.textContent=pickedcolor;
	for(var i=0;i<currentmode;i++){
	colorbox[i].style.backgroundColor=colorpool[i];}
	h1.style.backgroundColor="steelblue";
})
//Mode selection
//easymode
easymode.addEventListener("click",function(){
	//assign mode
	currentmode=3;
	//add selected class to easy button
	easymode.classList.add("selectedmode");
	//remove selected class to hard button
	hardmode.classList.remove("selectedmode");
	//change below 3 colors to black
	colorpool=generateColorPool(6);
	pickedcolor=selectedColor();
	colordisplay.textContent=pickedcolor;
	for(var i=0;i<currentmode;i++){
		colorbox[i].style.backgroundColor=colorpool[i];
	}
	for(var i=3;i<colorbox.length;i++){
		colorbox[i].style.backgroundColor="#232323";
	}
	//change pickedcolor to a new selection
	h1.style.backgroundColor="#232323";
})
//hardmode
hardmode.addEventListener("click",function(){
	//assign mode
	currentmode=6;
	//add selected class to easy button
	hardmode.classList.add("selectedmode");
	//remove selected class to hard button
	easymode.classList.remove("selectedmode");
	colorpool=generateColorPool(6);
	pickedcolor=selectedColor();
	colordisplay.textContent=pickedcolor;
	
	//reverse back below 3 colors
	for(var i=0;i<colorbox.length;i++){
	colorbox[i].style.backgroundColor=colorpool[i];
	}
	//change pickedcolor to a new selection
})
//Color block
for(var i=0;i<colorbox.length;i++){
	colorbox[i].style.backgroundColor=colorpool[i];
	colorbox[i].addEventListener("click",function()
	{	
		if(pickedcolor==this.style.backgroundColor)
		{
		 	setAll();
		 	message.textContent="Correct";
			h1.style.backgroundColor=pickedcolor;
			resetbutton.textContent="Play Again";
		}
		else{
		 	message.textContent="Try Again!";
		 	this.style.backgroundColor="#232323"
		 }
	}
	)
}

function setAll(){
	for(var i=0;i<currentmode;i++)
		{colorbox[i].style.backgroundColor=pickedcolor;}
}
function selectedColor(){
	var randomNumber=Math.floor(Math.random() * currentmode)
	return colorpool[randomNumber];
}

function generateColorPool(num)
{
	var colorarr=[];
	for(var i=0;i<num;i++)
	{
	colorarr.push(generatedColor());
	}
	return colorarr;
}
function generatedColor()
{
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	return "rgb("+r+", "+g+", "+b+")";
}