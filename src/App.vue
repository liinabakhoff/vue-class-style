<template>
	<div id="app">
		<HelloWorld />
		<PracticeConvert :age="12" />
		<UserStatus :user="myUser" />
	</div>
</template>

<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import PracticeConvert from "./components/PracticeConvert.vue";
import UserStatus from "./components/UserStatus.vue";
import { Vue, Component } from "vue-property-decorator";

@Component({
	components: {
		HelloWorld,
		PracticeConvert,
		UserStatus,
	},
})
export default class App extends Vue {
	myUser = {
		firstName: "Liina",
		lastName: "Bakhoff",
		isOnline: false,
	};
}
</script>
