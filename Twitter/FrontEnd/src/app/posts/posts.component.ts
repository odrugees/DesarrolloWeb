import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { PostService } from './post.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      posts => this.posts = posts
    );
  }
  delete(post: Post): void {
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Está seguto?',
      text: `¿Seguro que desea eliminar el post ${post.message}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.postService.deleteUser(post.idPost).subscribe(
          response => {
            this.posts = this.posts.filter(po => po !== post)
            swalWithBootstrapButtons.fire(
              'Post Eliminado!',
              `Post ${post.message} eliminado con exito.`,
              'success'
            )
          }
        )
      }
    })
  }
}
