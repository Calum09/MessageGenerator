
// Randomly choose a number 
function generateNumber(num) {
    return Math.floor(Math.random() * num);
}

// The message shall be generated from this dictionary.
const sagelyAdvice = {
    sign: ['Moon', 'Sun', 'Shooting Star', 'Comet'],
    luck: ['Cataclysmic Luck', 'Awful Luck', 'Ok Luck', 'Great Luck', 'Excellent Luck'],
    advice: ['Trust no one', 'Go on an adventure', 'Do not go outside', 'Danger is close', ' You will become rich'] 
}

// Storing the advice generated in this new array.
let advice = [];


// Iterate over the objects.
for(let prop in sagelyAdvice) {

    let randomIndex = generateNumber(sagelyAdvice[prop].length) // grab a random index with the dictionary and store it in randomIndex
  
    // use the object's properties to customize the message being added to advice.
    switch(prop) {
      case 'sign':
        advice.push(`Your sign right now is a "${sagelyAdvice[prop][randomIndex]}".`)
        break
      case 'luck':
        advice.push(`You are having: "${sagelyAdvice[prop][randomIndex]}".`)
        break
      case 'advice':
        advice.push(`You should: "${sagelyAdvice[prop][randomIndex]}".`)
        break
      default:
        advice.push('There is not enough info.')
    }
  }
  
  function formatMessage(message) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = advice.join('\n')
    console.log(formatted)
  }
  
  formatMessage(advice);
