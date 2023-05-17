<template>
    <div class="">
        <div class="d-flex justify-content-between">
            <p class="text-start">Brand</p>
            <i class="bi bi-search"></i>
        </div>
        <div>
            <InputCheckbox name="Friskers" num="(80324)"></InputCheckbox>
            <InputCheckbox name="Roadster" num="(70920)"></InputCheckbox>
            <InputCheckbox name="Tokyo Talkies" num="(80324)"></InputCheckbox>
            <InputCheckbox name="Trendyol" num="(70920)"></InputCheckbox>
            <InputCheckbox name="Harpa" num="(80324)"></InputCheckbox>
            <InputCheckbox name="FOREVER 21" num="(70920)"></InputCheckbox>
            <InputCheckbox name="Urban Komfort" num="(80324)"></InputCheckbox>
            <InputCheckbox name="VIMAL JONNEY" num="(70920)"></InputCheckbox>
            <!-- <div class="form-check">
                <input class="form-check-input" type="checkbox" id="flexCheckChecked1" v-model="isChecked" @change="updateParagraph" />
                <label class="form-check-label" for="flexCheckChecked1">
                    Friskers <small style="color: grey;">(80324)</small>
                </label>
                <p>{{ labelValue }}</p>
            </div> -->

            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">

                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body p-0 pb-3">
                            <InputCheckbox name="SHOWOFF" num="(80324)"></InputCheckbox>
                            <InputCheckbox name="DressBerry" num="(70920)"></InputCheckbox>
                            <InputCheckbox name="AND" num="(80324)"></InputCheckbox>
                            <InputCheckbox name="Athena" num="(70920)"></InputCheckbox>
                            <InputCheckbox name=" ANVI Be Yourself" num="(80324)"></InputCheckbox>
                            <InputCheckbox name="GRACIT" num="(70920)"></InputCheckbox>
                        </div>
                    </div>
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style="background: #d5d2d2;">
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
    name: "BrandFilter",
    data() {
        return {
            isChecked: true,
            labelValue: "Friskers"
        };
    },
    methods: {
        updateParagraph() {
            if (this.isChecked) {
                this.labelValue = "Friskers";
            }
            else {
                this.labelValue = "";
            }
        }
    },
    components: { InputCheckbox }
}
</script>
<style lang="">
    
</style>