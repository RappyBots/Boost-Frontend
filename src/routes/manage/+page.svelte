<script>
	import ServerCard from "$components/ServerCard.svelte";
</script>
<svelte:head>
	<meta property="og:title" content="Manage Servers" />
	<title>Boost Notifications - Manage Servers</title>
</svelte:head>

<div class="flex flex-col justify-center items-center p-16 space-y-20">
    <h1 class="text-4xl font-bold">Manage your servers</h1>

	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl w-full justify-center">
		<ServerCard/>
	</div>
</div>
