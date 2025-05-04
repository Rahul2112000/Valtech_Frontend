import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HomeComp.vue';
import Expenses from './components/ExpenseComp.vue';
import Summary from './components/SummaryComp.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/expenses', name: 'Expenses', component: Expenses },
  { path: '/summary', name: 'Summary', component: Summary },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
