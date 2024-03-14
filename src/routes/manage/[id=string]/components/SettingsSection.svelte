<script>
    export let title = "";
</script>

<h1 class="text-2xl font-bold">{title}</h1>
<div class="bg-[#161c29] rounded-lg p-3 space-y-2 items-center">
    <slot/>
</div>