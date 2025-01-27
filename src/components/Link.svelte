<script>
    /** @type {{href?: string, children?: import('svelte').Snippet}} */
    let { href = "", children } = $props();
</script>

<a target="_blank" href={href} class="text-primary hover:underline">
    {@render children?.()}
</a>