import Vue from 'vue';

export const store = Vue.observable({
  test: 'test'
});

export const mutaiton = {
  setTest: (count) => {
    store.test = count;
  }
};
