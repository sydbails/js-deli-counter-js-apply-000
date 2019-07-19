

function doSomething(array) {
  var string = "hello"
  if (array.length === 0) {
    string = "I'm empty"
  }

  for (var i = 0; i < array.length; i++) {
    var item = array[i]
  }

  return string
}

doSomething([]) // "I'M empty"

doSomething([1,2,4]) // "1,2,4"