<script>
	import Footer from "$components/Footer.svelte";
	import Header from "$components/Header.svelte";
	import "../app.css";
	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="flex flex-col min-h-screen">
	<Header />

	<main class="flex flex-col flex-1">
		{@render children?.()}
	</main>

	<Footer />
</div>

