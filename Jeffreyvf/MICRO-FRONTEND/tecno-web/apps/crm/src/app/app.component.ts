import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TwButtonComponent } from '@tecno-web/tw-button';
import { TwWelcomeComponent } from '@tecno-web/tw-welcome';
import { AlbumService } from './service/album/album.service';

@Component({
  standalone: true,
  imports: [RouterModule, TwWelcomeComponent, TwButtonComponent, CommonModule],
  selector: 'tecno-web-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'crm';

  public albumArray: any;

  constructor(private albumService: AlbumService) {
    console.log('AppComponent constructor');
    this.getAlbumWebService();
  }

  public getAlbumWebService() {
    this.albumService.getAlbum()
    .subscribe((data) => {
      console.log(data);
      this.albumArray = data;
    });
  }


}
