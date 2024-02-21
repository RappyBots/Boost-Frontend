<svelte:head>
	<title>Boost Notifications - Home</title>
</svelte:head>

<script>
	import Button from '$components/Button.svelte';
	import Logo from "$lib/images/logo.webp"
</script>

<div class="min-h-screen max-w-5xl pt-32 md:pt-64 text-center space-y-12 mx-10 lg:mx-auto">
	<div class="text-4xl md:text-5xl font-bold bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
		The best way to get notified when your members boost your server
	</div>
	<div class="text-xl md:text-2xl text-gray-500">
		Get notified when someone boosts your server with <strong class="text-white">flawless customization powered by Discord embeds</strong>, and reward them with custom roles
	</div>

	<div class="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-3">
		<!-- Invite Btn -->
		<Button className="bg-primary hover:bg-accent" href="/invite">
			<div class="flex h-full justify-center sm:justify-start">Invite<img src={Logo} class="h-[24px] object-contain" alt="Boost Notifications Logo"/>Boost Notifications</div>
		</Button>
	
		<!-- Support Btn -->
		<Button className="bg-transparent outline outline-1 outline-gray-600 hover:bg-gray-700" href="/support">
			Join support server
		</Button>
	</div>
</div>

