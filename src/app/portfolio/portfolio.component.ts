import { Component, Input, OnInit, booleanAttribute } from "@angular/core";

type Project = {
    title: string;
    subtitle: string;
    date: string;
    duration: string;
    context: string;
    place1: string;
    place2: string;
    description: string[];
    technology: string[];
};

class Portfolio {
    title: string = "";
    list: Project[] = [];
}

@Component({
    selector: "app-portfolio",
    templateUrl: "./portfolio.component.html",
    styleUrls: ["./portfolio.component.scss"],
})
export class PortfolioComponent implements OnInit {
    @Input({ required: true, transform: booleanAttribute }) showTitle: boolean =
        true;
    section: Portfolio = new Portfolio();

    ngOnInit(): void {
        fetch("../assets/portfolio.json").then((data) => {
            data.json().then((response) => {
                this.section = response;
            });
        });
    }
}
