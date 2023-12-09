<script lang="ts">
    export let topic: string;
</script>

<header>
	<h1>Knabino Magia</h1>
	{#if topic}	<h2>{topic}</h2> {/if}
</header>
