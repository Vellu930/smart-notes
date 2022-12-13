import { Component, OnInit } from '@angular/core';
import { Noteday } from '../model/noteday';
import { NotedayService } from '../service/noteday.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notedays: Noteday[] = []

  constructor(private noteService: NotedayService) {
   }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes() {
    console.log("Getting notes from service...")
    this.noteService.getAllNotes().subscribe(n => this.notedays = n);
  }

}
