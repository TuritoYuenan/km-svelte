<script lang="ts">
	import Header from "../components/Header.svelte";
	import Footer from "../components/Footer.svelte";
    import Icons from "../components/Icons.svelte";

	const topic = "Magical Girls";
</script>

<main>
	<Icons icon='magi' float='right'/>
	<Header {topic} />
	<section style="height: 50em;">

	</section>
	<Footer title={topic} />
</main>
