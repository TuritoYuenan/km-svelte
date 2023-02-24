<script>
	import Footer from "./components/Footer.svelte";
    import Icons from "./components/Icons.svelte";
	import Symbol from "./components/Symbol.svelte";
</script>

<main>
	<header style="text-align: center;">
		<Symbol height="14em" />
		<h1>Knabino Magia Worldbuilding Database</h1>
	</header>
	<p>
		<b>Knabino Magia</b> (Esperanto for ‘magical girl’) is a Magical girl fiction
		by Turito Yuenan (me) about magical girls from different nations,
		cultures, all around the world.
	</p>
	<p>This website is a showcase of the fiction's worldbuilding data</p>
	<nav>
		<a href="#/magical-girls"><Icons icon='magi' height='12em'/>Magical Girls</a>
		<a href="#/countries"><Icons icon='flag' height='12em'/>Countries</a>
	</nav>
	<Footer title="Homepage" />
</main>

<style>
	nav {
		margin: 1em 0; gap: 1em; display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	}

	nav a {
		padding: .5em;
		background: var(--dcl-cl);
		color: inherit;
		border-radius: 1em;
		text-align: center;
		font-variant: small-caps;
	}
</style>
