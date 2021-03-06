import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { EditUserDetailComponent } from './components/edit-user-detail/edit-user-detail.component';
import { EditMovieDetailComponent } from './components/edit-movie-detail/edit-movie-detail.component';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    MovieCardComponent,
    EditUserDetailComponent,
    EditMovieDetailComponent,
    HomeComponent,
    MovieListComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
