<script lang="ts">
	import ServerCard from "$components/ServerCard.svelte";
	import { onMount } from "svelte";
	import type Guild from "../../types/Guild";
	import { getCookie } from "../../utils/cookies";

	let servers: Guild[] = []

	onMount(async () => {
		const token = getCookie("token")
		if (!token || !token.value) {
			window.location.href = `https://discord.com/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID || "1067880912538304583"}&response_type=code&redirect_uri=${encodeURIComponent(`${window.location.origin}/api/discord/callback`)}&scope=identify+guilds`
			return
		} 

		servers = await (await fetch("/api/discord/manageableGuilds")).json()
	})
</script>

<svelte:head>
	<meta property="og:title" content="Manage Servers" />
	<title>Boost Notifications - Manage Servers</title>
</svelte:head>

<div class="flex flex-col justify-center items-center p-16 space-y-20">
    <div class="text-center space-y-2">
		<h1 class="text-4xl font-bold">Manage your servers</h1>
		<h1 class="text-2xl">Select your server</h1>
	</div>

	<div id="servers-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl w-full justify-center gap-4">
		{#each servers as server}
			<ServerCard server={server} />
		{/each}
	</div>
</div>
