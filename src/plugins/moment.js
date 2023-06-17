// plugins/moment.js

import moment from 'moment';

moment.locale('ru');

export default function install (Vue) {
  Object.defineProperties(Vue.prototype, {
    $moment: {
      get () {
        return moment;
      }
    }
  })
}