import { createRouter, createWebHistory } from "vue-router";
import { createRouterLayout } from "vue-router-layout";
import { useAuth } from "@/composables/useAuth";

import IndexPage from "@/pages/dashboard/IndexPage.vue";
import HomePage from "@/pages/HomePage.vue";
import LoginPage from "@/pages/auth/LoginPage.vue";
import RegisterPage from "@/pages/auth/RegisterPage.vue";

declare module "vue-router" {
	interface RouteMeta {
		requiresAuth?: boolean;
		guestOnly?: boolean;
	}
}

// Resolves a page's `layout: '...'` option (see src/layouts/*.vue) to the
// matching layout component. Pages that don't set `layout` get 'default'.
const RouterLayout = createRouterLayout(layout => import(`../layouts/${layout}.vue`));

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			component: RouterLayout,
			children: [
				{ path: "", name: "home", component: HomePage, meta: { title: "Vue Todo" } },
				{ path: "auth/login", name: "login", component: LoginPage, meta: { title: "Login", guestOnly: true } },
				{ path: "auth/register", name: "register", component: RegisterPage, meta: { title: "Registrierung", guestOnly: true } },
				{ path: "dashboard", name: "dashboard", component: IndexPage, meta: { title: "Dashboard", requiresAuth: true } }
			]
		}
	]
});

/*
 * The current user's session is only known after the first `fetchUser()`
 * call resolves, so the very first navigation waits for it before any
 * auth-gated redirect decisions are made. Subsequent navigations reuse the
 * already-resolved `user` state instead of re-fetching every time.
 */
let authChecked = false;

router.beforeEach(async to => {
	const { user, fetchUser } = useAuth();

	if (!authChecked) {
		await fetchUser();
		authChecked = true;
	}

	if (to.meta.requiresAuth && !user.value) {
		return { name: "login" };
	}

	if (to.meta.guestOnly && user.value) {
		return { name: "dashboard" };
	}

	return true;
});

router.afterEach(to => {
	document.title = `${to.meta.title} | Toby's Vue Dashboard`;
});

export default router;
