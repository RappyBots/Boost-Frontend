<script>
	import Button from "./Button.svelte";

    export let title = "";
</script>

<div class="flex flex-col h-80 w-full rounded-lg outline outline-1 outline-[#cbd5e11a] bg-contain overflow-hidden" id="card">
    <div class="h-[125px] w-full bg-[#161c29] mt-auto">
        <div class="flex mx-4 space-x-2">
            <img
                class="-my-8 max-w-[80px] max-h-[80px] rounded-full"
                src="https://cdn.discordapp.com/icons/260471731809026048/a_25d613b5a716ab94516c6217e7d3248a.webp?size=96" alt="Icon of LabyMod"
            />

            <div class="text-[30px] font-bold">
                LabyMod
            </div>
        </div>

        <Button className="m-5 bg-primary hover:bg-accent sm:flex-row text-center" href="/manage/260471731809026048">
			Manage
		</Button>
    </div>
</div>

<style>
    #card {
        background-image: url("https://cdn.discordapp.com/banners/260471731809026048/a2c3b43274724f46d19be1514cb62646.webp?size=480");
    }
</style>