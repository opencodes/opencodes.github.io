import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import { AppModule } from './main.module';

enableProdMode()
platformBrowserDynamic().bootstrapModule(AppModule);
