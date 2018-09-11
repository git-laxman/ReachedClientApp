import { RouteInfo } from './sidebar.metadata';

// Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

    {
        path: '/admin/dashboard', title: 'DashBoard', icon: 'fa fa-area-chart', class: '',
        badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '', title: 'Staff', icon: 'fa fa-users', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [

            {
                path: '/admin/staff/Teacher', title: 'Teacher', icon: '', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: []
            }
        ]
    },

    {
        path: '', title: 'Timetable', icon: 'fa fa-calendar', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            {
                path: '/admin/timetable/class', title: 'Class', icon: '', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/admin/timetable/subject', title: 'Subject', icon: '', class: '', badge: '',
                badgeClass: '', isExternalLink: false, submenu: []
            },
           
            {
                path: '/admin/timetable/aot', title: 'Assign Teacher to Class', icon: '',
                class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },


        ]
    },
    {
        path: '', title: 'Student', icon: 'fa fa-graduation-cap', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            {
                path: '/admin/student/singlestudent', title: 'Single Students',
                icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/admin/student/multiplestudents', title: 'Multiple Students', icon: '',
                class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
        ]
    },
    {
        path: '', title: 'Attendance', icon: 'fa fa-check-square-o', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [

            {
                path: '/admin/attendancereports/dailyattendance', title: 'Daily Attendance', icon: '', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/admin/attendancereports/monthlyattendance', title: 'Monthly Attendance', icon: '', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/admin/attendancereports/viewattendance', title: 'View Attendance', icon: '', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
        ]
    },

    {
        path: '', title: 'Exams', icon: 'fa fa-file-text', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            {
                path: '/admin/exam/grade', title: 'Add Grade Pool', icon: '', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/admin/exam/addexam', title: 'Add Exam', icon: '', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/admin/exam/scheduleexam', title: 'Exam Schedule', icon: '', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/admin/exam/marks', title: 'Marks', icon: '', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/admin/exam/reports', title: 'Reports', icon: '', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
        ]
    },

    {
        path: '', title: 'Fee', icon: 'fa fa-inr', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [

            {
                path: '/admin/fee/addcourse', title: 'Add Course', icon: '', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/admin/fee/addfeeamount', title: 'Add Fee Amount', icon: '', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/admin/fee/concession', title: 'Concession', icon: '', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/admin/fee/installments', title: 'Installments', icon: '', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: []
            }
        ]
    },

    {
        path: '', title: 'Holiday', icon: 'fa fa-star', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [

            {
                path: '/admin/holiday/createholiday', title: 'Create Holiday', icon: '', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: []
            }
        ]
    },

    {
        path: '', title: 'Transportation', icon: 'fa fa-bus', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [

            {
                path: '/admin/transportation/adddriver', title: 'Add Driver', icon: '', class: '', badge: '',
                badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/admin/transportation/addroute', title: 'Add Route', icon: '', class: '', badge: '',
                badgeClass: '', isExternalLink: false, submenu: []
            }

        ]
    },

    {
        path: '', title: 'Promotions', icon: 'fa fa-podcast', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [

            {
                path: '/admin/promotions/raisequestion', title: 'Raise a Question', icon: '', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/admin/promotions/uploadpics', title: ' Upload Pics', icon: '', class: '',
                badge: '', badgeClass: '', isExternalLink: false, submenu: []
            }
        ]
    },

    {
        path: '/admin/communication', title: 'Communication', icon: 'ft-phone', class: '',
        badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    // {
    //     path: '/admin/maps', title: 'Google Map', icon: 'ft-phone', class: '',
    //     badge: '', badgeClass: '', isExternalLink: false, submenu: []
    // },
    {
        path: '', title: 'Expenditure', icon: 'fa fa-money', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            {
                path: '/admin/expenditure/addcategories', title: 'Add Categories',
                icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/admin/expenditure/newpayment', title: 'New Payment',
                icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/admin/expenditure/balancepayment', title: 'Balance Payment',
                icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
        ]
    },

    {
        path: '', title: 'Maps', icon: 'ft-map', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            {
                path: '/admin/maps/google', title: 'Google Map',
                icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/admin/maps/fullscreen', title: 'Full Screen Map',
                icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
        ]
    }

];
export const SUPERROUTES: RouteInfo[] = [

    {
        path: '', title: 'Schools', icon: 'ft-book', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            {
                path: '/superadmin/school/addschool', title: 'Add School',
                icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/superadmin/school/activeschools', title: 'Active Schools', icon: '',
                class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/superadmin/school/inactiveschools', title: 'Inactive Schools', icon: '',
                class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/superadmin/school/trailschools', title: 'Trail Schools', icon: '',
                class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
        ]
    },
    {
        path: '/superadmin/reachedadmins', title: 'Reached Admins', icon: 'ft-phone',
        class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },


];
export const APPLICATIONOWNERROUTES: RouteInfo[] = [

    {
        path: '', title: 'Schools', icon: 'ft-book', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            {
                path: '/applicationowneradmin/school/addschool', title: 'Add School',
                icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/applicationowneradmin/school/activeschools', title: 'Active Schools', icon: '',
                class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/applicationowneradmin/school/inactiveschools', title: 'Inactive Schools', icon: '',
                class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/applicationowneradmin/school/trailschools', title: 'Trail Schools', icon: '',
                class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
        ]
    },
    {
        path: '/applicationowneradmin/reachedadmins', title: 'Reached Admins', icon: 'ft-phone',
        class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },


];
