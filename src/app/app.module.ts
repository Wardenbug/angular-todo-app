import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MATERIAL COMPONENS
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';

// COMPONENTS
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TodoListPageComponent } from './pages/todo-list-page/todo-list-page.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoItemFormComponent } from './components/todo-item-form/todo-item-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

// PIPES
import { LengthPipe } from './pipes/length.pipe';

// DIRECTIVES
import { CompleteDirective } from './directives/complete.directive';

// MODULES
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TodoListPageComponent,
    TodoItemComponent,
    TodoItemFormComponent,
    LoginPageComponent,
    LengthPipe,
    CompleteDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatListModule,
    MatInputModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
