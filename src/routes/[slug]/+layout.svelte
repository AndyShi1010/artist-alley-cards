<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { LayoutData } from './$types';
    import { base } from '$app/paths';

    let { data, children }: { data: LayoutData, children: Snippet } = $props();
</script>

<a href={base}>Home</a>

{@render children()}