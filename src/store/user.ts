// store/user.ts
export interface UserState {
	name: string;
	color: string;
}

const state: UserState = {
	name: "Alice",
	color: "#ffcc00",
};

const mutations = {
	setName(state: UserState, newName: string) {
		state.name = newName;
	},
	setColor(state: UserState, newColor: string) {
		state.color = newColor;
	},
};

const actions = {
	updateName({ commit }: any, newName: string) {
		commit("setName", newName);
	},
	updateColor({ commit }: any, newColor: string) {
		console.log("updateColor", newColor);
		commit("setColor", newColor);
	},
};

const getters = {
	color(state: UserState) {
		return state.color;
	},
};

export default {
	namespaced: true,
	getters,
	state,
	mutations,
	actions,
};
