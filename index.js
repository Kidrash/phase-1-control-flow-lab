// Write your code here!
  let freeSample ;
  let overCharge
  let noRide;

  function scuberGreetingForFeet(i){
  if (i <= 400){
    return ( freeSample = "This one is on me!")
  } if(i >=2500){
    return (noRide = "No can do.")
  } if(i >=2000 ){
    return (overCharge = "I will gladly take your thirty bucks.")
  }
  // console.log(( freeSample = "This one is on me!"))
  // console.log(overCharge = "I will gladly take your thirty bucks.")
  // console.log(noRide = "No can do.")  
}

function ternaryCheckCity(city){
  // Write your code here!
  let destination; 
  destination = city === 'NYC' ? ("Ok, sounds good."):("No go.");
  return destination;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case tip === "generous":
      return "Thank you so much."
    case tip === "not so generous":
      return "Thank you."
    case tip === "thanks for everything":
      return "Bye."
  } 
} 