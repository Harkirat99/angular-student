import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClassComponent } from './classes-crud/class/class.component';
import { ClassesComponent } from './classes-crud/classes/classes.component';
import { CreateClassComponent } from './classes-crud/create-class/create-class.component';
import { CreateTeacherComponent } from './teacher-crud/create-teacher/create-teacher.component';
import { CreateStudentComponent } from './students-crud/create-students/create-student.component';
import { StudentComponent } from './students-crud/student/student.component';
import { StudentsComponent } from './students-crud/students/students.component';
import { TeacherComponent } from './teacher-crud/teacher/teacher.component';
import { TeachersComponent } from './teacher-crud/teachers/teachers.component';
import { LoginComponent } from './login/login.component';
import { AuthserviceService } from './authservice.service';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },


  {
    path: 'students', component: StudentsComponent, canActivate: [AuthGuard]
  },
  { path: 'students/new', component: CreateStudentComponent, canActivate: [AuthGuard] },
  { path: 'students/:id', component: StudentComponent, canActivate: [AuthGuard] },

  { path: 'classes', component: ClassesComponent, canActivate: [AuthGuard] },
  { path: 'classes/new', component: CreateClassComponent, canActivate: [AuthGuard] },
  { path: 'classes/:id', component: ClassComponent, canActivate: [AuthGuard] },

  { path: 'teachers', component: TeachersComponent, canActivate: [AuthGuard] },
  { path: 'teachers/new', component: CreateTeacherComponent, canActivate: [AuthGuard] },
  { path: 'teachers/:id', component: TeacherComponent, canActivate: [AuthGuard] },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
