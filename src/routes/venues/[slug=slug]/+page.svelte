<script lang="ts">
	import { page } from '$app/stores';
    console.log("FUCK")

    export async function load({ parent }) {
        const { venue } = await parent();
    }
</script>

<h1>The Cellar</h1>
<pre>
    {JSON.stringify($page, null, 2)}
</pre>
