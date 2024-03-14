<script>
	import RedirectPage from "$components/RedirectPage.svelte";
	import { discord } from "../../config";
</script>

<svelte:head>
	<meta property="og:title" content="Invite" />
	<title>Boost Notifications - Invite</title>
</svelte:head>

<RedirectPage url="https://discord.com/api/oauth2/authorize?client_id={discord.clientID}&permissions=8&scope=applications.commands%20bot" />