<template>
	<div>
		<h2>{{ msg }}</h2>
		<button @click="increment">
			{{ label }} {{ count }}, double: {{ doubleCount }}
		</button>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
	@Prop({ type: String, default: "Click me" }) readonly label!: string;

	msg = "Hello from class-style component!";
	count = 0;

	increment() {
		this.count++;
	}

	get doubleCount() {
		return this.count * 2;
	}

	@Watch("count")
	onCountChanged(newValue: number, oldValue: number) {
		console.log(`Count changed from ${oldValue} to ${newValue}`);
	}
}
</script>
