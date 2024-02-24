<script>
    export let href = "";
</script>

<a target="_blank" href={href} class="text-primary hover:underline">
    <slot />
</a>