import {
    Component,
    Input,
    OnInit,
    booleanAttribute,
    numberAttribute,
} from "@angular/core";

type Language = {
    language: string;
    description: string;
};

class LanguageSet {
    title: string = "";
    list: Language[] = [];
}

@Component({
    selector: "app-language",
    templateUrl: "./language.component.html",
    styleUrls: ["./language.component.scss"],
})
export class LanguageComponent implements OnInit {
    @Input({ required: true, transform: numberAttribute }) from: number = 0;
    @Input({ required: true, transform: numberAttribute }) to: number = 0;
    @Input({ required: true, transform: booleanAttribute }) showTitle: boolean =
        true;
    section: LanguageSet = new LanguageSet();

    ngOnInit(): void {
        fetch("../assets/language.json").then((data) => {
            data.json().then((response) => {
                this.section = response;
            });
        });
    }

    get languageList(): Language[] {
        return this.section.list.slice(
            this.from < 0 ? 0 : this.from - 1,
            this.to < 0 ? 0 : this.to
        );
    }
}
