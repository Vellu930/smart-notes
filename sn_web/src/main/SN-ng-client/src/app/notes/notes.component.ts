import { Component, OnInit } from '@angular/core';
import { NoteDay } from '../model/noteday';
import { NoteDayService } from '../service/noteday.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notedays: NoteDay[] = []

  constructor(private noteService: NoteDayService) {
   }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes() {
    this.noteService.getAllNotes().subscribe(n => this.notedays = n);
  }

}
