import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Components
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ProductComponent } from './product/product.component';

const appRoutes: Routes = [
	{path:'', component: HomeComponent},
	{path:'home', component: HomeComponent},
	{path:'products', component: ProductComponent},
	{path:'**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
