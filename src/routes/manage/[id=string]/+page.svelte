<script>
    import DiscordLogo from "$lib/images/discord-mark-white.png"
    import Switch from "$components/Switch.svelte"
    import TextInput from "$components/TextInput.svelte"
</script>

<div class="sticky top-20 flex items-center bg-gradient-to-b from-[rgba(0,0,0,.4)] to-transparent w-full p-4 space-x-3">
    <img
        src={DiscordLogo} alt="Logo of Discord"
        class="w-12 h-12 object-contain rounded-full bg-[#35383f]"
    />
    <h1 class="text-2xl font-bold">Discord</h1>
</div>

<div class="-mt-20 w-full h-64 bg-contain -z-10" id="server-banner"/>

<div class="p-4 space-y-3 lg:mx-10">
    <h1 class="text-2xl font-bold">Boost Settings</h1>
    <div class="bg-[#161c29] rounded-lg p-3 space-y-2 items-center">
        <div class="grid md:grid-cols-2 gap-5">
            <div class="flex justify-between items-center">
                <h1 class="text-xl font-semibold">Notification Title</h1>
                <TextInput placeholder="https://example.com/image.png"/>
            </div>
    
            <div class="flex justify-between items-center">
                <h1 class="text-xl font-semibold">Notification Description</h1>
                <TextInput/>
            </div>
        </div>

        <div class="flex justify-between items-center">
            <h1 class="text-xl font-semibold">Notification Image</h1>
            <TextInput/>
        </div>
    </div>

    <h1 class="text-2xl font-bold">Boostloss Settings</h1>
    <div class="bg-[#161c29] rounded-lg p-3 space-y-2 items-center">
        <div class="grid md:grid-cols-2 gap-5">
            <div class="flex justify-between items-center">
                <h1 class="text-xl font-semibold">Notification Title</h1>
                <TextInput placeholder="https://example.com/image.png"/>
            </div>
    
            <div class="flex justify-between items-center">
                <h1 class="text-xl font-semibold">Notification Description</h1>
                <TextInput/>
            </div>
        </div>

        <div class="flex justify-between items-center">
            <h1 class="text-xl font-semibold">Notification Image</h1>
            <TextInput/>
        </div>
    </div>
    
    <h1 class="text-2xl font-bold">DM Settings</h1>
    <div class="bg-[#161c29] rounded-lg p-3 space-y-2 items-center">
        <div class="flex justify-between items-center">
            <h1 class="text-xl font-semibold">Enable DMs</h1>
            <Switch/>
        </div>

        <div class="grid md:grid-cols-2 gap-5">
            <div class="flex justify-between items-center">
                <h1 class="text-xl font-semibold">DM Image</h1>
                <TextInput placeholder="https://example.com/image.png"/>
            </div>
    
            <div class="flex justify-between items-center">
                <h1 class="text-xl font-semibold">DM Message</h1>
                <TextInput/>
            </div>
        </div>
    </div>
</div>

<style>
    #server-banner {
        background: linear-gradient(rgba(0,0,0,0), #121826), url("https://cdn.discordapp.com/banners/260471731809026048/a2c3b43274724f46d19be1514cb62646.webp?size=480");
    }
</style>