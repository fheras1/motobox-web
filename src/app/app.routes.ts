import { CanLeavePhoneCreateGuard } from './shared/guards/can-leave-phone-create.guard';
import { PhoneBaseComponent } from './components/phone/phone-base/phone-base.component';
import { PhoneCreateComponent } from './components/phone/phone-create/phone-create.component';
import { PhoneDetailsResolverGuard } from './shared/resolvers/phone-details-resolver.guard';
import { BoxDetailsResolverGuard } from './shared/resolvers/box-details-resolver.guard';
import { IsAuthenticatedGuard } from './shared/guards/is-authenticated.guard';
import { SignupComponent } from './components/misc/signup/signup.component';
import { LoginComponent } from './components/misc/login/login.component';
import { PhoneItemComponent } from './components/phone/phone-item/phone-item.component';
import { BoxItemComponent } from './components/boxes/box-item/box-item.component';
import { BoxesListComponent } from './components/boxes/boxes-list/boxes-list.component';
import { BoxesBaseComponent } from './components/boxes/boxes-base/boxes-base.component';
import { BoxesCreateComponent } from './components/boxes/boxes-create/boxes-create.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'boxes', pathMatch: 'full'},
    { path: 'boxes', canActivate: [IsAuthenticatedGuard], component: BoxesListComponent},
    {
        path: 'boxes',
        canActivate: [IsAuthenticatedGuard],
        component: BoxesBaseComponent,
        children: [
            {
                path: 'new',
                canActivate: [IsAuthenticatedGuard],
                canDeactivate: [CanLeavePhoneCreateGuard],
                component: BoxesCreateComponent
            },
            {
                path: ':id',
                canActivate: [IsAuthenticatedGuard],
                resolve: {
                    box: BoxDetailsResolverGuard
                },
                component: BoxesCreateComponent
            }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
];
