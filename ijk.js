function login(attempts, correctPassword = "1234") {
  let result = "Account Locked";
  for (let attempt of attempts) {
    if (attempt === "") {
      continue;
    }
    if (attempt === correctPassword) {
      result = "Login Successful";
      break;
    }
  }
  return result;
}
console.log(login(["1111", "", "5678", "1234"]));

