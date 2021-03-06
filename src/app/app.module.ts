import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { navRoute } from './router';
import { DataService } from './data.service';
import { HttpModule } from '@angular/http';
import { SocialLoginModule ,  AuthServiceConfig } from 'angularx-social-login';
import {GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { NgUploaderModule } from 'ngx-uploader';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { DaftarComponent } from './daftar/daftar.component';
import { BuatComponent } from './buat/buat.component';
import { BuatAdminComponent } from './buat-admin/buat-admin.component';
import { PortalComponent } from './portal/portal.component';
import { RuangComponent } from './ruang/ruang.component';
import { Profile } from 'selenium-webdriver/firefox';
import { PemilihanComponent } from './pemilihan/pemilihan.component';
import { HasilComponent } from './hasil/hasil.component';
import { AuthGuard, AuthGuardAdmin } from './auth-guard';
import { AuthServiceGuard } from './auth.service';
import { DashHomeComponent } from './dash-home/dash-home.component';
import { CalonComponent } from './calon/calon.component';
import { HasilruangComponent } from './hasilruang/hasilruang.component';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("419439473754-nrt5job6jbeirngd0g4mf4j3cfa5ojhe.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("382786512163998")
  }
])

export function provideConfig() {
  return config;
}

const routes: Routes = []
@NgModule({
  declarations: [
    AppComponent,
    PemilihanComponent,
    HasilComponent,
    DashboardComponent,NavigationComponent,MainComponent,LoginComponent,DaftarComponent,
    BuatComponent,BuatAdminComponent,PortalComponent,RuangComponent, DashHomeComponent, CalonComponent, HasilruangComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,HttpModule,
    RouterModule.forRoot(navRoute),
    SocialLoginModule,NgUploaderModule,
    CommonModule,ReactiveFormsModule
  ],
  providers: [
    {provide:DataService , useClass:DataService},AuthGuard,AuthServiceGuard,AuthGuardAdmin,
    {provide: AuthServiceConfig, useFactory: provideConfig},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
