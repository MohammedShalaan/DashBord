
//==============================================================
//---------------------- CH08_ BOM ( Browser Object Model )------------------
//==============================================================

//--------------------lec2-(Window object)-----------------
// window.open()

var win1;
// var lol;
// function  opennewWindow(){
//    win= window.open("two.html","","width=100 , height=100");
//    lol="shak"
// }

// console.log(lol)

// function  closeWindow1(){
// //    win.close();
//   win.close();  

//  }

//  var newWindow;  
  
function opennewWindow() {  
    win1 = window.open("", "myWindow", "width=200,height=100");  
  // newWindow.document.write("<p>It is my 'newWindow'</p>");  
}  
  
function closeWindow() {  
    win1.close();  
}  