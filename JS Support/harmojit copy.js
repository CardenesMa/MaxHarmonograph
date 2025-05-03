inlets = 4;
outlets = 1;

var f1 = 0;
var f2 = 0;
var f3 = 0;
var noise_amp = 0;

function msg_float(v) {
    if (inlet === 0) f1 = v;
    else if (inlet === 1) f2 = v;
    else if (inlet === 2) f3 = v;
	else if (inlet === 3) noise_amp = v / 2; // normalize to 0.5 for readaibility

    generate();
}


function generate() {
	if (noise_amp === 1 / 2) noise_amp = 0; // prevent unity noise
	
    var m = new JitterMatrix(3, "float32", 4000);
    for (var i = 0; i < 4000; i++) {
        var t = i * 0.1; // maximally 700 sectors
		var noise =  (i % 10 ) * noise_amp;
        var x = Math.sin(f1 * t) + Math.cos(noise) * noise_amp;
        var y = Math.sin(f2 * t) - Math.cos(noise) * noise_amp;
        var z = Math.sin(f3 * t) + Math.cos(noise) * noise_amp;


        m.setcell1d(i, [x, y, z]);
    }

    outlet(0, "jit_matrix", m.name);
}
