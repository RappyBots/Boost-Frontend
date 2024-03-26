<script lang="ts">
    export let placeholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
    export let value = ""; // replace with writeable store
    export let onInput = (a: any) => {};
</script>

<input type="text" class="w-1/2 h-full p-2 bg-[#4949491a] rounded-lg outline-none" placeholder={placeholder} value={value} on:input={onInput}/>