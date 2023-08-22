import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../Services/album.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumModel } from '../models/album-model';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  currentAlbum!: AlbumModel | null;

  constructor(private albumService: AlbumService, private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit(): void {


    this.route.paramMap.subscribe(params => {

      var id = Number(params.get('id'));

      this.albumService.getAlbumById(id).subscribe({

        next: (album) => { this.currentAlbum = album },
        error: (ex) => {

          this.router.navigate(['/home']);

        }

      });

    });

  }





}
