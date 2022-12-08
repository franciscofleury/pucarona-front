import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { LoginButtonComponent } from './login-button/login-button.component';
import { LoginBoxComponent } from './login-box/login-box.component';
import { LoginContainerComponent } from './login-container/login-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    LoginButtonComponent,
    LoginBoxComponent,
    LoginContainerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "home", component: HomePageComponent },
      { path: "login", component: LoginPageComponent },
      { path: "", redirectTo: "/home", pathMatch: "full" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
