
const Employees = [
  {
    "Id": 454,
    "firstName": "Arjun",
    "email": "employee1@company.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Design Homepage UI",
        "taskDescription": "Create a modern landing page design using Figma.",
        "taskDate": "2026-03-15",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Fix Navigation Bug",
        "taskDescription": "Resolve the mobile menu toggle issue on Safari.",
        "taskDate": "2026-03-10",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Weekly Standup",
        "taskDescription": "Prepare slides for the Friday team meeting.",
        "taskDate": "2026-03-16",
        "category": "Meeting"
      }
    ]
  },
  {
    "Id": 342,
    "firstName": "Sneha",
    "email": "employee2@company.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Database Backup",
        "taskDescription": "Ensure complete backup of the production database.",
        "taskDate": "2026-03-14",
        "category": "DevOps"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "API Integration",
        "taskDescription": "Integrate third-party payment gateway.",
        "taskDate": "2026-03-12",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Code Review",
        "taskDescription": "Review pull requests from the junior dev team.",
        "taskDate": "2026-03-15",
        "category": "Development"
      }
    ]
  },
  {
    "Id": 334,
    "firstName": "Rohit",
    "email": "employee3@company.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Client Presentation",
        "taskDescription": "Deliver project demo to the stakeholders.",
        "taskDate": "2026-03-05",
        "category": "Management"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Update Documentation",
        "taskDescription": "Write API docs for the new user endpoints.",
        "taskDate": "2026-03-18",
        "category": "Documentation"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "New Hire Training",
        "taskDescription": "Conduct onboarding session for new interns.",
        "taskDate": "2026-03-20",
        "category": "HR"
      }
    ]
  },
  {
    "Id": 902,
    "firstName": "Priya",
    "email": "employee4@company.com",
    "password": "123",
    "taskNumbers": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Server Migration",
        "taskDescription": "Migrate legacy servers to AWS cloud.",
        "taskDate": "2026-03-11",
        "category": "DevOps"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Security Audit",
        "taskDescription": "Run vulnerability scans on the main web app.",
        "taskDate": "2026-03-17",
        "category": "Security"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Write Unit Tests",
        "taskDescription": "Increase code coverage to 80% for auth module.",
        "taskDate": "2026-03-08",
        "category": "Testing"
      }
    ]
  },
  {
    "Id": 573,
    "firstName": "Karan",
    "email": "employee5@company.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Q1 Marketing Strategy",
        "taskDescription": "Finalize budget and ad spend for Q1 campaigns.",
        "taskDate": "2026-03-15",
        "category": "Marketing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Content Creation",
        "taskDescription": "Draft 3 blog posts for the company website.",
        "taskDate": "2026-03-19",
        "category": "Content"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Social Media Update",
        "taskDescription": "Post weekly updates on LinkedIn and Twitter.",
        "taskDate": "2026-03-01",
        "category": "Marketing"
      }
    ]
  }
];

const Admin = [
  {
    "Id": 101,
    "firstName": "Vivek",
    "email": "admin@company.com",
    "password": "123"
  }
];

export const setLocalStorage = ()=>{
    localStorage.setItem('Employees', JSON.stringify(Employees))
    localStorage.setItem('Admin', JSON.stringify(Admin))
    return {Employees, Admin}
}
export const getLocalStorage = ()=>{
    const employeesData = JSON.parse(localStorage.getItem('Employees'))
    const adminData = JSON.parse(localStorage.getItem('Admin'))
    return {employeesData,adminData}
}