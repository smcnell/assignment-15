// GO!
var forEach = function(arr, func){
    for(var i = 0 ; i < arr.length; i++){
        func(arr[i], i, arr)
    }
}


var buttonEl= document.querySelector(".mybutton")

buttonEl.addEventListener("click", function(evt){
  var navEl= document.querySelector(".nav-menu")
  if (navEl.style.display !=="none"){
    navEl.style.display ="none"
  }else {
    navEl.style.display ="block"
  }

})



// TASK 2 -- Select an Icon

var allIcons=document.querySelectorAll(".wish-list div")
// console.log(allIcons)

forEach( allIcons, function( domElement, index, theArray){

  domElement.addEventListener("click", function(evt){
    // console.log(domElement.className)
    // console.log("Hey")

    var domElementOfEvent=evt.target;
    var currentTarget= evt.currentTarget;
    // console.log(currentTarget +"current")
    // console.log(domElementOfEvent + "target")


console.log(currentTarget.className)

  // var classNameEl= current.className

  if (currentTarget.className.indexOf("selected") >=0){
    // console.log("SELECTED")
    currentTarget.className="option"
  } else {currentTarget.className= "option" + " selected"}
})})





// var allIcons=document.querySelectorAll(".wish-list")
// // console.log(allIcons)
//
// forEach( allIcons, function( domElement, index, theArray){
//   domElement.addEventListener("click", function(evt){
//     // console.log("Hey")
//
//     var domElementOfEvent=evt.target;
//     var currentTarget= evt.currentTarget;
//     console.log(currentTarget +"current")
//     console.log(domElementOfEvent + "target")
//
//     var itemNameEl= currentTarget.querySelector(".option")
//     // console.log(itemNameEl)
//     if(itemNameEl.className.indexOf("selected")>=0){
//       itemNameEl.className="option"
//     }else {itemNameEl.className="option" + " selected"
//
//   }console.log(itemNameEl.className)
// }
// )
//
//
// })


// TASK 3 -- Increase

var allButtonsEl= document.querySelectorAll(".point")

forEach( allButtonsEl, function( DOMElement, index, theArray){
  DOMElement.addEventListener("click", function(evt){

    var eventTarget=evt.target;
    // console.log(eventTarget.innerHTML)
    var currentEventTarget= evt.currentTarget;

    // console.log(currentEventTarget +"current")
    // console.log(eventTarget + "target")

    var currentButton= currentEventTarget.querySelector(".point")
    var totalBar= document.querySelector(".total-points")


    if (eventTarget.innerHTML==="1"){
      totalBar.innerHTML= parseInt(totalBar.innerHTML)+ 1;
    } else if (eventTarget.innerHTML==="2"){
      totalBar.innerHTML= parseInt(totalBar.innerHTML)+ 2;
  }else if (eventTarget.innerHTML==="3"){
    totalBar.innerHTML= parseInt(totalBar.innerHTML)+ 3;
  }
}
)

  })




// TASK 4 -- Add Guest to List

var listEl= document.querySelectorAll(".answer-box")

forEach( listEl, function( arrayElement, index, theArray){
  arrayElement.addEventListener("click", function(evt){

    var targetEvent=evt.target;
    // var currentTargetEvent= evt.currentTarget;

    // console.log(currentTargetEvent +"current")
    // console.log(targetEvent+ "target")
    // console.log(targetEvent.innerHTML)

    var goodListEl= document.querySelector(".good-standing-list")
    var naughtyListEl= document.querySelector(".probation-list")

    // console.log(targetEvent.className)
    if (targetEvent.className.indexOf("listy-eyed")>=0){
      goodListEl.removeChild(targetEvent)
      naughtyListEl.innerHTML+="<li class='bad'>"+ targetEvent.innerHTML + "</li>"

    } if (targetEvent.className.indexOf("bad")>=0){
      naughtyListEl.removeChild(targetEvent)
      goodListEl.innerHTML+="<li class='listy-eyed'>" + targetEvent.innerHTML + "</li>"
    }
      // console.log ("Not working sad")

  }
)})



// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
var colorBoxesEl= document.querySelectorAll(".palette span")
// console.log(colorBoxesEl)
var textboxEl= document.querySelector(".msg")
// console.log(textboxEl)

// console.log(textboxEl.className)




forEach( colorBoxesEl, function( oneBoxElement, index, theArray){
  oneBoxElement.addEventListener("click", function(evt){
    // console.log(oneBoxElement.className)

    var targetedEvent=evt.target;
    var currentEventTarget= evt.currentTarget;
    var style = window.getComputedStyle(oneBoxElement);
    // console.log(style)

      if (targetedEvent.className==="bg-yellow"){
      textboxEl.style.backgroundColor= "rgb(244, 208, 63)"
    } if (targetedEvent.className==="bg-orange"){
      textboxEl.style.backgroundColor="rgb(235, 151, 78)"
    } if (targetedEvent.className==="bg-red"){
    textboxEl.style.backgroundColor="rgb(224, 130, 131)"
    } if (targetedEvent.className==="bg-green"){
    textboxEl.style.backgroundColor="rgb(200, 247, 197)"
    } if (targetedEvent.className==="bg-purple"){
    textboxEl.style.backgroundColor="rgb(137, 196, 244)"
  }

}
)
})
