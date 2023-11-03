import { Component, Input } from "@angular/core";
import { HeadingService } from "../heading/heading.service";

@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
    @Input({ alias: "page-number", required: true }) page?: string;

    constructor(private service: HeadingService) {}

    get fullname(): string {
        return this.service.section.fullname;
    }
}
