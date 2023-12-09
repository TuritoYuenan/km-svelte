<script>
	export let title = ""
	const time = new Date();
</script>

<svelte:head>
	<title>Knabino Magia: {title}</title>
</svelte:head>

<footer>
	<h3><a href="/">Knabino Magia Worldbuilding Database</a></h3>
	<p>
		&COPY; {time.getFullYear()}
		<a href="https://turitoyuenan.github.io/">Turito Yuenan</a>.
		Canva Pink Sky Palette
		<!-- <a href="https://draculatheme.com">Dracula Theme</a> by Zeno Rocha -->
	</p>
</footer>

<style>
	footer {font-size: medium;}
	h3 a {color: inherit;}
</style>
