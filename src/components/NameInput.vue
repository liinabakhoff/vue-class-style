<template>
	<div>
		<input v-model="inputValue" />
	</div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component
export default class NameInput extends Vue {
	@Prop({ type: String, required: true }) value!: string;

	get inputValue() {
		return this.value;
	}

	set inputValue(newValue: string) {
		this.$emit("input", newValue);
	}
}
</script>

<style scoped>
div {
	border: 1px solid #2cd378;
	padding: 1rem;
}
</style>
