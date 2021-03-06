export interface Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    infoHtml(): string;
}
