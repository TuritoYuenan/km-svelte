<script>
	import { countryIndex } from "../data/stores";
	import countries from "../data/countries";
</script>

<section class="map">
	{#each countries as { name }, i}
		<button on:click={() => (countryIndex.set(i))}>{name}</button>
	{/each}
</section>

<style>
	section {
		margin-top: 1rem;
		padding: 1rem;
		background-color: var(--canva1);
		border-radius: 2rem;
	}

	button {
		padding: 1rem;
		background: var(--canva0);
		font-family: inherit;
		font-size: 1em;
		color: inherit;
		border: none;
		border-left: solid 0.3rem currentColor;
	}

	.map {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
</style>
