import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HeadingComponent } from "./heading/heading.component";
import { CvComponent } from "./cv/cv.component";
import { ExperienceComponent } from "./experience/experience.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { TrainingComponent } from "./training/training.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
    declarations: [
        CvComponent,
        HeadingComponent,
        ExperienceComponent,
        PortfolioComponent,
        TrainingComponent,
        FooterComponent,
    ],
    imports: [BrowserModule, NgbModule],
    providers: [],
    bootstrap: [CvComponent],
})
export class AppModule {}
