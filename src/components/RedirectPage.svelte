<script>

    import { onMount } from 'svelte';
    /** @type {{url?: string}} */
    let { url = "" } = $props();

    onMount(() => {
        window.location.href = url;
    });
</script>

<div class="flex h-screen justify-center items-center text-4xl font-black">
    Redirecting...
</div>