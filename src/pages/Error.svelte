<script lang="ts">
	import Header from "../components/Header.svelte";
	import Footer from "../components/Footer.svelte";

	const topic = 'Page not found';
</script>

<Header {topic}/>

<main>
	<p>
		Hmm it seems there's nothing here. Maybe you
		entered the wrong address?
	</p>
</main>

<Footer/>
