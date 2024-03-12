<script>
    import DiscordLogo from "$lib/images/discord-mark-white.png"
    import Switch from "$components/Switch.svelte"
    import TextInput from "$components/TextInput.svelte"
	import SettingsSection from "./components/SettingsSection.svelte";
	import Setting from "./components/Setting.svelte";
	import Dropdown from "$components/Dropdown.svelte";
</script>

<div class="sticky top-20 flex items-center bg-gradient-to-b from-[rgba(0,0,0,.4)] to-transparent w-full p-4 space-x-3">
    <img
        src={DiscordLogo} alt="Logo of Discord"
        class="w-12 h-12 object-contain rounded-full bg-[#35383f]"
    />
    <h1 class="text-2xl font-bold">Discord</h1>
</div>

<div class="-mt-20 w-full h-64 bg-contain -z-10" id="server-banner"/>

<div class="p-4 space-y-3 lg:px-32 pb-8">
    <SettingsSection title="Boost Settings">
        <div class="grid md:grid-cols-2 gap-5">
            <Setting name="Notification Title">
                <TextInput placeholder="https://example.com/image.png"/>
            </Setting>
    
            <Setting name="Notification Description">
                <TextInput/>
            </Setting>
        </div>

        <Setting name="Notification Image">
            <TextInput/>
        </Setting>

        <Setting name="Notification Channel">
            <Dropdown options={
                [
                    { label: "General", value: "general" },
                    { label: "Boost", value: "boost" },
                    { label: "Boosters", value: "boosters" }
                ]
            }/>
        </Setting>
    </SettingsSection>

    <SettingsSection title="Boostloss Settings">
        <div class="grid md:grid-cols-2 gap-5">
            <Setting name="Notification Title">
                <TextInput placeholder="https://example.com/image.png"/>
            </Setting>
    
            <Setting name="Notification Description">
                <TextInput/>
            </Setting>
        </div>

        <Setting name="Notification Image">
            <TextInput/>
        </Setting>
    </SettingsSection>

    <SettingsSection title="Role Settings">
        <div class="space-y-2">
            <div class="flex justify-between">
                <div>Lorem Ipsum</div>
                <button class="font-bold">X</button>
            </div>
            <div class="flex justify-between">
                <div>Lorem Ipsum</div>
                <button class="font-bold">X</button>
            </div>
            <div class="flex justify-between">
                <div>Lorem Ipsum</div>
                <button class="font-bold">X</button>
            </div>
        </div>

        <Setting name="Add Role">
            <Dropdown options={[
                { label: "Role 1", value: "role1" },
                { label: "Role 2", value: "role2" },
                { label: "Role 3", value: "role3" }
            ]}/>
        </Setting>
    </SettingsSection>
    
    <SettingsSection title="DM Settings">
        <Setting name="Enable DMs">
            <Switch/>
        </Setting>

        <div class="grid md:grid-cols-2 gap-5">
            <Setting name="DM Image">
                <TextInput placeholder="https://example.com/image.png"/>
            </Setting>

            <Setting name="DM Message">
                <TextInput/>
            </Setting>
        </div>
    </SettingsSection>
</div>

<style>
    #server-banner {
        background: linear-gradient(rgba(0,0,0,0), #121826), url("https://cdn.discordapp.com/banners/260471731809026048/a2c3b43274724f46d19be1514cb62646.webp?size=640");
    }
</style>