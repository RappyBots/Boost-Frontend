<script>
	import { page } from '$app/stores';
</script>

<div class="flex flex-col h-screen justify-center items-center space-y-1">
    <div class="text-6xl font-black">
        {$page.status}
    </div>
    <div class="text-3xl">{$page.error?.message || "Unknown error"}</div>
</div>