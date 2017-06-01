import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './pages/main/main.page';

export const appRoutes: Routes = [
  { path: '', component: MainPage },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
