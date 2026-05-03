import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    {
        path: 'home', component: LayoutComponent,
        children: [

            {
                path: 'customer',
                component: CustomerComponent
            },

            {
                path:'product',
                component:ProductComponent
            }

        ]
    }

];

