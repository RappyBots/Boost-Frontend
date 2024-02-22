<svelte:head>
	<title>Boost Notifications - Home</title>
</svelte:head>

<script>
	import Button from '$components/Button.svelte';
	import Card from '$components/Card.svelte';

	import Logo from "$lib/images/logo.webp"
</script>

<div class="min-h-[820px] max-w-5xl pt-32 md:pt-64 text-center space-y-12 mx-10 lg:mx-auto">
	<div class="text-4xl md:text-5xl font-black bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
		The best way to get notified when your members boost your server
	</div>
	<div class="text-xl md:text-2xl text-gray-500">
		Get notified when someone boosts your server with <strong class="text-white">flawless customization powered by Discord embeds</strong>, and reward them with custom roles
	</div>

	<div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 justify-center">
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


<div class="max-w-5xl mx-10 lg:mx-auto py-10">
	<div class="text-3xl md:text-4xl font-bold text-center">Why Boost Notifications?</div>

	<!-- Cards -->
	<div class="grid gap-4 mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
		<Card title="🕑 Uptime">
			We will work hard to ensure that our bot is always ready to send notifications when someone boosts your server.
		</Card>
		<Card title="✨ Customization">
			You can customize the image of the embed and DM messages sent to booster to fit your server's style.
		</Card>
		<Card title="🌍 Multi Language">
			You can change the language of the bot's reponses, command names and descriptions to ensure that your server members can use the bot in their own language.
		</Card>
		<Card title="🛠️ Easy Management">
			You can manage which roles will be given to the booster and which channel will the notifications be sent to with just one command.
		</Card>
		<Card title="🚀 Boost Simulation">
			You can simulate a boost to test if the bot is working correctly and to see how the notifications will look like.
		</Card>
		<Card title="📞 Fast Support">
			We have a dedicated support server where you can ask for help, report bugs and suggest new features and we will respond as soon as possible.
		</Card>
	</div>
</div>