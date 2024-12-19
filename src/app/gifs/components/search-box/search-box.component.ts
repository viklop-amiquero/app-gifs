import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
    selector: 'gifs-search-box',
    templateUrl: './search-box.component.html',
    styleUrl: './search-box.component.css'
})

export class SearchBoxComponent {

    @ViewChild('txtTagInput')
    // TagInput!: ElementRef<HTMLInputElement>
    tagInput!: ElementRef

    constructor(private _gifsService: GifsService) {

    }

    searchTag() {
        const newTag = this.tagInput.nativeElement.value
        this._gifsService.searchTag(newTag)
        this.tagInput.nativeElement.value = ''
        // console.log(newTag)
    }
}
