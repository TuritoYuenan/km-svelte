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
	<div class="map" style:background="url({worldMap})" style:background-size="cover">
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
	div.map {
		margin-top: 1rem;
		position: relative;
		aspect-ratio: 2000 / 857;

		& img {
			width: 100%;
			display: block;
		}
	}

	button {
		padding: 0.3rem;
		position: absolute;
		background: var(--canva4);
		color: var(--canva1);
		border: none;
		border-radius: 0.5rem;
		transition: var(--default-transition);
		cursor: pointer;

		&:hover {
			scale: 1.1;
		}

		&:active {
			scale: 1;
		}
	}
</style>
