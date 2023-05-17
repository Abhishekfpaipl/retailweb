<template>
    <div>
      <input class="form-check-input" type="checkbox" v-model="isChecked" @change="updateValue" />
      <label class="form-check-label" for="flexCheckChecked">
        Friskers <small style="color: grey;">(80324)</small>
      </label>
      <TestTwo :labelValue="labelValue" />
    </div>
  </template>
  
  <script>
//   import ChildComponent from './ChildComponent.vue';
import TestTwo from './TestTwo.vue';
  
  export default {
    components: {
    // ChildComponent,
    TestTwo
},
    data() {
      return {
        isChecked: true,
        labelValue: "Friskers (80324)"
      };
    },
    methods: {
      updateValue() {
        if (this.isChecked) {
          this.labelValue = "Friskers (80324)";
        } else {
          this.labelValue = "";
        }
      }
    }
  };
  </script>
  
  