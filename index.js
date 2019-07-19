// var katzDeliLine = []

var some_obscure_line = ["a", "b"]
var some_wierd_name = "c"

function pushNameIntoLine(line, name) {
    line.push(name)
}

pushNameIntoLine(some_obscure_line, some_wierd_name)

var anotherLIne = []

pushNameIntoLine(anotherLIne, some_wierd_name)

// This function should take the line, and the name
// of a person in line, and tell them what position
// they are in line.
// takes two parameters
// - parameter line: an array of names, describing the current line
// - parameter name: the person to join the line
function takeANumber(line, name) {
  // var katzDeliLine = ["Ada", "Grace"]
  // what's in the line?

  // put them in line
  line.push(name)

  // their number is the number of people in line + 1
  var number = line.length

  return `Welcome, ${name}. You are number ${number} in line.`

}
