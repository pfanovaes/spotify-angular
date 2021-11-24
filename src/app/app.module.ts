import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistItemComponent } from './playlist/playlist-item/playlist-item.component';
import { PlaylistItemEditComponent } from './playlist/playlist-item/playlist-item-edit/playlist-item-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlaylistComponent,
    PlaylistItemComponent,
    PlaylistItemEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
