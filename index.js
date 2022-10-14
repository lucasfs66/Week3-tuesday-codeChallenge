let array = [6, 4, 8, 2]




const best = arr => {
    let profit = 0
    let finalProfit = 0
    for (let i=1; i < arr.length; i++) {
      for (let k= 0; k < i;k++) {
       profit = arr[i] - arr[k]
        // if (arr[i] === Math.max(...arr) && arr[k] === Math.min) {
          
        //   finalProfit = profit
        // } else 
        if (profit > finalProfit) {
            

          finalProfit = profit
        }
      }
    }
    return finalProfit
  }
  
  console.log(best(array))