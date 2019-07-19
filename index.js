// var katzDeliLine = []
// This function should take the line, and the name
// of a person in line, and tell them what position
// they are in line.
// takes two parameters
// - parameter line: an array of names, describing the current line
// - parameter name: the person to join the line
var katzDeliline =["Ada", "Grace"]
function takeANumber(line, name) {
  // var katzDeliLine = ["Ada", "Grace"]
  // what's in the line?

  // put them in line
  line.push(name)

  // their number is the number of people in line + 1
  var number = line.length

  return `Welcome, ${name}. You are number ${number} in line.`
}

// function nowServing (line){
//   if (line.length === 0) {
//     return "There is nobody waiting to be served"
//   } else {
//     return line.shift()
//   }
// }

function currentLine (line) {
  if (line.length === 0) {
      return "The line is currently empty."
  } else {
    // start your string

    // build your string:
    // for each thing in line , add a little bit to string

    // return your string
}

// returns
"The line is currently: [Object array]"
"The line is currently: ["Ada", "Grace"]"
