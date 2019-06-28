function Thermostat() {
  this.savingSwitch = true;
  this.medium_energy_usage_mode = 18;
  this.defaulttemp = 20;
  const DEFAULTTEMP = 20;
  const MINTEMP = 10;
  const MAXTEMPONPOWERSAVING= 25;
  const MAXTEMPONPOWERSAVINGOFF = 32;


  this.defaultTemperature = function() {
      return DEFAULTTEMP;
      //return this.defaulttemp;
  };

  this.temp = DEFAULTTEMP;

  //this.defaulttemp=20;

  this.up = function(){
  // if temp > 25  and power switch is on then we can't have it higher
    if (this.temp < MAXTEMPONPOWERSAVING && this.savingSwitch===true) {
      this.temp++;
    } else if (this.temp < MAXTEMPONPOWERSAVINGOFF && this.savingSwitch===false) {
        this.temp ++;
      }

    return this.temp;
  };

  this.down = function() {

    if (this.temp > MINTEMP) {
      this.temp --;
    }
      return this.temp;
  };

  this.minTemp = function() {
    return MINTEMP;
  };

  this.powerSavingOn = function(){
    this.savingSwitch = true
    ///
    // if (this.temp >25 && this.savingSwitch=== false) {
    //   this.temp = 25 ;
    // }

  };

  this.powerSavingOff = function(){
    this.savingSwitch = false
  };

  this.reset = function() {

    this.temp =20
  };

  this.energyUsage = function() {
    if (this.temp < this.medium_energy_usage_mode) {
      return "low-usage";
    } else if (this.temp >= this.medium_energy_usage_mode && this.temp <= MAXTEMPONPOWERSAVING) {
      return "medium-usage";
    } else {
    return "high-usage"
    }
  }

};

//Thermostat.prototype.defaultTemperature = function() {
 // return 20;
//};
