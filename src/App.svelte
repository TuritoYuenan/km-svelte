<script lang='ts'>
	import Symbol from './components/Symbol.svelte';
</script>

<header>
	<Symbol />
	<h1>Knabino Magia<br/>Database</h1>
</header>

<main>
	<h2>Description</h2>
	<ul>
		<li>
			Knabino Magia (Esperanto for 'magical girl') is a fiction by Turito Yuenan
			about the lives and adventures of magical girls around the world.
		</li>
		<li>
			This website serves as a place to search through the fiction's contents.
		</li>
	</ul>

	<h2>Magical Girls</h2>
	<div class='ch'></div>

	<h2>Countries</h2>
	<div class='ch'></div>
</main>

<footer>
	<p>
		&COPY; 2023 <a href='https://turitoyuenan.github.io/'>Turito Yuenan</a> |
		using Canva Pink Sky color palette.
	</p>
</footer>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: center;

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
