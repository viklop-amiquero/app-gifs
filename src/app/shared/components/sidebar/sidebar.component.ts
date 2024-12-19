import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
    selector: 'shared-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

    constructor(private _gifsService: GifsService) {

    }

    get tags() {
        // this.arrayHistory = this._gifsService.tagsHistory
        return this._gifsService.tagsHistory
    }
}
