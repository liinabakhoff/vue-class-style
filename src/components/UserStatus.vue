<!-- UserStatus.vue -->
<template>
	<div>
		<h2>{{ fullName }}</h2>
		<p>Status: {{ status }}</p>
		<button @click="toggleOnline">Toggle Status</button>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

interface User {
	firstName: string;
	lastName: string;
	isOnline: boolean;
}

@Component
export default class UserStatus extends Vue {
	// @Prop({ type: String, required: true }) firstName!: string;
	// @Prop({ type: String, required: true }) lastName!: string;
	// @Prop({ type: Boolean, default: false }) isOnline!: boolean;
	@Prop({ required: true }) readonly user!: User;

	status = "";

	get fullName() {
		return `${this.user.firstName} ${this.user.lastName}`;
	}

	mounted() {
		this.status = this.user.isOnline ? "Online" : "Offline";
	}

	toggleOnline() {
		this.$emit("update:isOnline", !this.user.isOnline);
	}

	@Watch("isOnline")
	onIsOnlineChange(newVal: boolean) {
		this.status = newVal ? "Online" : "Offline";
	}
}
</script>
