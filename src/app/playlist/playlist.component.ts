import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { Playlist } from '../models/playlist.model';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  playlists!: Playlist[];

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.playlists = this.spotifyService.getPlaylists();
  }

}
