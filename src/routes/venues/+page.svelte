<script lang='ts'>
	import type { LayoutData, PageData } from "../$types";

    export let data: LayoutData
    $: ({venues} = data)
</script>

<h1>Comedy Clubs</h1>

{#each venues as {club_name, slug}}
    <h3>{club_name}</h3>
    <a href='/venues/{slug}'>{slug}</a>
{/each}
