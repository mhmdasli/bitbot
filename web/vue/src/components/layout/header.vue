<template lang='pug'>
  div
    #top
    header.bg--off-white.grd
      .contain.grd-row
        h3.py1.px2.col-2 BitBot
      .contain.grd-row
        router-link(to='/live-gekkos').py1.btn--primary Live
        router-link(to='/backtest').py1.btn--primary Test
        router-link(to='/config').py1.btn--primary Config
</template>

<script>
export default {}
</script>





