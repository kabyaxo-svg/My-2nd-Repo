function checkEntry(age, hasID) {
  if (age >= 18) {
    if (hasID) {
      return "Allowed";
    } else {
      return "ID Required";
    }
  } else {
    return "Too Young";
  }
}
console.log(checkEntry(20, false));
