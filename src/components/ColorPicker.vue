<template>
	<div>
		<input type="text" v-model="chosenColor" />
	</div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component
export default class ColorPicker extends Vue {
	@Prop({ type: String, required: true }) value!: string;

	get chosenColor() {
		return this.value;
	}

	set chosenColor(newValue: string) {
		this.$emit("input", newValue);
	}
}
</script>
