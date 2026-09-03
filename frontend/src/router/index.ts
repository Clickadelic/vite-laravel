import { createRouter, createWebHistory } from "vue-router";
import { useAuth } from "../composables/useAuth";
import DashboardPage from "../pages/DashboardPage.vue";
import HomePage from "../pages/HomePage.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";

declare module "vue-router" {
	interface RouteMeta {
		requiresAuth?: boolean;
		guestOnly?: boolean;
	}
}

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: "/", name: "home", component: HomePage },
		{ path: "/login", name: "login", component: LoginPage, meta: { guestOnly: true } },
		{ path: "/register", name: "register", component: RegisterPage, meta: { guestOnly: true } },
		{ path: "/dashboard", name: "dashboard", component: DashboardPage, meta: { requiresAuth: true } }
	]
});

/*
 * The current user's session is only known after the first `fetchUser()`
 * call resolves, so the very first navigation waits for it before any
 * auth-gated redirect decisions are made. Subsequent navigations reuse the
 * already-resolved `user` state instead of re-fetching every time.
 */
let authChecked = false;

router.beforeEach(async (to) => {
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

export default router;
