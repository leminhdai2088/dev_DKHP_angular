//import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RootModule } from './root.module';

// bootstrapApplication(RootComponent, appConfig)
//   .catch((err) => console.error(err));
const bootstrap = () => {
  return platformBrowserDynamic().bootstrapModule(RootModule, {
      ngZone: 'noop'
  });
};

bootstrap();