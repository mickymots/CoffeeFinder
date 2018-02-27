import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import {TableModule} from 'primeng/table';

import { AppComponent } from './app.component';
import { AtmLocatorComponent } from './atm_locator/component/atm-locator.component';
import { AtmLocatorService } from './atm_locator/service/atm-locator.service';

@NgModule({
  declarations: [
    AppComponent,
    AtmLocatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // TableModule
  ],
  providers: [AtmLocatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
