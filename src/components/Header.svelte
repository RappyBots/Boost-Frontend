<script>
    import Logo from "$lib/images/logo.webp"
	import Button from "./Button.svelte";

	let hamburgerMenuOpen = false;
</script>

<header class="sticky top-0 h-20 backdrop-blur-md outline outline-[#cbd5e11a] outline-1 drop-shadow-lg">
    <div class="flex h-full items-center px-5 justify-between">
		<!-- Logo -->
        <a href="/" class="flex items-center h-4/6">
            <img src={Logo} class="h-full object-contain" alt="Boost Notifications Logo"/>
			<div class="select-none text-xl font-bold">Boost Notifications</div>
		</a>
        <div class="h-full flex items-center">
			<!-- Links -->
			<div id="nav-links" class="hidden lg:flex space-x-5 mr-5 text-md font-semibold hover:*:text-secondary select-none">
				<a href="/">Home</a>
				<a href="https://discord.com/invite/2RctHuWqPB">Support</a>
				<a href="https://discord.com/users/397829538773598220">Contact</a>
			</div>

			<!-- Hamburger Menu -->
			<button on:click={() => (hamburgerMenuOpen = !hamburgerMenuOpen)} class="lg:hidden flex mr-3 text-3xl">
				☰
			</button>

			<!-- Invite Btn -->
			<Button className="hidden md:flex h-4/6" href="/invite">
				<div class="flex h-full">Invite <img src={Logo} class="h-full object-contain" alt="Boost Notifications Logo"/>Boost Notifications</div>
			</Button>
		</div>
    </div>
	
	{#if hamburgerMenuOpen}
		<div class="block backdrop-blur-md outline-[#cbd5e11a] outline-1 drop-shadow-lg">
			<div class="ml-16 text-md font-semibold *:h-10 hover:*:text-secondary *:block">
				{@html
					document.getElementById("nav-links")?.innerHTML
				}
			</div>
		</div>
	{/if}
</header>