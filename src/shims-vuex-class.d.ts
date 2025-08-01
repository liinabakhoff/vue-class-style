declare module "vuex-class" {
	import { VuexDecorator } from "vuex-class/lib/bindings";
	import { namespace } from "vuex-class/lib/namespace";

	export const State: VuexDecorator;
	export const Getter: VuexDecorator;
	export const Mutation: VuexDecorator;
	export const Action: VuexDecorator;
	export { namespace };
}
