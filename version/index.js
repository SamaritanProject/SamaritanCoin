var cs = require('coinstring')

var hash160L = "0000000000000000000000000000000000000000" //hash representing uncompressed
var hash160H = "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF" //hash representing uncompressed
function startsWith(version) {
        var hash160Buf = new Buffer(hash160L, 'hex')
        lowEnd = cs.encode(hash160Buf, version).charAt(0);
        hash160Buf = new Buffer(hash160H, 'hex')
        highEnd = cs.encode(hash160Buf, version).charAt(0);
        if(lowEnd == highEnd) {
                return lowEnd;
        } else {
                return [lowEnd, highEnd];
        }
}
var version = 0x00; //Bitcoin public address
for(var i = 0; i < 1024; i++) {
        console.log(i + " will produce addresses starting with: " + startsWith(i));
}
