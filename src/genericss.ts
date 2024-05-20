// type DataType= string | number ;

function fun<t>(arr:t[]){
    return arr[0]
}

const value = fun<(string)>(["aish"])
console.log(
    // typeof(value)
    value.toUpperCase()
);
