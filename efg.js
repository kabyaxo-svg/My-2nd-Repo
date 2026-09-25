function checkPassword(passwords){
    let i = 0;
    do{
        if(passwords[i]==="1234"){
            return "Password Correct";
        }
        i++;
    }while(i < passwords.length);
    return "Password Failed";
}
console.log(checkPassword(["1111","5678"]));

