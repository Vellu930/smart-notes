import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Days } from '../model/days';
import { NoteDay } from '../model/noteday';
import { NoteDayService } from '../service/noteday.service';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.scss']
})
export class WriterComponent implements OnInit {

  noteDay: NoteDay;
  writeForm: FormGroup;
  days: number[];

  constructor(private noteService: NoteDayService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dcalc: Days) {
    this.noteDay = {
      'date': formatDate(new Date(), 'yyyy-MM-dd', 'en'),
      'day': 0,
      'moonDay': 0,
      'mood': "",
      'note': ""
    }

    this.writeForm = this.fb.group({
      dateControl: [this.noteDay.date],
      dayControl: [this.noteDay.day],
      moonDayControl: [this.noteDay.moonDay],
      moodControl: [],
      noteControl: []
    })

    this.days = dcalc.getDays(37);
  }

  ngOnInit(): void {
    // need to set date value in the datepicker, the later method takes data values from there
    let dateSelectedOnDashboard = this.route.snapshot.params['date']
    if (dateSelectedOnDashboard != null) {
      this.date?.setValue(dateSelectedOnDashboard);
    }
    this.setValuesFromExistingNote();
  }

  /**
   * when date changes, save current notes before opening other
   * @param $event
   */
  onDateChange($event: Event) {
    console.log("changing date! " + this.writeForm.value.dateControl);
    // save note with previously saved date before opening different note
    if (this.day?.dirty || this.moonDay?.dirty || this.mood?.dirty || this.note?.dirty) {
      this.writeNote();
    }
    this.setValuesFromExistingNote();
  }

  private setValuesFromExistingNote() {
    // check if the note for date already exists
    this.setDate();
    this.noteService.getNoteByDate(this.noteDay.date).subscribe(n => {
      if (n != null) {
        console.log("Found noteday from ws.");
        console.log(n);
        this.day?.setValue(n.day);
        this.moonDay?.setValue(n.moonDay);
        this.mood?.setValue(n.mood);
        this.note?.setValue(n.note);
      } else {
        this.clearForm();
      }
      this.writeForm.markAsPristine();
    });
  }

  private clearForm() {
    this.day?.setValue(1);
    this.moonDay?.setValue(1);
    this.mood?.setValue('');
    this.note?.setValue('');
  }

  writeNote() {
    this.assignValuesToNote();
    this.noteService.writeNote(this.noteDay).subscribe();
    console.log("note saved.");
  }

  /**
   * assign form values to NoteDay, except date
   */
  private assignValuesToNote() {
    console.log("Setting note 1.");
    this.noteDay.day = this.writeForm.value.dayControl;
    this.noteDay.moonDay = this.writeForm.value.moonDayControl;
    this.noteDay.mood = this.writeForm.value.moodControl;
    this.noteDay.note = this.writeForm.value.noteControl;
  }

  /**
   * Set NoteDay date only when required.
   */
  private setDate() {
    console.log("Setting note date.");
    this.noteDay.date = this.writeForm.value.dateControl;
  }

  get date() {
    return this.writeForm.get('dateControl');
  }

  get day() {
    return this.writeForm.get('dayControl');
  }

  get moonDay() {
    return this.writeForm.get('moonDayControl');
  }

  get mood() {
    return this.writeForm.get('moodControl');
  }

  get note() {
    return this.writeForm.get('noteControl');
  }
}


