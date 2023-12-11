<script lang="ts">
	import countries from "../data/countries";
	import { countryIndex } from "../data/stores";
	import flag from "../assets/blank_flag.svg";

	$: country = countries[$countryIndex];
</script>

<section class="view">
	<h3 style:grid-area="c_name">{country.name}</h3>
	<p style:grid-area="c_title"><b>Official Name</b> <br/> {country.fullName}</p>
	<p style:grid-area="c_code"><b>Country Code</b> <br/> {country.id}</p>
	<p style:grid-area="c_capital"><b>Capital</b> <br/> {country.capital}</p>
	<p style:grid-area="c_lang"><b>Languages</b> <br/> {country.languages}</p>
	<p style:grid-area="c_desc"><b>Description</b> <br/> {country.description}</p>
	<img style:grid-area="image" src={flag} alt="Flag">
</section>

<style>
	section {
		margin-top: 1rem;
		padding: 0.1rem 1.5rem;

		background: var(--canva1);
		border-radius: 2rem;
	}

	h3 {
		font-size: 2em;
	}

	p {
		min-width: 30ch;
	}

	img {
		width: 15em;
		height: auto;
		margin: auto;
	}

	.view {
		display: grid;
		grid-template-areas:
			'c_name c_name image'
			'c_title c_code image'
			'c_capital c_lang image'
			'c_desc c_desc image';
	}
</style>
