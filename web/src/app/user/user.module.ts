import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserlistComponent } from './userlist/userlist.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { UserAccessComponent } from './user-access/user-access.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [UserlistComponent, UserRoleComponent, UserAccessComponent, RegisterComponent, LoginComponent]
})
export class UserModule { }
