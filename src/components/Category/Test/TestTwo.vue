<template>
    <div>
      <p>{{ labelValue }}</p>
    </div>
  </template>
  
  <script>
  export default {
    
    props: {
      labelValue: {
        type: String,
        required: true
      }
    }
  };
  </script>
  