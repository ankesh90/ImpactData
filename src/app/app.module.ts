import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';


@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,    RouterModule.forRoot([
     
      { path: 'timeline', component: TimelineComponent}
     
    ]),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
