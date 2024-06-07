import 'zone.js/plugins/zone-error';

import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './body/header/header.component';
import { FooterComponent } from './body/footer/footer.component';
import { BodyComponent } from './body/body.component';

import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FormsModule } from '@angular/forms';
import { DialogErrorComponent } from './body/dialog-error/dialog-error.component';
import { MessagesModule } from 'primeng/messages';
import { DialogSucessComponent } from './body/dialog-sucess/dialog-sucess.component';
import { HomeComponent } from './inaccount-page/home/home.component';
import { FooterSecondComponent } from './inaccount-page/home/footer-second/footer-second.component';
import { HeaderSecondComponent } from './inaccount-page/home/header-second/header-second.component';
import { HomepageComponentComponent } from './homepage-component/homepage-component.component';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselComponent } from './homepage-component/carousel/carousel.component';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { RegisterComponent } from './body/register/register.component';
import { DialogNextComponent } from './body/dialog-next/dialog-next.component';
import { OfComponentComponent } from './of-component/of-component.component';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    DialogErrorComponent,
    DialogSucessComponent,
    HomeComponent,
    FooterSecondComponent,
    HeaderSecondComponent,
    HomepageComponentComponent,
    CarouselComponent,
    RegisterComponent,
    DialogNextComponent,
    OfComponentComponent,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    ButtonModule,
    InputTextareaModule,
    ReactiveFormsModule,
    CardModule,
    DialogModule,
    FormsModule,
    DynamicDialogModule,
    MessagesModule,
    GalleriaModule,
    ToolbarModule,
    AvatarModule,
    AvatarGroupModule,
    InputTextModule,
    FloatLabelModule,
    HttpClientModule
  
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
