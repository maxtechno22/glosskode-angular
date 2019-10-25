import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { ServicesComponent } from './services/services.component';
import { ProjectComponent } from './project/project.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { ServiceArticlesComponent } from './service-articles/service-articles.component';


const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent },
  {path: 'About', component: AboutComponent},
  {path: 'Services', component: ServicesComponent},
  {path: 'Projects', component: ProjectComponent},
  {path: 'Team', component: TeamComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'Article/:id', component: ArticleComponent},
  {path: 'ServiceArticle/:id', component: ServiceArticlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
