import { Component, OnInit } from "@angular/core";
import { Heading, HeadingService } from "./heading.service";

@Component({
    selector: "app-heading",
    templateUrl: "./heading.component.html",
    styleUrls: ["./heading.component.scss"],
})
export class HeadingComponent {
    constructor(private service: HeadingService) {}

    get section(): Heading {
        return this.service.section;
    }
}
