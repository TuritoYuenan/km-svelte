<script>
	export let title = ""
	const time = new Date();
</script>

<svelte:head>
	<title>KM Worldbuilding: {title}</title>
</svelte:head>

<footer>
	<h2><a href="/">Knabino Magia Worldbuilding Database</a></h2>
	<p>
		&COPY; {time.getFullYear()}
		<a href="https://turitoyuenan.github.io/">Turito Yuenan</a>
		(<a href="mailto:turitoyuenan@proton.me">turitoyuenan@proton.me</a>).
		<a href="https://draculatheme.com">Dracula Theme</a> by Zeno Rocha
	</p>
</footer>

<style>
	footer {font-size: medium;}
	h2 a {color: inherit;}
</style>
