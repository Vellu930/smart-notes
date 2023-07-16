import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { NoteDay } from '../model/noteday';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteDayService {

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

   getAllNotes(): Observable<NoteDay[]> {
    return this.httpClient.get<NoteDay[]>(this.notesUrl);
   }

   getNoteByDate(date: string): Observable<NoteDay> {
    const url = `${this.noteUrl}?date=${date}`;
    return this.httpClient.get<NoteDay>(url);
   }

   writeNote(note: NoteDay) {
    let params = new HttpParams()
      .set('date', note.date)
      .set('day', note.day)
      .set('moon_day', note.moonDay)
      .set('mood', note.mood)
      .set('note', note.note);

    return this.httpClient.post<NoteDay>(this.addNoteUrl, params);
   }

   removeNote(d: string) {
    const url = `${this.removeNoteUrl}?date=${d}`;
    return this.httpClient.delete<NoteDay>(url);
   }

}
