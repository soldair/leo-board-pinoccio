var board = require('leo-board');


var pinoccio = board();
pinoccio.name = "Pinoccio Scout";
pinoccio.cpu = "atmega256rfr2";

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

