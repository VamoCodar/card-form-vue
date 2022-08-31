import { createApp } from 'vue'
import "./index.css";
import App from './App.vue'
import { VueMaskDirective } from 'v-mask';
import { plugin, defaultConfig } from '@formkit/vue'

const vMaskV2 = VueMaskDirective;
const vMaskV3 = {
	beforeMount: vMaskV2.bind,
	updated: vMaskV2.componentUpdated,
	unmounted: vMaskV2.unbind
};

const app = createApp(App)

app
	.directive('mask', vMaskV3)
	.use(plugin, defaultConfig)
	.mount('#app')


