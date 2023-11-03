import {
    Component,
    Input,
    OnInit,
    booleanAttribute,
    numberAttribute,
} from "@angular/core";

type Training = {
    title: string;
    subtitle: string;
    date: string;
    duration: string;
    center: string;
    place1: string;
    place2: string;
    description: string[];
    technology: string[];
};

class TrainingSet {
    title: string = "";
    list: Training[] = [];
}

@Component({
    selector: "app-training",
    templateUrl: "./training.component.html",
    styleUrls: ["./training.component.scss"],
})
export class TrainingComponent implements OnInit {
    @Input({ required: true, transform: numberAttribute }) from: number = 0;
    @Input({ required: true, transform: numberAttribute }) to: number = 0;
    @Input({ required: true, transform: booleanAttribute }) showTitle: boolean =
        true;
    section: TrainingSet = new TrainingSet();

    ngOnInit(): void {
        fetch("../assets/training.json").then((data) => {
            data.json().then((response) => {
                this.section = response;
            });
        });
    }

    get trainingList(): Training[] {
        return this.section.list.slice(
            this.from < 0 ? 0 : this.from - 1,
            this.to < 0 ? 0 : this.to
        );
    }
}
