
var score = 0;
var mistake = 0;
// document.getElementById("score").innerText = score;

function normal() {
    document.getElementById('circle1').style.fill="blue"; 
    // document.getElementById('circle2').style.fill="blue"; 

}

function changeColor() {
    // var userClick = this.id;
    document.getElementById('circle1').style.fill="red"; 
    setTimeout(normal,1000);

    // if ( $(this).data('clicked') != "yes" ) { 
    //     $(this).data('clicked', "yes"); 
    //     score ++; 
    // else { 
    //     /* already clicked, do nothing */ }
    // }
    
}
// setTimeout(normal,1000);



  function startRandomizer(){

    window.setTimeout( function(){
  
        document.querySelector("circle").addEventListener("click", function() {
            // Check if undefined, if it is we set it to true, otherwise set it to the boolean opposite of whatever it's set to
            (this.clicked != undefined) ?
            this.clicked = !this.clicked : 
            this.clicked = true
            console.log(document.querySelector("circle").clicked);
            document.getElementById("circle1").innerText = document.querySelector("circle").clicked;
            // if(this.clicked = true){
            if (document.getElementById('circle1').style.fill==="red"){
            score ++; 
            document.getElementById("score").innerText = score;
            this.clicked = false; //reset the click
    
            }
            else {
                mistake ++;
            // document.getElementById("circle1").innerText = document.querySelector("circle").clicked;
            document.getElementById("mistake").innerText = mistake;
            // this.clicked = false; //reset the click
            }
    
        // }
        
      });
    //   window.alert("Hello World " + Math.random() * 1000);
      startRandomizer();
  
    }, Math.random() * 100 + 10); // From 10 to 110 secconds
  
  } 
  
  startRandomizer(); // Call it once, and it will do it forever...

// var button1 = document.getElementById("button1");
// button1.addEventListener("click", function() {
//   button1.dataset.clicked = "true";
// });

// document.getElementById("button2").addEventListener("click", function() {
//     console.log(button1.dataset.clicked ? "Yes" : "No");
//   });