<template>
   <div class="">
        <div class="d-flex justify-content-between">
            <p class="text-start">Discount Filter</p>
            <i class="bi bi-search"></i>
        </div>
        <div>
            <!-- <InputCheckbox></InputCheckbox> -->
            <InputCheckbox name=" 10% and above "></InputCheckbox>
            <InputCheckbox name=" 20% and above "></InputCheckbox>
            <InputCheckbox name=" 30% and above "></InputCheckbox>
            <InputCheckbox name=" 40% and above "></InputCheckbox>

            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">

                    <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body p-0 pb-3">
                            <InputCheckbox name=" 50% and above "></InputCheckbox>
                            <InputCheckbox name=" 60% and above "></InputCheckbox>
                            <InputCheckbox name=" 70% and above "></InputCheckbox>
                            <InputCheckbox name=" 80% and above "></InputCheckbox>
                            <InputCheckbox name=" 90% and above "></InputCheckbox>
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
    </div>
    <hr />
</template>
<script>
import InputCheckbox from '@/components/Inputs/InputCheckbox.vue';

export default {
    name: "DiscountFilter",
    components: { InputCheckbox }
}
</script>
<style lang="">
    
</style>