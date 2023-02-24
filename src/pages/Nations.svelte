<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";

	const topic = "Countries"
</script>

<main>
	<Header {topic} />
	
	<Footer title={topic}/>
</main>
