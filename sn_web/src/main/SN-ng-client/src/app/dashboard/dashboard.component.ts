import { Component, OnInit } from '@angular/core';
import { Noteday } from '../model/noteday';
import { NotedayService } from '../service/noteday.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  notedays: Noteday[] = [];

  constructor(private noteService: NotedayService) { }

  ngOnInit(): void {
    this.noteService.getAllNotes().subscribe(n => this.notedays = n);
  }

}
