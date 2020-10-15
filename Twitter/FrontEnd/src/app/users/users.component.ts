import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      users => this.users = users
    );
  }

  delete(user: User): void {
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Está seguto?',
      text: `¿Seguro que desea eliminar al usuario ${user.username}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(user.idUser).subscribe(
          response => {
            this.users = this.users.filter(us => us !== user)
            swalWithBootstrapButtons.fire(
              'Usuario Eliminado!',
              `Usuario ${user.username} eliminado con exito.`,
              'success'
            )
          }
        )
      }
    })
  }

}
