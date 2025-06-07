<script lang="ts">
    import type { PageData } from './$types';
    import { base } from '$app/paths'

    let { data }: { data: PageData } = $props();

	// let { items }: PageData = $props();
    // let items: any[] = ['tt', 'tt2', 'tt3']
    // let { data }: PageProps = $props()
    // let items: CardEntry[] = (data as { data: CardEntry[] }).data;
    // console.log(items)
    
</script>

<div>
<h1>Home</h1>

{#each data.thumbs as item, i}
    <div>
        <a href={base + "/" + item.path}>{item.name}</a>
    </div>
{/each}
<!-- {#await data}
    <p>Loading...</p>
{:then data} 
    
{/await} -->

</div>
