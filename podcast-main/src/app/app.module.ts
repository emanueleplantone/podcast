import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { ListaComponent } from './Components/lista/lista.component';
import { PlayComponent } from './Components/play/play.component';
import { DefaultComponent } from './Components/default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    ListaComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
