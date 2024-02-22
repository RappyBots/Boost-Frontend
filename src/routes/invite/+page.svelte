<script>
    import { onMount } from 'svelte';

    onMount(() => {
        window.location.href = "https://discord.com/api/oauth2/authorize?client_id=1067880912538304583&permissions=8&scope=applications.commands%20bot";
    });
</script>

<div class="flex h-screen justify-center items-center text-4xl font-black">
    Redirecting...
</div>