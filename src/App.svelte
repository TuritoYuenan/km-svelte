<script lang="ts">
	import Router from "svelte-spa-router";

	import Home from "./pages/Home.svelte";
	import Error from "./pages/Error.svelte";
	import Knabino from "./pages/MagicalGirls.svelte";
	import Nations from "./pages/Countries.svelte";

	const routes = {
		"/": Home, "*": Error,
		"/magical-girls": Knabino,
		"/countries": Nations,
	}
</script>

<Router {routes} />
