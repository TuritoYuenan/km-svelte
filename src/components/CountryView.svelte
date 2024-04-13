<script lang="ts">
	import flag from "../assets/blank_flag.svg";
	import { countryIndex } from "../data/stores";
	import countries from "../data/countries";
	import Container from "./Container.svelte";

	$: country = countries[$countryIndex];

	function displayLanguages(languages: string[]) {
		let langString = languages[0];

		for (let i = 1; i < languages.length; i++) {
			langString += ", " + languages[i];
		}

		return langString;
	}
</script>

<Container>
	<div class="map">
		<h3 style:grid-area="name">{country.name}</h3>
		<div style:grid-area="full">
			<h4>Official Name</h4>
			<p>{country.fullName}</p>
		</div>
		<div style:grid-area="code">
			<h4>Country Code</h4>
			<p>{country.id}</p>
		</div>
		<div style:grid-area="city">
			<h4>Capital</h4>
			<p>{country.capital}</p>
		</div>
		<div style:grid-area="lang">
			<h4>Languages</h4>
			<p>{displayLanguages(country.languages)}</p>
		</div>
		<div style:grid-area="desc">
			<h4>Description</h4>
			{#each country.description as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>
		<img style:grid-area="image" src={flag} alt="Flag" />
	</div>
</Container>

<style>
	div.map {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-areas:
			"name name image"
			"full code image"
			"city lang image"
			"desc desc desc";
	}

	h3 {
		font-size: 2em;
		margin-block-start: 0;
	}

	img {
		width: 100%;
		height: auto;
		margin: auto;
		border-radius: 0.5rem;
	}
</style>
