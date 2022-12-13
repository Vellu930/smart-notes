import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Noteday } from '../model/noteday';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotedayService {

  private notesUrl: string;
  private noteUrl: string;
  private addNoteUrl: string;
  private removeNoteUrl: string;

  constructor(private httpClient: HttpClient) {
    this.notesUrl = "http://localhost:8080/notes";
    this.noteUrl = "http://localhost:8080/note";
    this.addNoteUrl = "http://localhost:8080/note/add";
    this.removeNoteUrl = "http://localhost:8080/note/remove";
   }

   getAllNotes(): Observable<Noteday[]> {
    return this.httpClient.get<Noteday[]>(this.notesUrl);
   }

   getNoteByDate(date: string) {
    let params = new HttpParams().set('date', 'date');
    return this.httpClient.get(this.noteUrl, {params});
   }


}
