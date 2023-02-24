<script>
	import Router from "svelte-spa-router";

	import Home from "./pages/Home.svelte";
	import Error from "./pages/Error.svelte";
	import Knabino from "./pages/Knabino.svelte";
	import Nations from "./pages/Nations.svelte";
</script>

<Router routes={{
	"/magical-girls": Knabino,
	"/countries": Nations,
	"/": Home, "*": Error,
}} />
