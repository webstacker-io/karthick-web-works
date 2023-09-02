import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiderbarComponent } from './common/components/siderbar/siderbar.component';
import { HomeComponent } from './pages/home/home.component';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoadingService } from './common/services/loader.service';
import { LoaderComponent } from './common/components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    SiderbarComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ResumeComponent,
    ContactComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgxTypedJsModule
  ],
  providers: [
    LoadingService
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

