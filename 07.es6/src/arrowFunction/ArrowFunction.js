function ArrowFun() {
    const func1 = function(a, b){
        return a+b;
    }

    const func2 = (a,b) => {
        return a+b;
    }

    const func3 = (a,b) => {return a+b} 

    const func5 = function(num) {
        return function(value){
            return num + value;
        }
    }

    let func5Num = func5(5);
    let result = func5Num(7);
    console.log(`${result}`);

    let result2 = func5(10)(20);
    console.log(`${result2}`);

    const func6 = num => value => num + value;
    console.log(`${func6(20)(30)}`);
}

export default ArrowFun;