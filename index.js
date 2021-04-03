var r1,r2;
r1=Math.floor(Math.random()*6 +1);
document.getElementById("i1").setAttribute("src","images\\dice"+ r1 +".png");
r2=Math.floor(Math.random()*6 +1); 
document.getElementById("i1").setAttribute("src","images\\dice"+ r2 +".png");
if(r1>r2){
    document.getElementById("text").innerHTML="Player 1 Wins!"
}else{
    document.getElementById("text").innerHTML="Player 2 Wins!"
}