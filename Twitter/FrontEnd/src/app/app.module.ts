import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './users/user.service';
import { FormularioUserComponent } from './users/formularioUser.component';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './posts/post.service';
import { FormularioPostComponent } from './posts/formularioPost.component';

const routes: Routes = [
  {path: '', redirectTo: '/users', pathMatch:'full'},
  {path: 'users', component: UsersComponent},
  {path: 'users/formulario', component: FormularioUserComponent},
  {path: 'users/formulario/:idUser', component: FormularioUserComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'posts/formulario', component: FormularioPostComponent},
  {path: 'posts/formulario/:idPost', component: FormularioPostComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    FormularioUserComponent,
    PostsComponent,
    FormularioPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService,PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
