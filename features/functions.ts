// Type annotations for function return values

const add = (a: number, b: number): number => {
    return a + b;
};

function divide(a: number, b: number): number {
    return a / b;
}

const logger = (message: string): void => {
    console.log(message);
};

// Never returning function
const neverReturningFunction = (message: string): never => {
    throw new Error(message);
};

const sometimesReturningFunction = (message: string): void => {
    if (!message) {
        throw new Error(message);
    } else {
        console.log(message);
    }
};

// Example of function parameter destructuring
const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
};

const logWeatherDestructured = ({ date, weather }: { date: Date; weather: string }): void => {
    console.log(date);
    console.log(weather);
};

logWeather(todaysWeather);
logWeatherDestructured(todaysWeather);
