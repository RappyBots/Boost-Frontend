<script>
    export let url = "";

    import { onMount } from 'svelte';

    onMount(() => {
        window.location.href = url;
    });
</script>

<div class="flex flex-1 h-full justify-center items-center text-4xl font-black">
    Redirecting...
</div>