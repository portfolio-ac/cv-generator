import {
    Component,
    Input,
    OnInit,
    booleanAttribute,
    numberAttribute,
} from "@angular/core";

type Activity = {
    title: string;
    date: string;
};

class ActivitySet {
    title: string = "";
    list: Activity[] = [];
}

@Component({
    selector: "app-activity",
    templateUrl: "./activity.component.html",
    styleUrls: ["./activity.component.scss"],
})
export class ActivityComponent implements OnInit {
    @Input({ required: true, transform: numberAttribute }) from: number = 0;
    @Input({ required: true, transform: numberAttribute }) to: number = 0;
    @Input({ required: true, transform: booleanAttribute }) showTitle: boolean =
        true;
    section: ActivitySet = new ActivitySet();

    ngOnInit(): void {
        fetch("../assets/activity.json").then((data) => {
            data.json().then((response) => {
                this.section = response;
            });
        });
    }

    get activityList(): Activity[] {
        return this.section.list.slice(
            this.from < 0 ? 0 : this.from - 1,
            this.to < 0 ? 0 : this.to
        );
    }
}
