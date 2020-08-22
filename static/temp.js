let life=3;points=0;var temp2="images/knife2.png";
function newknife(x){
    
    switch(x){
        case 1:{temp2="images/knife3.png";document.getElementById("change").innerHTML="Next transition at:24"; break;}
        case 2:{temp2="images/knife4.png";document.getElementById("change").innerHTML="Next transition at:38";break;}
        case 3:{temp2="images/knife5.png";document.getElementById("change").innerHTML="Next transition at:53";break;}
        case 4:{temp2="images/knife6.png";document.getElementById("change").innerHTML="";break;}
    }
    let a=document.querySelectorAll("#animate2");
    for (i=0;i<a.length;i++){
        a[i].remove();
    }
    document.getElementById("knife").src=temp2;
    //let image2= document.createElement("img");
    //image2.src=temp2;
    //image2.setAttribute("id","animate2");
    //document.getElementById("maina").appendChild(image2);
}
function gameover(){
    setTimeout(()=>{
    let ant=document.createElement("div");
    ant.setAttribute("id","gameover");
    document.body.appendChild(ant);
     let head1=document.createElement("div");
    head1.setAttribute("id","text");
    head1.innerHTML="Game Over";
    document.body.appendChild(head1);
    document.getElementById("text").addEventListener("animationend",function(){
        let point=document.createElement("h1");
        point.innerHTML="Your Points:"+points;
        point.setAttribute("class","point");
        document.body.appendChild(point);
        let butt=document.createElement("button");
        butt.innerHTML="Play again";
        butt.addEventListener("click",function(){
            location.href="knife.html";
        })
        butt.setAttribute("id","play");
        document.body.appendChild(butt);
    })
},800)}
function strikecheck(){
    let strike=false; diemension=new Array
    let app=document.querySelectorAll("#animate2");
    for(i=0;i<app.length;i++){
        let newone=app[i].getBoundingClientRect();
        let angel=[Math.ceil(newone.x),Math.ceil(newone.y)];
        diemension.push(angel)  
    }
    console.log("__>")
    for(i=0;i<diemension.length;i++){
        console.log(diemension[i][0]+","+diemension[i][1]);
        if ((diemension[i][0]<=938 && diemension[i][0]>871)&& (diemension[i][1]>=182 && diemension[i][1]<200)){
            strike=true;
            break;
        }}
    if (strike==true)return(0);
    else return(1);

}
function main(){
    let image1=document.createElement("img");
    image1.src=temp2;
    let num=strikecheck();
    let audio2=new Audio("audio/Drop Sword-SoundBible.com-768774345.mp3");
    let audio1=new Audio("audio/Throw_Knife-Anonymous-1894795848.mp3");
    audio1.play();
    if (num==0){     
        life-=1;
        image1.setAttribute("id","knife3");
        image1.addEventListener("animationend",function(){image1.style.display="none";})
        if(life==0)gameover();
        else{
        document.getElementById("life").querySelector("img").remove();}
        setTimeout(()=>{audio1.pause();audio2.play()},200
        );
    }
    else{
    image1.setAttribute("id","knife2");
    points+=1;
}


    document.getElementById("life2").innerHTML="points:"+points;
    document.getElementById("maina").appendChild(image1);
    document.getElementById("knife").style.display="none";
    
    setTimeout(()=>{
        document.getElementById("knife").style.display="inline";
        if(num==1)
        image1.setAttribute("id","animate2");
        if(points==11)newknife(1);
if(points==24)newknife(2);
if(points==38)newknife(3);
if(points==53)newknife(4);
    },300);

}