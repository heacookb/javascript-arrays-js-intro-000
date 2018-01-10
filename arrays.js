var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element)
{
  [element, ...array];
  return array;
  
}
function destructivelyAddElementToBeginningOfArray(array, element)
{
  array.unshift(element);
  return(array);
}
function addElementToEndOfArray(a, element)
{
  [...a, element];
  return(a);
}
function destructivelyAddElementToBeginningOfArray(a, element)
{
  [...a, element];
  return(a);
}
function accessElementInArray(a, index)
{
  return(a[index]);
}


