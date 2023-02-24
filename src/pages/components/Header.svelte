<script>
    import Knabino from "../Knabino.svelte";


	export let topic = '';
</script>

<header>
	<h1>Knabino Magia</h1>
	{#if topic}	<h2>{topic}</h2> {/if}
</header>
