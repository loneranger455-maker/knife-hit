
function main(){
    let image1=document.createElement("img");
    image1.src="knife2.png";
    image1.setAttribute("id","knife2");
    document.getElementById("maina").appendChild(image1);
    document.getElementById("knife").style.display="none";
    let diemension=new Array
       var app=document.querySelectorAll("#animate2");
       for(i=0;i<app.length;i++){
           
           let newone=app[i].getBoundingClientRect();
           let angel=[Math.ceil(newone.x),Math.ceil(newone.y)];
           diemension.push(angel)
       }
       console.log(diemension);
    setTimeout(()=>{
        document.getElementById("knife").style.display="inline";
        image1.setAttribute("id","animate2");
        //var app=document.getElementsByTagName("img");
        //let str=[];
        //for (i=0;i<app.length;i++){
           // str.push(app[i]);
        //}
        
    },280);
    

    
}