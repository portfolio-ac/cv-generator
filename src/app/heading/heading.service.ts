import { Injectable } from "@angular/core";

export type Language = {
    name: string;
    level: string;
};
export class Heading {
    fullname: string = "";
    occupation: string = "";
    address: string = "";
    nationality: string = "";
    birthdate: string = "";
    email: string = "";
    phone: string = "";
    weblink: string = "";
    language: Language[] = [];
    quality: string[] = [];
    headline: string[] = [];
}

@Injectable({
    providedIn: "root",
})
export class HeadingService {
    section: Heading = new Heading();

    constructor() {
        fetch("../assets/heading.json").then((data) => {
            data.json().then((response) => {
                this.section = response;
            });
        });
    }
}
