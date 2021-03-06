import { Component, OnInit } from '@angular/core';
import {Activity} from '../activity.model';
import {Contact} from '../../contacts/contact.model';
import {ActivityService} from '../activity.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  activities: Activity[];
  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.activityService.initActivities()
      .subscribe((activities: Contact[]) => {
        this.activities = Object.values(activities);
      });
  }

}
