import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MessageComponent } from './message/message.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ProfileComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    {
        path:'home',
        component:AppComponent
    },
    {  
    	path:'profile',
    	component:ProfileComponent
    },
     {  
    	path:'message',
    	component:MessageComponent
    },
     {  
    	path:'gallery',
    	component:GalleryComponent
    }
    

    	])
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
