import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import courses from '../../../assets/JSON/response.json';
import { Courses } from 'src/app/Types/courses.js';
import { ColumnSortedEvent } from 'src/app/Shared/services/sort.service.js';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  courseDetails: Courses[] = courses;
  searchBy = 'provider';
  searchText = '';
  initialCourseDetails: Courses[];
  sortedColumn: ColumnSortedEvent;
  constructor() { }

  ngOnInit() {
    this.initialCourseDetails = _.cloneDeep(this.courseDetails);
    this.onSorted({sortColumn: 'length', sortDirection: 'asc'});
  }

  filterCources() {
    this.searchText = _.toLower(this.searchText);
    this.courseDetails = _.filter(this.initialCourseDetails, course => _.includes(_.toLower(course[this.searchBy]), this.searchText));
    this.sortColumn();
  }

  onSorted(event: ColumnSortedEvent) {
    this.sortedColumn = event;
    this.sortColumn();
  }

  private sortColumn() {
    if (_.size(this.sortedColumn)) {
      this.courseDetails = _.orderBy(this.courseDetails, this.sortedColumn.sortColumn, this.sortedColumn.sortDirection);
    }
  }

}
