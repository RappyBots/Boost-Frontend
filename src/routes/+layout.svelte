<script>
	import Footer from "$components/Footer.svelte";
	import Header from "$components/Header.svelte";
	import "../app.css";
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div>
	<Header />

	<main class="min-h-screen">
		{@render children?.()}
	</main>

	<Footer />
</div>

