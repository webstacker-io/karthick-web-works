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
import { TimelineModule } from 'primeng/timeline';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { EducationComponent } from './pages/education/education.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ContentService } from './common/services/content.service';
import { AuthInterceptor } from './interceptors/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SiderbarComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ResumeComponent,
    ContactComponent,
    EducationComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgxTypedJsModule,
    TimelineModule,
    CardModule,
    TooltipModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    LoadingService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      deps: [ContentService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

export function appInitializer(contentService: ContentService): () => Promise<any> {
  return () => contentService.fetchData();
}

