// Question #45: Cars: Write a function that stores information about a car in a Object. The function should always 
// receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the
// function with the required information and two other name-value pairs, such as a color or an optional feature. Print
// the Object that’s returned to make sure all the information was stored correctly.
function car(manufacture, model, ...rest) {
    let car_Obj = {
        manufacture: manufacture,
        model: model,
        ...Object.assign({}, ...rest),
    };
    return car_Obj;
}
let car1 = car("Civics", 2022);
console.log(car1);
let car2 = car("Toyota land crusier", 2024, { color: "Silver pearl" }, { Optional_feature: ["Fuel_Tank_Capacity", "Seating Capacity"] });
console.log(car2);
export {};
