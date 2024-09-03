// //import { bootstrapApplication } from '@angular/platform-browser';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { RootModule } from './root.module';

// // bootstrapApplication(RootComponent, appConfig)
// //   .catch((err) => console.error(err));
// const bootstrap = () => {
//   return platformBrowserDynamic().bootstrapModule(RootModule, {
//       ngZone: 'noop'
//   });
// };

// export default bootstrap;

// import { bootstrapApplication } from '@angular/platform-browser';
// // import { RootComponent } from './root.component';
// import { appConfig } from './app/app.config';
// import { RootModule } from './root.module';
// const bootstrap = () => {
//   return bootstrapApplication(RootModule, appConfig);
// };

// export default bootstrap;
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RootModule } from './root.module';

const bootstrap = () => {
  return platformBrowserDynamic().bootstrapModule(RootModule);
};

bootstrap();


