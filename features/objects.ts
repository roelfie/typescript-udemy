const profile = {
    userName: 'alex',
    age: 20,
    location: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
};

// Destructuring of objects with TypeScript
const { age, userName }: { age: number; userName: string } = profile;
const {
    location: { lat, lng }
}: { location: { lat: number; lng: number } } = profile;
