import {Home, User, NotFound, UserChildren, Detail} from "./index";
import VueRouter from "vue-router";

const routes = [
    {path: "", component: Home, name: "home"},
    {
        path: "/user",
        component: User,
        name: "user",
        children: [
            {path: ":user", component: UserChildren, name: "userchildren"},
        ],
    },
    {path: "/:pokemon", component: Detail, name: "detail"},
    {path: "/user/:user/*", redirect: {name: "userchildren"}},
    {path: "/redirect-me", redirect: "/"},
    {path: "*", component: NotFound},
];

const router = new VueRouter({
    mode: "history",
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            console.log("savedPosition : ", savedPosition);
            return savedPosition;
        }
        if (to.hash) {
            console.log("to.hash : ", to.hash);
            return {selector: to.hash};
        }
        console.log("x: 0, y: 0");
        return {x: 0, y: 0};
    },
});

export default router;
