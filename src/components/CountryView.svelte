<script lang="ts">
	import countries from "../data/countries";
	import { countryIndex } from "../data/stores";
	import flag from "../assets/blank_flag.svg";
	import Container from "./Container.svelte";

	$: country = countries[$countryIndex];
</script>

<Container>
	<div class="map">
		<h3 style:grid-area="name">{country.name}</h3>
		<p style:grid-area="title"><b>Official Name</b> <br/> {country.fullName}</p>
		<p style:grid-area="code"><b>Country Code</b> <br/> {country.id}</p>
		<p style:grid-area="capital"><b>Capital</b> <br/> {country.capital}</p>
		<p style:grid-area="lang"><b>Languages</b> <br/> {country.languages}</p>
		<p style:grid-area="desc"><b>Description</b> <br/> {country.description}</p>
		<img style:grid-area="image" src={flag} alt="Flag">
	</div>
</Container>

<style>
	div.map {
		display: grid;
		grid-template-areas:
			'name name image'
			'title code image'
			'capital lang image'
			'desc desc image';
	}

	h3 {
		font-size: 2em;
		margin-block-start: 0;
	}

	p {
		min-width: 30ch;
	}

	img {
		width: 15em;
		height: auto;
		margin: auto;
	}

</style>
