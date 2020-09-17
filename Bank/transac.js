
 function action()  {
     var avbal=Number(document.getElementById("p1").innerHTML);
     var depbal=Number(document.getElementById("p2").innerHTML);
     var withbal=Number(document.getElementById("p3").innerHTML);
     var selc = document.getElementById("p4").value;
     var desc = document.getElementById("p5").value;
     var val = Number(document.getElementById("p6").value);
     var dep1 = document.getElementById("p7").innerHTML;
     var with1 = document.getElementById("p8").innerHTML;
     
     if(selc=="Deposit")
     {
         //Deposit operation should perform here
         if(val==0)
         {
             alert("The transaction is not possible");
             
         }
         else if(val<0)
         {
             alert("The ammount entered is incorrect");
         }
         else
         {
             avbal=val+avbal;
             document.getElementById("p1").innerHTML=avbal;
             
             depbal=depbal+val;
             document.getElementById("p2").innerHTML=depbal;
             
            var p0 = document.createElement("p");
            var textNode = document.createTextNode(new Date()+" "+desc+" "+" "+avbal)
                                            
            p0.appendChild(textNode)
             var element=document.getElementById("p10")
             element.appendChild(p0)
             
         }
             
         
          
         
     }
     else
     {
         //Withdrawl operation should perform here
         if(val==0)
             {
                 alert("The transaction is not possible");
             }
         else if(val<0)
             {
                 alert("Check the ammount entered once again.");
             }
         else
         {
             if(avbal<val){
                 alert("Incorrect ammount entered");
             }
             else{
                 avbal = avbal-val;
             document.getElementById("p1").innerHTML=avbal;
            
             withbal = val;
             document.getElementById("p3").innerHTML=withbal;
                 
            var p0 = document.createElement("p");
            var textNode = document.createTextNode(new Date()+" "+desc+" "+" "+withbal)
                                            
            p0.appendChild(textNode)
            var element=document.getElementById("p11")
            element.appendChild(p0)
             
                  
                 
                 
             }
            
        
         }
             
             
            
             
             
             
         }

     
     
     
 } 
    