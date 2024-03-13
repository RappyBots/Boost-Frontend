<script lang="ts">
    import DiscordLogo from "$lib/images/discord-mark-white.png"
    import Switch from "$components/Switch.svelte"
    import TextInput from "$components/TextInput.svelte"
	import SettingsSection from "./components/SettingsSection.svelte";
	import Setting from "./components/Setting.svelte";
	import Dropdown from "$components/Dropdown.svelte";
	import { getCookie } from "../../../utils/cookies";
	import { onMount } from "svelte";
	import { discord } from "../../../config";

    export let data: {
        id: string
    };

    let server: {
        id: string,
        name: string,
        icon?: string,
        banner?: string,
        messages?: {
            add?: {
                title?: string,
                description?: string,
            },
            loss?: {
                title?: string,
                description?: string,
            },
            dm?: string
        },
        image?: {
            boost?: string,
            loss?: string,
            dm?: string
        }
    };

	onMount(async () => {
        const token = getCookie("token")
		if (!token || !token.value) {
			window.location.href = `https://discord.com/oauth2/authorize?client_id=${discord.clientID}&response_type=code&redirect_uri=${encodeURIComponent(`${window.location.origin}/api/discord/callback`)}&scope=identify+guilds`
			return
		} 

		await fetch("/api/discord/guild/" + data.id, {
			credentials: "same-origin"
		}).then(async (res) => {
			if (res.status === 401 || res.status === 400) {
				window.location.href = "/manage"
			}

			server = await res.json()
		})
    })
</script>

<div class="sticky top-20 flex items-center bg-gradient-to-b from-[rgba(0,0,0,.4)] to-transparent w-full p-4 space-x-3">
    <img
        src={server?.icon ? `https://cdn.discordapp.com/icons/${server.id}/${server.icon}.webp?size=96` : DiscordLogo} alt="Logo of Discord"
        class="w-12 h-12 object-contain rounded-full bg-[#35383f]"
    />
    <h1 class="text-2xl font-bold">{server?.name || "Loading..."}</h1>
</div>

<img 
    class="flex justify-center items-center -mt-20 w-full h-64 bg-contain -z-10 bg-[#35383f] text-4xl font-bold"
    style={`background: linear-gradient(rgba(0,0,0,0), #121826), ${server?.banner ? `url("https://cdn.discordapp.com/banners/${server.id}/${server.banner}.webp?size=640")` : "#35383f"};`}
    alt={server?.name || "Loading..."}
/>

<!-- TODO: Fetch channels and roles from Discord -->
<div class="p-4 space-y-3 lg:px-32 pb-8">
    <SettingsSection title="Boost Settings">
        <div class="grid md:grid-cols-2 gap-5">
            <Setting name="Notification Title">
                <TextInput placeholder="https://example.com/image.png" value={server?.messages?.add?.title || ""}/>
            </Setting>
    
            <Setting name="Notification Description">
                <TextInput value={server?.messages?.add?.title || ""}/>
            </Setting>
        </div>

        <Setting name="Notification Image">
            <TextInput value={server?.image?.boost || ""}/>
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

    <SettingsSection title="Boost Settings">
        <div class="grid md:grid-cols-2 gap-5">
            <Setting name="Notification Title">
                <TextInput placeholder="https://example.com/image.png" value={server?.messages?.loss?.title || ""}/>
            </Setting>
    
            <Setting name="Notification Description">
                <TextInput value={server?.messages?.loss?.title || ""}/>
            </Setting>
        </div>

        <Setting name="Notification Image">
            <TextInput value={server?.image?.loss || ""}/>
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
                <TextInput placeholder="https://example.com/image.png" value={server?.image?.dm || ""}/>
            </Setting>

            <Setting name="DM Message">
                <TextInput value={server?.messages?.dm || ""}/>
            </Setting>
        </div>
    </SettingsSection>
</div>