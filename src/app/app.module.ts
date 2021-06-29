// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { AddStudentComponent } from './components/add-student/add-student.component';
// import { EditStudentComponent } from './components/edit-student/edit-student.component';
// import { StudentsListComponent } from './components/students-list/students-list.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     AddStudentComponent,
//     EditStudentComponent,
//     StudentsListComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

//--Setting up Routes to navigate between components.
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* Angular 8 components */
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { StudentsListComponent } from './components/students-list/students-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-student' },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: 'students-list', component: StudentsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

//export class AppRoutingModule { }
export class AppModule { }