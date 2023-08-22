import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlbumModel } from '../models/album-model';
import { AlbumService } from '../Services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums!: AlbumModel[];

  constructor(private albumService: AlbumService) {

  }
  ngOnInit(): void {



    this.albumService.getAllAlbums()
      .subscribe(albums => this.albums = albums);

  }

}
