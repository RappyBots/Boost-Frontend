<script lang="ts">
    export let className = "";
    export let href = "";
</script>

<a on:click href="{href}" class="flex py-2 px-4 rounded-lg font-semibold text-center no-underline bg-primary {className}">
    <slot/>
</a>