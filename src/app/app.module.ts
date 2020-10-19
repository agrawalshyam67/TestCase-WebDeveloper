import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { DemoMaterialModule } from 'src/app/material-module';

// Components
import { SearchPageComponent } from './components/search-page/search-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';

// Chart.js
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    UserPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    DemoMaterialModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
