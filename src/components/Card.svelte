<script>
    export let title = "";
</script>

<div class="h-[430px] lg:h-80 bg-[#ffffff04] rounded-lg outline outline-1 outline-[#cbd5e11a] p-6 space-y-2">
    <div class="text-2xl font-semibold">{title}</div>
    <div class="text-md text-gray-400">
        <slot/>
    </div>
</div>