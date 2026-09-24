function findNumbers(numbers, targets){
    for (let num of numbers){
        if (num<0){
            continue;
        }
        if (num===targets){
            return "found";
        }
    }
    return "not found";
}
console.log(findNumbers([5,6,7,8,9],5));