function Random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log (Random(0, 11));

// function Check(lineCheck, maxLength) {
//   if (lineCheck == maxLength)  {return Check(10, 11)} true else {} false;
//   console.log (Check)
//   // return Check(10, 11);
// }
function Check(lineCheck, maxLength) {
  if (lineCheck <= maxLength)  {return true;}
  else {return false;}

}
Check(141, 140);
