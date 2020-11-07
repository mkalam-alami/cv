import Vue from "vue";
import AppDataFolio from "./data-folio";

Vue.component('Portfolio', {

  el: '#Portfolio',

  data: () => ({
    folio: AppDataFolio
  })
  
});
