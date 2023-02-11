import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noteday } from '../model/noteday';
import { NotedayService } from '../service/noteday.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  notedays: Noteday[] = [];
  selectedNote: string = "";

  constructor(private noteService: NotedayService,
    private router: Router) { }

  ngOnInit(): void {
    this.noteService.getAllNotes().subscribe(n => {
      n.sort((a, b) => {
        return a.date < b.date ? 1 : -1;
      });
      this.notedays = n
    });
  }

  openNoteEditing(date: string) {
    this.router.navigate(["/newnote", {date : date}])
  }

  deleteNoteAction(d: string) {
    this.noteService.removeNote(d).subscribe((data) => {
      this.notedays = this.notedays.filter(n => n.date != d)
    });
  }

  onDeleteButton() {
    console.log("Deleting note with date: " + this.selectedNote);
    this.deleteNoteAction(this.selectedNote);
    this.selectedNote = this.notedays[0].date;
  }

}
