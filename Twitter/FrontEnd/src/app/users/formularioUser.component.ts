import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-formularioUser',
  templateUrl: './formularioUser.component.html'
})

export class FormularioUserComponent implements OnInit {

  user: User = new User();
  titulo: string = "Usuario";

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarUser()
  }

  cargarUser(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['idUser']
      if (id) {
        this.userService.getUser(id).subscribe((user) => this.user = user)
      }
    })
  }

  crear(): void {
    this.userService.postUser(this.user)
      .subscribe(user => {
        this.router.navigate(['/users'])
        swal.fire('Nuevo Usuario', `Usuario ${user.username} creado con exito`, 'success');
      }
      )
  }

  modificar(): void {
    this.userService.putUser(this.user)
      .subscribe(user => {
        this.router.navigate(['/users'])
        swal.fire('Usuario Actualizado', `Usuario ${user.username} creado con exito`, 'success');
      }
      )
  }

}
