import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', ]
})

export class AppComponent implements OnInit {
  new_note = { note: '' };
  all_notes = [];
  error = '';
  public constructor(private titleService: Title, private _httpService: HttpService) {}

  ngOnInit() {
    this.error = '';
    this.getNotesFromService();
    this.titleService.setTitle('Anonymous Notes');
  }
  getNotesFromService() {
    const observable = this._httpService.getNotes();
    observable.subscribe((data: any) => {
      console.log('Got all notes.', data);
      this.all_notes = data.data;
    });
  }
  addNoteFromService() {
    const observable = this._httpService.addNote(this.new_note);
    observable.subscribe((data: any) => {
      if (data.error) {
        console.log('Errors occured', data);
        this.new_note.note = '';
        this.error = data.error.errors.note.message;
      } else {
        console.log('Added a note.', data);
        this.getNotesFromService();
        this.error = '';
      }
    });
  }
}
