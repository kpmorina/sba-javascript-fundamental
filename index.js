// The provided course information.
const CourseInfo = {
  id: 307,
  name: "Introduction to HTML",
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of HTML",
  course_id: 307,
  group_weight: 15,
  assignments: [
    {
      id: 1,
      name: "Fundamentals of HTML",
      due_at: "09-17-2024",
      points_possible: 250,
    },
    {
      id: 2,
      name: "Landing Page Wireframe",
      due_at: "09-11-2024",
      points_possible: 100,
    },
    {
      id: 3,
      name: "Admin and User Page",
      due_at: "09-11-2024",
      points_possible: 100,
    },
  ],
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 307,
    assignment_id: 1,
    submission: {
      submitted_at: "09-17-2024",
      score: 170,
    },
  },
  {
    learner_id: 307,
    assignment_id: 2,
    submission: {
      submitted_at: "09-11-2024 ",
      score: 100,
    },
  },
  {
    learner_id: 307,
    assignment_id: 3,
    submission: {
      submitted_at: "09-11-2024",
      score: 100,
    },
  },
  {
    learner_id: 145,
    assignment_id: 1,
    submission: {
      submitted_at: "09-15-2024",
      score: 75,
    },
  },
  {
    learner_id: 145,
    assignment_id: 2,
    submission: {
      submitted_at: "09-13-2024",
      score: 100,
    },
  },
];

function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
  const result = [
    {
      id: 307,
      avg: 0.985, // (75 + 170) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0, // 150 / 150
      }
    ]
  }
  
  