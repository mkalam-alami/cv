import Vue, { Component } from "vue";
import AppDataCv from "./data-cv";


const vue: Component = {
  
  template: document.getElementById('Parcours').outerHTML,

  data: () => ({
    cv: AppDataCv
  })
  
};

export default vue;