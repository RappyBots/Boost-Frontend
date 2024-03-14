<script>
    let checked = false;
</script>

<div class="relative flex w-16 h-8 rounded-full transition duration-100 ease-in-out {checked ? 'bg-primary' : 'bg-gray-700'}">
    <div class="flex rounded-full bg-white shadow-md justify-center items-center h-6 w-6 m-1 transition duration-100 ease-in-out {checked ? "translate-x-8" : "translate-x-0"}"/>
    <input type="checkbox" class="absolute opacity-0 w-full h-full cursor-pointer" id="switch" bind:checked={checked}/>
</div>