const employees = [
    {
        "id": 1,
        "email": "john.smith@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare Sales Report",
                "taskDescription": "Create the monthly sales performance report.",
                "taskDate": "2026-07-20",
                "category": "Reporting"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Update CRM",
                "taskDescription": "Add new client information to the CRM.",
                "taskDate": "2026-07-15",
                "category": "Sales"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Client Meeting",
                "taskDescription": "Present the quarterly proposal to the client.",
                "taskDate": "2026-07-10",
                "category": "Meetings"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Follow Up Leads",
                "taskDescription": "Contact potential customers from last week's campaign.",
                "taskDate": "2026-07-22",
                "category": "Sales"
            }
        ]
    },
    {
        "id": 2,
        "email": "emma.johnson@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Design Homepage Banner",
                "taskDescription": "Create a new banner for the homepage.",
                "taskDate": "2026-07-19",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Logo Revision",
                "taskDescription": "Update logo colors based on client feedback.",
                "taskDate": "2026-07-13",
                "category": "Branding"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Social Media Graphics",
                "taskDescription": "Design Instagram promotional posts.",
                "taskDate": "2026-07-23",
                "category": "Marketing"
            }
        ]
    },
    {
        "id": 3,
        "email": "liam.williams@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Fix Login Bug",
                "taskDescription": "Resolve authentication issue on login page.",
                "taskDate": "2026-07-18",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "API Integration",
                "taskDescription": "Integrate payment gateway API.",
                "taskDate": "2026-07-12",
                "category": "Backend"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Write Unit Tests",
                "taskDescription": "Increase backend test coverage.",
                "taskDate": "2026-07-21",
                "category": "Testing"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Optimize Database",
                "taskDescription": "Reduce query execution time.",
                "taskDate": "2026-07-09",
                "category": "Database"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Code Review",
                "taskDescription": "Review pull requests from teammates.",
                "taskDate": "2026-07-24",
                "category": "Development"
            }
        ]
    },
    {
        "id": 4,
        "email": "olivia.brown@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Recruit Developer",
                "taskDescription": "Screen frontend developer candidates.",
                "taskDate": "2026-07-20",
                "category": "HR"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Employee Onboarding",
                "taskDescription": "Conduct onboarding session for new hires.",
                "taskDate": "2026-07-11",
                "category": "HR"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Policy Review",
                "taskDescription": "Review company leave policy.",
                "taskDate": "2026-07-25",
                "category": "Administration"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Training Session",
                "taskDescription": "Organize workplace safety training.",
                "taskDate": "2026-07-08",
                "category": "Training"
            }
        ]
    },
    {
        "id": 5,
        "email": "noah.davis@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Deploy Application",
                "taskDescription": "Deploy the latest build to production.",
                "taskDate": "2026-07-19",
                "category": "DevOps"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Server Backup",
                "taskDescription": "Perform weekly server backup.",
                "taskDate": "2026-07-14",
                "category": "Infrastructure"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Monitor Logs",
                "taskDescription": "Check application logs for errors.",
                "taskDate": "2026-07-21",
                "category": "Monitoring"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Configure CI/CD",
                "taskDescription": "Set up automated deployment pipeline.",
                "taskDate": "2026-07-10",
                "category": "Automation"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Security Audit",
                "taskDescription": "Review server security settings.",
                "taskDate": "2026-07-23",
                "category": "Security"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Update Docker Images",
                "taskDescription": "Pull and deploy latest Docker images.",
                "taskDate": "2026-07-16",
                "category": "Containers"
            }
        ]
    }
]

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
]

export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}
export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return {employees, admin};

}