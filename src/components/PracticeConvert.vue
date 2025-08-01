<!-- CoachDetail.vue -->
<template>
	<div>
		<p v-if="showAge">Age: {{ age }}</p>
		<button @click="toggleAge">Toggle Age</button>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class PracticeConvert extends Vue {
	@Prop({ type: Number, default: 0 }) readonly age!: number;

	showAge = true;

	toggleAge() {
		this.showAge = !this.showAge;
	}
}
</script>
