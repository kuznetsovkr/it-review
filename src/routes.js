import {
    ADMIN_ROUTE,
    COURSE_ROUTE, EDIT_COURSES, EDIT_REVIEW, EDIT_SCHOOLS,
    HOME_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    REVIEWS_ROUTE
} from "./utils/consts";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Course from "./pages/Course";
import Reviews from "./pages/Reviews";
import Home from "./pages/Home";
import Edit_Courses from "./pages/Edit_Courses";
import Edit_Schools from "./pages/Edit_Schools";
import Edit_Review from "./pages/Edit_Review";

export const authRoutes =[
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }

]

export const publicRoutes = [

    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: COURSE_ROUTE + '/:id',
        Component: Course
    },
    {
        path: REVIEWS_ROUTE + '/:id',
        Component: Reviews
    },
    {
        path: EDIT_COURSES,
        Component: Edit_Courses
    },
    {
        path:EDIT_SCHOOLS,
        Component: Edit_Schools
    },
    {
        path:EDIT_REVIEW,
        Component: Edit_Review
    }

]
