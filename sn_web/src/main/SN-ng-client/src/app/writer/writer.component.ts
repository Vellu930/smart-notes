import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CycleDays } from '../model/cycle';
import { Noteday } from '../model/noteday';
import { NotedayService } from '../service/noteday.service';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.scss']
})
export class WriterComponent implements OnInit {

  noteDay: Noteday;
  writeForm: FormGroup;
  days: number[];

  constructor(private noteService: NotedayService,
    private fb: FormBuilder,
    private dcalc: CycleDays) {
    this.noteDay = {
      'date': formatDate(new Date(), 'yyyy-MM-dd', 'en'), // default is today's date
      'cycleDay': 0,      // by service or manual
      'moonDay': 0,       // this will be calculated by moon service
      'mood': "",
      'note': ""
    }

    this.writeForm = this.fb.group({
      dateControl: [this.noteDay.date],
      dayControl: [this.noteDay.cycleDay],
      moodControl: [],
      noteControl: []
    })

    this.days = dcalc.getDays(30); // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34,35,36];
   }

  ngOnInit(): void {
    this.assignValuesToNote();
  }

  writeNote() {
    this.assignValuesToNote();
    this.noteService.writeNote(this.noteDay).subscribe();
  }

  private assignValuesToNote() {
    this.noteDay.date = this.writeForm.value.dateControl;
    this.noteDay.cycleDay = this.writeForm.value.dayControl;
    this.noteDay.mood = this.writeForm.value.moodControl;
    this.noteDay.note = this.writeForm.value.noteControl;

    console.log("Assigned values of form...")
    console.log(this.noteDay);
  }

}
