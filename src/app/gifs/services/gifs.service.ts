import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces'

@Injectable({
    providedIn: 'root'
})

export class GifsService {

    public gifList: Gif[] = []
    private _tagsHistory: string[] = []
    private _apiKey: string = 'KNWuFzmiwqJMKf7JAbkaeh3D5qHGWNYw'
    private _serviceUrl: string = 'https://api.giphy.com/v1/gifs'

    constructor(private _http: HttpClient) { }

    get tagsHistory() {
        return [...this._tagsHistory]
    }

    organizeHistory(tag: string) {
        tag = tag.toLowerCase()

        if (this._tagsHistory.includes(tag)) {
            this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
        }

        this._tagsHistory.unshift(tag)
        this._tagsHistory = this._tagsHistory.splice(0, 10)

    }

    async searchTag(tag: string): Promise<void> {
        if (tag.length === 0) return

        this.organizeHistory(tag)

        const params = new HttpParams()
            .set('api_key', this._apiKey)
            .set('limit', '10')
            .set('q', tag)

        this._http.get<SearchResponse>(`${this._serviceUrl}/search?`, { params })
            .subscribe(resp => {

                this.gifList = resp.data
                console.log(this.gifList);
                // console.log(resp.data);
            })



        // fetch('https://api.giphy.com/v1/gifs/search?api_key=KNWuFzmiwqJMKf7JAbkaeh3D5qHGWNYw&q=valorant&limit=10')
        //     .then(rsp => rsp.json())
        //     .then(data => console.log(data))

    }


}
