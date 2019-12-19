export interface Courses {
  id: string;
  courseId: number;
  courseName: string;
  provider: string;
  universitiesOrInstitutions: string;
  parentSubject: string;
  childSubject: string;
  url: string;
  nextSessionDate: string;
  length: number;
  videoUrl: string;
}
