import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { initConfig, RuntimeConfigLoaderModule, RuntimeConfigLoaderService } from 'runtime-config-loader';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RuntimeConfigLoaderModule.forRoot({ fileUrl: './assets/config.json '}) ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [RuntimeConfigLoaderService],
      multi: true
    }
  ]
})
export class AppModule { }
