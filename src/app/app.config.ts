import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(ModalModule.forRoot()),
  ],
};
