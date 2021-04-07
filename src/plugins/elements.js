import Vue from 'vue'
import { MessageBox, Message , Button } from 'element-ui';
Vue.use(Button)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;