// Let's create our own strategy
var strat = {};

// Prepare everything our strat needs
strat.init = function() {
    this.addTulipIndicator('ema9', 'ema', {
        optInTimePeriod: 9
    });
    this.addTulipIndicator('ema26', 'ema', {
        optInTimePeriod: 26
    });
    // your code!
};

// What happens on every new candle?
strat.update = function(candle) {
   // console.log(candle)
   //  const ema9 = this.tulipIndicators.ema9.result.result;
   //  const ema26 = this.tulipIndicators.ema26.result.result;
   //
   //  if(ema9 > ema26 ){
   //      this.advice('long')
   //  }else {
   //      this.advice('short')
   //  }
};

// For debugging purposes.
strat.log = function() {
  // your code!
};

strat.check = function(candle) {
 //  console.log(this);
    
    const ema9 = this.tulipIndicators.ema9.result.result;
    const ema26 = this.tulipIndicators.ema26.result.result;

    if(ema9 > ema26 ){
        this.advice('long')
    }else {
        this.advice('short')
    
    }
};

// Optional for executing code
// after completion of a backtest.
// This block will not execute in
// live use as a live gekko is
// never ending.
strat.end = function() {
  // your code!
}

module.exports = strat;
