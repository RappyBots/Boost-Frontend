<script>
    /** @type {{title?: string, children?: import('svelte').Snippet}} */
    let { title = "", children } = $props();
</script>

<div class="h-[430px] lg:h-80 bg-[#ffffff04] rounded-lg outline outline-1 outline-[#cbd5e11a] p-6 space-y-2">
    <div class="text-2xl font-semibold">{title}</div>
    <div class="text-md text-gray-400">
        {@render children?.()}
    </div>
</div>