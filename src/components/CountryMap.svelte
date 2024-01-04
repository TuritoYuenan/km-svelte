<script lang="ts">
	import countries from "../data/countries";
	import worldMap from "../assets/worldmap.svg";
	import { countryIndex } from "../data/stores";
	import Container from "../components/Container.svelte";

	function setCountry(index: number) {
		return () => ($countryIndex = index);
	}
</script>

<Container>
	<div class="view" style:background="url({worldMap})" style:background-size="cover">
		{#each countries as { name, position }, i}
			<button
				style:left={position[0] + "px"}
				style:top={position[1] + "px"}
				on:click={setCountry(i)}>{name}</button
			>
		{/each}
	</div>
</Container>

<style>
	div.view {
		margin-top: 1rem;
		position: relative;
		aspect-ratio: 2000 / 857;

		& img {
			width: 100%;
			display: block;
		}
	}

	button {
		padding: 0.2rem;
		position: absolute;
		background: var(--canva0);
		color: inherit;
		border-radius: 0.5rem;
		cursor: pointer;
	}
</style>
