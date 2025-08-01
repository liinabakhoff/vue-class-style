<template>
	<div>
		<input v-model="nameValue" />
	</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class EditableName extends Vue {
	@Prop({ type: String, required: true }) value!: string;

	$store!: any;

	get nameValue(): string {
		return this.value;
	}

	set nameValue(val: string) {
		this.$emit("input", val);
		this.$store.dispatch("user/updateUser", val);
	}
}
</script>

<style scoped>
div {
	border: 1px solid #e75858;
	padding: 1rem;
}
</style>
