<template>
    <div>
        <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
            <input type="checkbox" class="btn-check" :id="name" autocomplete="off">
            <label class="btn btn-outline-success rounded-5" :for="name">{{ name }}</label>
        </div>
    </div>
</template>
<script>
export default {
    name:'ColorInput',
    props:['name']
}
</script>
<style lang="">
    
</style>