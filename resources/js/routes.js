/**
 * @type {import('vue-router').RouteRecordRaw[]}
 */
export default [
    {
        path: '/', component: () => import('./Layouts/Authenticated.vue'), children: [
            { path: '/posts', alias: '/', name: 'index', component: () => import('./Views/Post/Index.vue') },
            { path: '/posts/:id/comments', name: 'post.comments', component: () => import('@/Views/Post/Comments.vue') },
            { path: '/create', name: 'post.create', component: () => import('./Views/Post/Create.vue') },
            { path: '/@:username', name: 'user', component: () => import('./Views/Profile/Index.vue') },
            { path: '/@:username/posts', name: 'user.posts', component: () => import('./Views/Profile/Posts.vue') },
        ]
    },
    { path: '/login', name: 'login', component: () => import('./Views/Login.vue') },
    { path: '/register', name: 'register', component: () => import('./Views/Register.vue') },
]