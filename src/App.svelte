<script lang="ts">
	import Symbol from "./components/Symbol.svelte";
	import Footer from "./components/Footer.svelte";
	import Container from "./components/Container.svelte";
	import CountryMap from "./components/CountryMap.svelte";
	import CountryView from "./components/CountryView.svelte";

	import strings from "./data/strings";
</script>

<header>
	<Symbol />
	<h1>{strings.title}</h1>
	<p>{strings.subtitle}</p>
</header>

<main>
	<h2>{strings.headings[0]}</h2>
	<ul>
		{#each strings.description as paragraph}
			<li>{paragraph}</li>
		{/each}
	</ul>

	<h2>{strings.headings[1]}</h2>
	<ul>
		{#each strings.disclaimer as paragraph}
			<li>{paragraph}</li>
		{/each}
	</ul>

	<h2>{strings.headings[2]}</h2>
	<Container></Container>

	<h2>{strings.headings[3]}</h2>
	<CountryMap />
	<br/>
	<CountryView />
</main>

<Footer />

<style>
	header {
		display: flex;
		flex-direction: column;
		align-items: center;

		text-align: center;
		font-size: 1.5em;

		& h1 {
			margin-top: 0;
			font-size: 2em;
			font-variant: small-caps;
		}
	}

	header p:last-of-type {
		margin-block-end: 0;
	}

	main h2:first-of-type {
		margin-block-start: 0;
	}
</style>
