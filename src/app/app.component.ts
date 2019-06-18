import { Component, OnInit } from '@angular/core';
import { RuntimeConfigLoaderService } from 'runtime-config-loader';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';

  constructor(private _configSvc: RuntimeConfigLoaderService) {}

  ngOnInit() {
    const config = this._configSvc.getConfig();
    console.log('config: ', config);
    console.log('config: ', config);
  }
}
