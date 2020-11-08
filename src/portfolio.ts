import Vue from "vue";
import AppDataFolio from "./data-folio";

export default{

  template: document.getElementById('Portfolio').outerHTML,

  data: () => ({
    folio: AppDataFolio
  })
  
};
