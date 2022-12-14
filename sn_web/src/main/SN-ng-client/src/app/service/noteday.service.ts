import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Noteday } from '../model/noteday';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';

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
    this.addNoteUrl = "http://localhost:8080/new-note";
    this.removeNoteUrl = "http://localhost:8080/note/remove";

   }

   getAllNotes(): Observable<Noteday[]> {
    return this.httpClient.get<Noteday[]>(this.notesUrl);
   }

   getNoteByDate(date: string): Observable<Noteday> {
    const url = `${this.noteUrl}?date=${date}`;
    return this.httpClient.get<Noteday>(url);
   }

   writeNote(note: Noteday) {
    let params = new HttpParams()
      .set('date', note.date)
      .set('cycle_day', note.cycleDay)
      .set('moon_day', 0)
      .set('mood', note.mood)
      .set('note', note.note);

    return this.httpClient.post<Noteday>(this.addNoteUrl, params);
   }

   removeNote(d: string) {
    const url = `${this.removeNoteUrl}?date=${d}`;
    return this.httpClient.delete<Noteday>(url);
   }

}
