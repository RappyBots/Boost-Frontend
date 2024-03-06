<script>
    import Logo from "$lib/images/logo.webp"
	import Button from "./Button.svelte";

	let hamburgerMenuOpen = false;
</script>

<header class="sticky w-screen top-0 h-20 backdrop-blur-md outline outline-[#cbd5e11a] outline-1 drop-shadow-lg">
    <div class="flex h-full items-center px-5 justify-between">
		<!-- Logo -->
        <a href="/" class="flex items-center h-4/6">
            <img src={Logo} class="h-full object-contain" alt="Boost Notifications Logo"/>
			<div class="select-none text-xl font-bold">Boost Notifications</div>
		</a>
        <div class="h-full flex items-center">
			<!-- Links -->
			<div id="nav-links" class="hidden lg:flex space-x-5 mr-4 font-semibold hover:*:text-secondary select-none">
				<a href="/">Home</a>
				<a target="_blank" href="/support">Support</a>
				<a target="_blank" href="/contact">Contact</a>
			</div>

			<!-- Hamburger Menu -->
			<button on:click={() => (hamburgerMenuOpen = !hamburgerMenuOpen)} class="lg:hidden flex mr-3 text-3xl">
				☰
			</button>

			<!-- Invite Btn -->
			<Button className="hidden md:flex bg-primary hover:bg-accent mr-5" target="_blank" href="/invite">
				<img src={Logo} class="h-[24px] object-contain" alt="Boost Notifications Logo"/> <div class="flex h-full items-center">Invite Boost Notifications</div>
			</Button>
		</div>
    </div>
	
	{#if hamburgerMenuOpen}
		<div
			class="font-semibold space-y-5 w-full hover:*:text-secondary *:block backdrop-blur-md p-5 text-center"
		>
			{@html
				document.getElementById("nav-links")?.innerHTML
			}
		</div>
	{/if}
</header>