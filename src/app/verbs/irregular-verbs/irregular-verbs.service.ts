import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';
import { Verbs } from '../verbs.interface';
import { ContentService } from '../../services/content.service';

@Injectable()
export class IrregularVerbsService {

  verbs: Subject<Verbs[]> = new Subject<Verbs[]>();
  
  constructor(private http: Http, private content: ContentService) {
    this.content['title'] = 'Irregular Verbs';
    this.loadIrregularVerbs();
  }

  public loadIrregularVerbs() {
    this.http.get("./assets/irregular-verbs.en.json")
      .map((data) => {
        return data.json()
      })
      .subscribe(data => {
        this.verbs.next(data);
      });
  }

}
