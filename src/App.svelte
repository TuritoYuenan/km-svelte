<script lang="ts">
	import Symbol from "./components/Symbol.svelte";
	import Footer from "./components/Footer.svelte";

	import strings from "./data/strings";
</script>

<header>
	<Symbol />
	<h1>{strings.title}</h1>
</header>

<main>
	<h2>{strings.headings[0]}</h2>
	<ul>
		{#each strings.description as text}
			<li>{text}</li>
		{/each}
	</ul>

	<h2>{strings.headings[1]}</h2>
	<section></section>

	<h2>{strings.headings[2]}</h2>
	<div class='ch'>

	</div>
</main>

<Footer />

<style>
	header {
		display: flex;
		flex-direction: row;
		align-items: center;

		& h1 {
			margin-top: 0;
			font-size: 4em;
		}
	}

	.ch {
		height: 200px;
		margin-top: 1rem;
		background-color: var(--canva1);
	}
</style>
