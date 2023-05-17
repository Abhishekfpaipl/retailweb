<template>
    <div>
        <div class="d-flex justify-content-between">
            <p class="text-start">Price</p>
            <i class="bi bi-search"></i>
        </div>
        <div class="d-flex flex-wrap gap-3 mb-1">
            <ColorInput name="Under ₹ 149"></ColorInput>
            <ColorInput name="Under ₹ 199"></ColorInput>
            <ColorInput name="Under ₹ 249"></ColorInput>
            <ColorInput name="Under ₹ 299"></ColorInput>
            <ColorInput name="Under ₹ 349"></ColorInput>
            <ColorInput name="Under ₹ 399"></ColorInput>
            <ColorInput name="Under ₹ 449"></ColorInput>
            <ColorInput name="Under ₹ 499"></ColorInput>
        </div>
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">

                <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body p-0 pb-3 mt-3 d-flex flex-wrap gap-3">
                        <ColorInput name="₹ 150 - ₹ 199"></ColorInput>
                        <ColorInput name="₹ 200 - ₹ 249"></ColorInput>
                        <ColorInput name="₹ 250 - ₹ 299"></ColorInput>
                        <ColorInput name="₹ 300 - ₹ 399"></ColorInput>
                        <ColorInput name="₹ 400 - ₹ 499"></ColorInput>
                        <ColorInput name="₹ 500 - ₹ 599"></ColorInput>
                        <ColorInput name="₹ 800 & above"></ColorInput>
                    </div>
                </div>
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour" style="background: #d5d2d2;">
                        View More
                    </button>
                </h2>
            </div>
        </div>
    </div>
    <hr />
</template>
<script>
import ColorInput from '@/components/Inputs/ColorInput.vue';

export default {
    name: "PriceFilter",
    components: { ColorInput }
}
</script>
<style lang="">
    
</style>