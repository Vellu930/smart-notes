import { Component, OnInit } from '@angular/core';
import { NoteDay } from '../model/noteday';
import { NoteDayService } from '../service/noteday.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  constructor(private noteService: NoteDayService) { }

  ngOnInit(): void {
    this.noteService.getNoteByDate('2022-11-26').subscribe(n => {
      console.log(n);
    });
  }

}
