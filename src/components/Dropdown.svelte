<script lang="ts">
    import ExpandMore from "$lib/images/expand-more.svg";
    import { slide } from "svelte/transition";

    type Option = {
        label: String,
        value: any,
        default?: Boolean
    }


    interface Props {
        options?: Option[];
        onChange?: (option: Option) => void;
    }

    let { options = [], onChange = () => {} }: Props = $props();

    let selected = $state(options.find(option => option.default) || { label: "Select...", value: "" });
    let isOpen = $state(false);
</script>

<div class="z-10">
    <button class="flex h-full p-2 bg-[#4949491a] cursor-pointer select-none rounded-lg " onclick={() => isOpen = !isOpen}>
        {selected.label}
        <img src={ExpandMore} alt="Expand More" draggable="false" class="transition-all {isOpen ? 'rotate-180' : ''}"/>
    </button>
    
    {#if isOpen}
        <div class="absolute flex flex-col items-center rounded-lg bg-[#212735] mt-1 p-1 space-y-1" transition:slide={{
            duration: 200,
        }}>
            {#each options as option}
                <button class="w-full cursor-pointer hover:bg-[#75757575] rounded-lg mx-4" onclick={() => {selected = option; isOpen = false; onChange(option)}}>
                    {option.label}
                </button>
            {/each}
        </div>
    {/if}
</div>