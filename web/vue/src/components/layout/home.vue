<template lang='pug'>
  section.contain.grd-row
    .grd-row-col-3-12(v-html='text')
</template>

<script>
import marked from '../../tools/marked';

const text = marked(`

# Your Complete Brokerage Solution STARTS HERE!
## A Powerful platform for Exchange markets

BitBot is a Bitcoin trading bot platform that
connects to popular Bitcoin exchanges.


`);

export default {
  data: () => {
    return {
      text
    }
  }
}
</script>
