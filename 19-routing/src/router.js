import { createRouter, createWebHistory } from 'vue-router';


import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamFooter.vue';
import UserFooter from './components/users/UsersFooter.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        {
            name: 'teams',
            path: '/teams', components: { default: TeamsList, footer: TeamsFooter },
            children: [
                { name: 'team-members', path: ':teamId', component: TeamMembers, props: true }
            ]
        },
        { path: '/users', components: { default: UsersList, footer: UserFooter } },
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPostion) {
        console.log(to, from, savedPostion)
        if (savedPostion) {
            return savedPostion;
        }
        return { left: 0, top: 0 }
    }
})

export default router;