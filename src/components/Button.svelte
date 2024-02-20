<script lang="ts">
    export let className = "";
    export let href = "";
</script>

<a on:click href="{href}" class="flex py-3 px-6 rounded-lg text-lg font-semibold text-center no-underline bg-primary {className}">
    <slot/>
</a>