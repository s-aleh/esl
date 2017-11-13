import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'regular-verbs',
  templateUrl: './regular-verbs.component.html',
  styleUrls: ['./regular-verbs.component.css']
})
export class RegularVerbsComponent implements OnInit {

  constructor(private content: ContentService) {
    this.content['title'] = 'Regular Verbs';
  }

  ngOnInit() {
  }

}
