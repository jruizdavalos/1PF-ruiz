import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { PageWrapperComponent } from './shared/layout/page-wrapper/page-wrapper.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { MyMaterialModule } from './shared/modules/my-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentDialogComponent } from './shared/components/student-dialog/student-dialog.component';
import { SidenavComponent } from './shared/layout/sidenav/sidenav.component';
import { HomeComponent } from './shared/layout/home/home.component';
import { ContactoComponent } from './shared/layout/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageWrapperComponent,
    StudentsPageComponent,
    StudentDialogComponent,
    SidenavComponent,
    HomeComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    MyMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
