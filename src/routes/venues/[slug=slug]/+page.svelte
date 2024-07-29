<script lang="ts">
	import type { PageData } from '../$types';
	import { page } from '$app/stores';

    export let data: PageData;
    $: venue = data.target;
</script>

<h1>{venue.club_name}</h1>
<h4>{venue.neighborhood}</h4>
<pre>
    {JSON.stringify(venue, null, 2)}
</pre>
