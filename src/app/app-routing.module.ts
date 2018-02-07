import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';

const routes : Routes = [
	{ 
        path : '/home',
        component: HomeComponent
    },
	{ 
        path : '/aboutus',
        component: AboutUsComponent 
    }
];

	@NgModule({
		imports : [ RouterModule.forRoot(routes)],
		exports: [ RouterModule ]
	})

	export class AppRoutingModule {

	}