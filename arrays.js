var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element)
{
  var array1 = [element, ...array];
  return array1;
  
}
function destructivelyAddElementToBeginningOfArray(array, element)
{
  array.unshift(element);
  return(array);
}
function addElementToEndOfArray(a, element)
{
  var array1 = [...a, element];
  return(array1);
}
function destructivelyAddElementToEndOfArray(a, element)
{
  a.push(element);
  return(a);
}
function accessElementInArray(a, index)
{
  return(a[index]);
}
function destructivelyRemoveElementFromBeginningOfArray(array)
{
  array.shift();
  return array;
}




