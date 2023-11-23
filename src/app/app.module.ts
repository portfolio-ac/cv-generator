import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HeadingComponent } from "./heading/heading.component";
import { CvComponent } from "./cv/cv.component";
import { ExperienceComponent } from "./experience/experience.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { TrainingComponent } from "./training/training.component";
import { FooterComponent } from "./footer/footer.component";
import { ActivityComponent } from "./activity/activity.component";
import { LanguageComponent } from './language/language.component';
import { SkillComponent } from './skill/skill.component';

@NgModule({
    declarations: [
        CvComponent,
        HeadingComponent,
        ExperienceComponent,
        PortfolioComponent,
        TrainingComponent,
        FooterComponent,
        ActivityComponent,
        LanguageComponent,
        SkillComponent,
    ],
    imports: [BrowserModule, NgbModule],
    providers: [],
    bootstrap: [CvComponent],
})
export class AppModule {}
