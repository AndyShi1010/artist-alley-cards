<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { CardEntry } from '../types/types';
    import type { LayoutData } from './$types';
    import { base } from '$app/paths';

    let { data, children }: { data: LayoutData, children: Snippet } = $props();
</script>

{@render children()}