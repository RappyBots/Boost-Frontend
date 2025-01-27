<script>
    /** @type {{name?: string, children?: import('svelte').Snippet}} */
    let { name = "", children } = $props();
</script>

<div class="flex justify-between items-center">
    <h1 class="text-xl font-semibold">{name}</h1>
    {@render children?.()}
</div>
