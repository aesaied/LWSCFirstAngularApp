import { Component, Inject, Input, OnInit, inject } from '@angular/core';
import { IUserService } from '../Services/iuser.service';
import { UserService } from '../Services/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css'],
  providers: [{ provide: IUserService, useClass: UserService }]
})
export class PipesDemoComponent implements OnInit {


  //private route = inject(ActivatedRoute);
  @Input() id = '';
  bDate = new Date();

  cDate!: Date;

  myURL!: string;


  constructor(@Inject('API_URL') apiURL: string, private userService: IUserService, @Inject('USERSERVICE') userService2: IUserService, private route: ActivatedRoute, private router: Router) {
    this.cDate = userService.getCreationDate();

    this.myURL = apiURL;


  }


  onClick() {

    // Do some actions before navigation (i.e save data , delete data , ...etc)
    this.router.navigate(['./tasks', { x: 10, y: 30 }]);
  }
  ngOnInit(): void {



    alert('OnInit');
    this.route.paramMap.subscribe(s => {
      alert('from subscribe');
      alert(s.get('id'));

    },

      null, () => alert('Complete!'));
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      alert(id);
    }

    alert(this.id);
  }
}
