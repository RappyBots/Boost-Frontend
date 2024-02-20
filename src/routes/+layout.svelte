<script>
	import Header from "$components/Header.svelte";
	import "../app.css";
</script>

<div class="min-h-screen bg-bg-dark text-white">
	<Header />

	<main>
		<slot />
	</main>
</div>