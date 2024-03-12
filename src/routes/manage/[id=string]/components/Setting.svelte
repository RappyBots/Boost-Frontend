<script>
    export let name = "";
</script>

<div class="flex justify-between items-center">
    <h1 class="text-xl font-semibold">{name}</h1>
    <slot/>
</div>
