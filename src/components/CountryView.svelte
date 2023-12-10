<script lang="ts">
	import countries from "../data/countries";
	import { countryIndex } from "../data/stores";

	$: country = countries[$countryIndex];
</script>

<section class="view">
	<h3>{country.name}</h3>
	<ul>
		<li><b>Full name</b>: {country.fullName}</li>
		<li><b>Country Code</b>: {country.id}</li>
		<li><b>Capital</b>: {country.capital}</li>
		<li><b>Description</b>: {country.description}</li>
	</ul>
</section>

<style>
	.view {
		margin-top: 1rem;
		padding: 0.1rem 1rem;

		background: var(--canva1);
		border-radius: 2rem;
	}
</style>
