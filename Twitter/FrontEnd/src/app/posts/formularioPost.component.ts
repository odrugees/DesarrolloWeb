import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from './post';
import swal from 'sweetalert2';
import { User } from '../users/user';
import { UserService } from '../users/user.service'

@Component({
  selector: 'app-formularioPost',
  templateUrl: './formularioPost.component.html'
})
export class FormularioPostComponent implements OnInit {

  post: Post = new Post();
  users :User[];
  titulo: string = "Post";

  constructor(private postService: PostService, private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id =+params.get('idPost');
      if (id) {
        this.postService.getPost(id).subscribe((post) => this.post = post)
      }
    });
    this.userService.getUsers().subscribe(users => this.users = users)

  }

  cargarPost(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['idPost']
      if (id) {
        this.postService.getPost(id).subscribe((post) => this.post = post)
      }
    })
  }

  crear(): void {
    this.postService.postUser(this.post)
      .subscribe(post => {
        this.router.navigate(['/posts'])
        swal.fire('Nuevo Usuario', `Usuario ${post.message} creado con exito`, 'success');
      }
      )
  }

  modificar(): void {
    this.postService.putUser(this.post)
      .subscribe(post => {
        this.router.navigate(['/posts'])
        swal.fire('Usuario Actualizado', `Usuario ${post.message} creado con exito`, 'success');
      }
      )
  }

  compareUser(user1:User, user2:User): boolean{
    return user1 == null || user2 == null ? false : user1.idUser === user2.idUser;
  }
}
