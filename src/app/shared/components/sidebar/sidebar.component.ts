import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private GifsService: GifsService){  }

  get tags() : string[] {
    return this.GifsService.tagsHistory;
  }

  searchTag2 (tag : string): void {
    this.GifsService.searchTag(tag)
  }
}
