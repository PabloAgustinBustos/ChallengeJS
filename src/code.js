export function firstSolution(numbers, result) {
  for (let i =  0; i < numbers.length-1; i++) {
    let a = numbers[i]
    
    for (let j = i+1; j < numbers.length; j++) {
      let b = numbers[j]
  
      if(a+b === result) return true
    }
  }
  
  return false
}


export function secondSolution(numbers, result) {
  // se guardan los números ya comprobados para ver si coinciden con el complemento de otro (El array no es una opción en esta solución)
  const cache = new Set()

  for (let number of numbers) {
    // se calcula el complemento. number + complement = result
    let complement = result - number
    
    // si el complemento es un número ya comprobado significa que se puede formar el result sumando dos elementos
    if (cache.has(complement)) return true

    // En caso de que no exista en el set, se añade.
    cache.add(number)
  }

  return false
}