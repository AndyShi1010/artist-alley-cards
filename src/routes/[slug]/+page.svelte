<script lang='ts'>
    import type {PageProps} from './$types'
    import type { CardEntry } from '../../types/types';

    let { data } = $props();

    console.log(data.entry);

</script>

<h1>{data.entry.name}</h1>