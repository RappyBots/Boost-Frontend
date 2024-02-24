<script lang="ts">
    export let className = "";
    export let href = "";
    export let target = "";
</script>

<a target="{target}" on:click href="{href}" class="flex py-2 px-4 rounded-lg font-semibold text-center no-underline items-center {className}">
    <slot/>
</a>