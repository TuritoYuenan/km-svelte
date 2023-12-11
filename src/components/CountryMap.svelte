<script lang="ts">
	import countries from "../data/countries";
	import worldMap from "../assets/worldmap.svg";
	import { countryIndex } from "../data/stores";

	function setCountry(index: number) {
		return () => ($countryIndex = index);
	}
</script>

<section>
	<div class="labels">
		{#each countries as { name, location }, i}
			<button
				style:left={location[0] + "px"}
				style:top={location[1] + "px"}
				on:click={setCountry(i)}>{name}</button
			>
		{/each}
	</div>
	<img src={worldMap} alt="World Map" />
</section>

<style>
	section {
		margin-top: 1rem;
		padding: 1rem;
		background: var(--canva1);
		border-radius: 2rem;
		aspect-ratio: 2000 / 857;

		& img {
			width: 100%;
			display: block;
		}
	}

	.labels {
		position: absolute;
		z-index: 1;

		& button {
			padding: 0.2rem;
			position: absolute;
			background: var(--canva0);
			color: inherit;
			border-radius: 0.5rem;
		}
	}
</style>
