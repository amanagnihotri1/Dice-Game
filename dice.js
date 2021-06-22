var r1=Math.floor(Math.random()*6)+1;
var image="images/"+"dice"+r1+".png";
var in1=document.querySelectorAll("img")[0];
in1.setAttribute("src",image);



var r2 = Math.floor(Math.random() * 6) + 1;
var imag2 = "images/" + "dice" + r2 + ".png";
var int3=document.querySelectorAll("img")[1];
int3.setAttribute("src",imag2);
if(r1>r2)
{document.querySelector("h1").innerHTML="Player 1 wins.";
}
else if(r1===r2)
{
   document.querySelector("h1").innerHTML="Draw";

}
else
document.querySelector("h1").innerHTML="Player 2 Wins.";
