function Assign() {
    /*
        (구조)분해 할당
        - 배열 분해 할당
        - 객체 분해 할당
    */

    // 1. 배열 분해 할당
    // ES5
    const points = [10, 20, 30];
    const x1 = points[0];
    const y1 = points[1];
    const z1 = points[2];

    // ES6
    const [x2, y2, z2] = points;
    console.log(x2, y2, z2);

    // 두번째 값 무시
    const [x3, ,z3] = points;
    console.log(x3,z3);

    // 첫번째 값만 넣기
    const [x4] = points;
    console.log(x4);

    // 배열보다 더 많은 변수가 있을 때 
    const [x5, , , ,n5] = points;
    console.log(x5, n5)

    // 2. 객체 분해 할당
    const car = { 
        model: 'k7',
        color: 'white',
        year: 2025
    }

    // ES5 분해 할당
    const model2 = car.model;
    const color2 = car.color;
    const year2 = car.year2;

    // ES6 분해 할당
    //const {model, color, year} = car; // 원래 있던 객체의 변수명과 똑같이 써주면 됨
    //console.log (model, color, year);

    const {year:y03, model:m03, color:c03} = car;
    console.log(y03, m03, c03);

    const {model, year} = car;
    console.log(model, year);

    const func1 = ({model, year}) => {
        console.log(model, year);
    }
    func1(car);

}

export default Assign;