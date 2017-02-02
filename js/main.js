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

var allIcons=document.querySelectorAll(".wish-list")
// console.log(allIcons)

forEach( allIcons, function( domElement, index, theArray){
  domElement.addEventListener("click", function(evt){
    // console.log("Hey")

    var domElementOfEvent=evt.target;
    var currentTarget= evt.currentTarget;
    console.log(currentTarget +"current")
    console.log(domElementOfEvent + "target")

    var itemNameEl= currentTarget.querySelector(".option")
    // console.log(itemNameEl)
    if(itemNameEl.className.indexOf("selected")>=0){
      itemNameEl.className="option"
    }else {itemNameEl.className="option" + " selected"

  }console.log(itemNameEl.className)

  }
  )


})

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

// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
