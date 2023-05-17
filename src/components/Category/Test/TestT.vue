<template>
  <div>
    <input type="number" v-model="num1" @input="updateNum1" placeholder="Enter number 1" />
    <input type="number" v-model="num2" @input="updateNum2" placeholder="Enter number 2" />
    <button @click="subtract">Subtract</button>
    <p>Result: {{ result }}</p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState(['num1', 'num2']),
    ...mapGetters(['result']),
  },
  methods: {
    ...mapMutations(['setNum1', 'setNum2']),
    updateNum1() {
      this.setNum1(Number(this.num1));
    },
    updateNum2() {
      this.setNum2(Number(this.num2));
    },
    subtract() {
      // Perform subtraction logic here if needed
    },
  },
};
</script>
