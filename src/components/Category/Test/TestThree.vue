<template lang="">
    <div>
        <p>jgjjghghjgg</p>
        <TestOne v-model="isChecked" @change="updateValue" ></TestOne>
        <TestTwo :labelValue="labelValue" />
    </div>
</template>
<script>
import TestOne from './TestOne.vue';
import TestTwo from './TestTwo.vue';
export default {
   name:'TestThree',
    components:{
        TestTwo,
        TestOne,
    },
    data() {
      return {
        isChecked: true ,
        labelValue: ""
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
    
}
</script>
<style lang="">
    
</style>