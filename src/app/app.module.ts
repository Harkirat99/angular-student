import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateStudentComponent } from './students-crud/create-students/create-student.component';
import { StudentComponent } from './students-crud/student/student.component';
import { StudentsComponent } from './students-crud/students/students.component';
import { StudentsService } from './students-crud/students.service';
import { ClassComponent } from './classes-crud/class/class.component';
import { ClassesComponent } from './classes-crud/classes/classes.component';
import { CreateClassComponent } from './classes-crud/create-class/create-class.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { TeacherComponent } from './teacher-crud/teacher/teacher.component';
import { TeachersComponent } from './teacher-crud/teachers/teachers.component';
import { CreateTeacherComponent } from './teacher-crud/create-teacher/create-teacher.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthserviceService } from './authservice.service';
import { AuthGuard } from './auth.guard'

@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    StudentComponent,
    StudentsComponent,
    ClassComponent,
    ClassesComponent,
    CreateClassComponent,
    TeacherComponent,
    TeachersComponent,
    CreateTeacherComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatToolbarModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [StudentsService, AuthserviceService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
