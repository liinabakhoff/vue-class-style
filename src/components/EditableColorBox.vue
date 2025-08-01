<template>
	<div id="editable-color-box">
		<h2>Pick a color:</h2>
		<ColorPicker v-model="selectedColor" />
		<div id="color-preview" :style="{ backgroundColor: selectedColor }"></div>
	</div>
</template>

<script lang="ts">
import ColorPicker from "./ColorPicker.vue";
import { Vue, Component } from "vue-property-decorator";
import { Store } from "vuex";
@Component({
	components: {
		ColorPicker,
	},
})
export default class EditableColorBox extends Vue {
	$store!: any;

	get selectedColor() {
		return this.$store.getters["user/color"];
	}
	set selectedColor(val: string) {
		this.$store.dispatch("user/updateColor", val);
	}
}
</script>

<style scoped>
div#editable-color-box {
	border: solid 1px #3c9dca;
}

div#color-preview {
	width: 3rem;
	height: 3rem;
	border: solid 1px lightgray;
	border-radius: 100%;
}
</style>
