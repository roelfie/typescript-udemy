const carMakers = ['Opel', 'Hyundai', 'Tesla'];
const carsByMake: string[][] = [['Manta'], ['IONIQ'], ['Model S', 'Model X']];
const otherArray: string[] = [];
const dates = [new Date(), new Date()];

// Compile error (inferred type of carMakers is string[])
//carMakers.push(100)

const arrayMultiTypes: (Date | string)[] = [new Date()];
arrayMultiTypes.push('2021-05-01');
arrayMultiTypes.push(new Date());
// Compile error
// arrayMultiTypes.push(123)
