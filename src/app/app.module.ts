import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { IntroComponent } from './intro/intro.component';
import { CtaComponent } from './cta/cta.component';
import { ProgressComponent } from './progress/progress.component';
import { NewProjectsComponent } from './new-projects/new-projects.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { PartnersComponent } from './partners/partners.component';
import { FeaturesComponent } from './features/features.component';
import { VideoComponent } from './video/video.component';
import { ServicesComponent } from './services/services.component';
import { CounterComponent } from './counter/counter.component';
import { ConfigService } from './config.service';
import { ArticleComponent } from './article/article.component';
import { PostComponent } from './post/post.component';
import { ProjectComponent } from './project/project.component';
import { ServiceArticlesComponent } from './service-articles/service-articles.component';
import { ServicePostComponent } from './service-post/service-post.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    IntroComponent,
    CtaComponent,
    ProgressComponent,
    NewProjectsComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
    TestimonialsComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    PartnersComponent,
    FeaturesComponent,
    VideoComponent,
    ServicesComponent,
    CounterComponent,
    ArticleComponent,
    PostComponent,
    ProjectComponent,
    ServiceArticlesComponent,
    ServicePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
