<script lang='ts'>
	import { enhance } from "$app/forms";
	import type { SubmitFunction } from "@sveltejs/kit";
	import type { ActionData } from "./$types";

    export let userSelected = 'comedy_club';
    let loading = false;
    export let results: Object = {};

    const addVenue: SubmitFunction = (input) => {
        loading = true;

        return async (options) => {
            loading = false;
            results = options.result;
        }
    }
</script>

<h1>New Venue</h1>

<!-- {#if results?.data?.errors}
<pre>
    {JSON.stringify(results, null, 2)}
</pre>
{/if} -->

<form method="POST" action="?/addVenue" use:enhance={addVenue}>
    <h5>Name</h5>
    <input type="text" name="venue_name" disabled={loading}/>
    {#if results?.data?.errors?.venue_name}
    <p class="error">Name required</p>
    {/if}

    <h5>Neighborhood</h5>
    <input type="text" name="hood" disabled={loading}/>
    {#if results?.data?.errors?.hood}
    <p class="error">Neighborhood required</p>
    {/if}

    <h5>Address</h5>
    <input type="text" name="address" disabled={loading}/>
    {#if results?.data?.errors?.address}
    <p class="error">Address required</p>
    {/if}

    <h5>Website</h5>
    <input type="url" name="website" disabled={loading}/>
    {#if results?.data?.errors?.website}
    <p class="error">Website required</p>
    {/if}


    <div>
        <h5>venue type</h5>
        <input type="radio" name="type" value='comedy_club' bind:group={userSelected} disabled={loading}/>
        <label for='comedy_club'>Comedy Club</label>
        <input type="radio" name="type" value='bar' bind:group={userSelected} disabled={loading}/>
        <label for="bar">Bar</label>
        <input type="radio" name="type" value='other' bind:group={userSelected} disabled={loading}/>
        <label for="other">other</label>
        {#if userSelected == 'other'}
        <input type="text" name="type" disabled={loading}/>
        {/if}
        
    </div>
    <button aria-busy={loading} class:secondary={loading} type="submit">
        {#if !loading}
            Submit
        {/if}
    </button>
</form>

<style>
    .error {
        color: tomato;
    }
</style>