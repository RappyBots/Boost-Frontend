<script lang="ts">
	import type Guild from "../types/Guild";
	import Button from "./Button.svelte";
    import DiscordLogo from "$lib/images/discord-mark-white.png"

    export let server: Guild;
</script>

<div class="flex flex-col rounded-lg outline outline-1 outline-[#cbd5e11a] bg-contain" id="card">
    <img
        class="flex flex-col justify-center min-h-[186px] bg-[#212329] p-5 text-center text-2xl font-bold overflow-clip"
        src={server.banner ? `https://cdn.discordapp.com/banners/${server.id}/${server.banner}.webp?size=480` : ""}
        alt={server.banner ? `Banner of ${server.name}` : server.name}
    />
    <div class="flex flex-col justify-between flex-1 bg-[#161c29]">
        <div class="flex mx-4 space-x-3">
            <img
                class="-my-8 w-[80px] h-[80px] object-contain rounded-full bg-primary"
                src={server.icon ? `https://cdn.discordapp.com/icons/${server.id}/${server.icon}.webp?size=96` : DiscordLogo} alt={`Icon of ${server.name}`}
            />

            <div class="my-1 text-[26px] font-bold">
                {server.name}
            </div>
        </div>

        <Button className="m-5 mt-5 bg-primary hover:bg-accent sm:flex-row text-center" href={`/manage/${server.id}`}>
			Manage
		</Button>
    </div>
</div>