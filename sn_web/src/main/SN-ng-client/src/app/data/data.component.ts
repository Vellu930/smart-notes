import { Component, OnInit } from '@angular/core';
import { Noteday } from '../model/noteday';
import { NotedayService } from '../service/noteday.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  constructor(private noteService: NotedayService) { }

  ngOnInit(): void {
    this.noteService.getNoteByDate('2022-11-26').subscribe(n => {
      console.log(n);
    });
  }

}
