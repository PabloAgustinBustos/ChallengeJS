export function firstSolution(numbers, result) {
  for (let i =  0; i < numbers.length-1; i++)  {
    let a = numbers[i]
    
    for (let j = i+1; j < numbers.length; j++)  {
      let b = numbers[j]
  
      if(a+b === result)  return  true
    }
  }
  
  return false
}


export function secondSolution(numbers, result) {
  
}