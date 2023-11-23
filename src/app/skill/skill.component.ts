import {
    Component,
    Input,
    OnInit,
    booleanAttribute,
    numberAttribute,
} from "@angular/core";

type Skill = {
    title: string;
    description: string;
};

class SkillSet {
    title: string = "";
    list: Skill[] = [];
}

@Component({
    selector: "app-skill",
    templateUrl: "./skill.component.html",
    styleUrls: ["./skill.component.scss"],
})
export class SkillComponent implements OnInit {
    @Input({ required: true, transform: numberAttribute }) from: number = 0;
    @Input({ required: true, transform: numberAttribute }) to: number = 0;
    @Input({ required: true, transform: booleanAttribute }) showTitle: boolean =
        true;
    section: SkillSet = new SkillSet();

    ngOnInit(): void {
        fetch("../assets/skill.json").then((data) => {
            data.json().then((response) => {
                this.section = response;
            });
        });
    }

    get skillList(): Skill[] {
        return this.section.list.slice(
            this.from < 0 ? 0 : this.from - 1,
            this.to < 0 ? 0 : this.to
        );
    }
}
