import {
    Component,
    Input,
    OnInit,
    booleanAttribute,
    numberAttribute,
} from "@angular/core";

type Experience = {
    title: string;
    subtitle: string;
    date: string;
    worktime: string;
    duration: string;
    employer: string;
    place1: string;
    place2: string;
    description: string[];
    technology: string[];
};

class ExperienceList {
    title: string = "";
    list: Experience[] = [];
}

@Component({
    selector: "app-experience",
    templateUrl: "./experience.component.html",
    styleUrls: ["./experience.component.scss"],
})
export class ExperienceComponent implements OnInit {
    @Input() file: string = "experience";
    @Input({ required: true, transform: numberAttribute }) from: number = 0;
    @Input({ required: true, transform: numberAttribute }) to: number = 0;
    @Input({ required: true, transform: booleanAttribute }) showTitle: boolean = true;
    section: ExperienceList = new ExperienceList();

    ngOnInit(): void {
        fetch("../assets/" + this.file + ".json").then((data) => {
            data.json().then((response) => {
                this.section = response;
            });
        });
    }

    get experienceList(): Experience[] {
        return this.section.list.slice(
            this.from < 0 ? 0 : this.from - 1,
            this.to < 0 ? 0 : this.to
        );
    }
}
