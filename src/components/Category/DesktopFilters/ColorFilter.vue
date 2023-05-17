<template>
    <div class="">
        <div class="d-flex justify-content-between">
            <p class="text-start">Color</p>
            <i class="bi bi-search"></i>
        </div>
        <div>
            <div class="d-flex justify-content-start flex-wrap gap-2 mb-1">
                <ColorInput name="Black"></ColorInput>
                <ColorInput name="Red"></ColorInput>
                <ColorInput name="Orange"></ColorInput>
                <ColorInput name="Yellow"></ColorInput>
                <ColorInput name="Greenyellow"></ColorInput>
            </div>

            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">

                    <div id="flush-collapseThree" class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body p-0 pb-3">
                            <div class="d-flex justify-content-start flex-wrap gap-2 mt-2">
                                <ColorInput name="Purple"></ColorInput>
                                <ColorInput name="Crimson"></ColorInput>
                                <ColorInput name="Pink"></ColorInput>
                                <ColorInput name="Blue"></ColorInput>
                                <ColorInput name="White"></ColorInput>
                            </div>
                        </div>
                    </div>
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style="background: #d5d2d2;">
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
import ColorInput from '@/components/Inputs/ColorInput.vue';

// import InputCheckbox from '@/components/Inputs/InputCheckbox.vue';

export default {
    name: "ColorFilter",
    components: { ColorInput }
}
</script>
<style lang="">
    
</style>