import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";

import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { AppRoutes } from './app-routing';

import { FooterModule } from './shared/footer/footer.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';  
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { environment } from '../environments/environment';
import { AppraisalComponent } from './appraisal/appraisal.component';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    RegisterComponent,
    AppraisalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    FooterModule,
    FixedPluginModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    }),
    MatDialogModule,
    NavbarModule,
    ToastrModule.forRoot(),
    SidebarModule
  ],
  providers: [{provide: 'apiUrl', useValue: environment.API_URL }],
  bootstrap: [AppComponent]
})
export class AppModule { }
