//get references for text input and button fields
var fName = document.getElementById("fName")
var message = document.getElementById("message")
var submitBtn = document.getElementById("submitBtn")


//add click event listener, to get data when data is entered
submitBtn.addEventListener("click", function(){
    //store data in JavaScript object
    var data = {
        fName.value:message.value,
    }
})

import fs from 'fs'

const writeJsonToFile = (path, data) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf8')
    console.log('Data successfully saved to disk')
  } catch (error) {
    console.log('An error has occurred ', error)
  }
}

const data = {
  name: fName,
  message: message
}

writeJsonToFile('data.json', data)
