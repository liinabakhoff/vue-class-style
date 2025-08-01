<template>
	<div id="app">
		<HelloWorld />
		<PracticeConvert :age="12" />
		<UserStatus :user="myUser" />
		<EditableName v-model="myUser.username" />
		<div>
			<NameInput v-model="name" />
			<p>You typed: {{ name }}</p>
		</div>
		<div>
			<h2>Pick a Color:</h2>
			<ColorPicker v-model="favoriteColor" />
			<p>Favorite color: {{ favoriteColor }}</p>
		</div>

		<div>
			<EditableColorBox />
		</div>
	</div>
</template>

<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import PracticeConvert from "./components/PracticeConvert.vue";
import UserStatus from "./components/UserStatus.vue";
import NameInput from "./components/NameInput.vue";
import EditableName from "./components/EditableName.vue";
import ColorPicker from "./components/ColorPicker.vue";
import EditableColorBox from "./components/EditableColorBox.vue";
import { Vue, Component } from "vue-property-decorator";

@Component({
	components: {
		HelloWorld,
		PracticeConvert,
		UserStatus,
		NameInput,
		EditableName,
		ColorPicker,
		EditableColorBox,
	},
})
export default class App extends Vue {
	favoriteColor = "#00ff00";

	name = "Liina";
	myUser = {
		username: "liinabakhoff",
		firstName: "Liina",
		lastName: "Bakhoff",
		isOnline: false,
	};
}
</script>
