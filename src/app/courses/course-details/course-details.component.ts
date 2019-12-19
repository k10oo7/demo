import { Component, OnInit } from '@angular/core';
import courses from '../../../assets/JSON/response.json';
import { Courses } from 'src/app/Types/courses.js';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  courseDetails: Courses[] = courses;
  constructor() { }

  ngOnInit() {
    console.log(this.courseDetails);
  }

}
