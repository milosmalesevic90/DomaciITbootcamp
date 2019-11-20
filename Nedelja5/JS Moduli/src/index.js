import '../assets/css/style.css';

import { Dashboard } from './layout/dashboard';

const app = document.getElementById('app');
app.innerHTML=`<div id="dashboard"></div>`
const dashboard = new Dashboard();