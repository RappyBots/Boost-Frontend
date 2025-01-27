<script lang="ts">
    import { createBubbler } from 'svelte/legacy';

    const bubble = createBubbler();
    interface Props {
        className?: string;
        href?: string;
        target?: string;
        children?: import('svelte').Snippet;
    }

    let {
        className = "",
        href = "",
        target = "",
        children
    }: Props = $props();
</script>

<a target="{target}" onclick={bubble('click')} href="{href}" class="flex py-2 px-4 rounded-lg font-semibold text-center no-underline justify-center items-center {className}">
    {@render children?.()}
</a>