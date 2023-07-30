import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { ManagersComponent } from './managers/managers.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'employees', pathMatch:'full'},
  { path: "employees", component: EmployeesComponent },
  {
    path: "managers",
    component: ManagersComponent,
    canActivate: [AuthGuard]
  },
  { path: "login", component: LoginComponent },
  {path:"register", component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
