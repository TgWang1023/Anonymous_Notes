import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }
  getNotes() {
    return this._http.get('/notes');
  }
  getSingleNote(id) {
    return this._http.get(`/notes/${id}`);
  }
  addNote(new_note) {
    return this._http.post('/notes', new_note);
  }
  editNote(id, updated_note) {
    return this._http.put(`/notes/${id}`, updated_note);
  }
  deleteNote(id) {
    return this._http.delete(`/notes/${id}`);
  }
}
