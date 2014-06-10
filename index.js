var board = require('leo-board');
var arduinoPlatform = require('leo-platform-arduino');
var aprefs = require("arduino-preferences");
var path = require('path');

var pinoccio = board();
pinoccio.name = "Pinoccio Scout";
pinoccio.cpu = "atmega256rfr2";
pinoccio.platform = function(){
  var ret = arduinoPlatform.apply(this,arguments);

  var prefs = aprefs(); 
  // add pinoccio variant to includes just in case the firware is installed in the core files
  ret.includes.push(path.join(ret.runtime.ide.path,'hardware/pinoccio/avr/variants/pinoccio'))

  if(prefs){
    prefs = prefs[0];
    if(prefs['sketchbook.path']){
      // add sketchbook path to includes just in case the firmware is in the sketchbook
      ret.includes.push(path.join(prefs['sketchbook.path'],'hardware/pinoccio/avr/variants/pinoccio'))
    }
  }

  return ret;
}

pinoccio.upload.tool = "avrdude";
pinoccio.upload.protocol = "arduino";
pinoccio.upload.maximum_size = 253952;
pinoccio.upload.speed = 115200

pinoccio.bootloader.tool = "avrdude"
pinoccio.bootloader.low_fuses = "0xDE"
pinoccio.bootloader.high_fuses = "0xD0"
pinoccio.bootloader.extended_fuses = "0xFE"
pinoccio.bootloader.unlock_bits = "0x3F"
pinoccio.bootloader.lock_bits = "0x2F"
pinoccio.bootloader.file = "STK500RFR2/release_0.51/boot_pinoccio.hex"


pinoccio.build.mcu = 'atmega256rfr2'
pinoccio.build.f_cpu = "16000000L"
pinoccio.build.board = "PINOCCIO"
pinoccio.build.core = "arduino"
pinoccio.build.variant = "pinoccio"
//# Workaround for https://github.com/arduino/Arduino/pull/1695
pinoccio.build.extra_flags = "-D__PROG_TYPES_COMPAT__"

module.exports = {pinoccio:pinoccio};

