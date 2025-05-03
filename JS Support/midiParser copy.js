inlets = 1;
outlets = 3;

var storage = [0, 0, 0];

function list(note, velocity) {
    if (velocity !== 0) {
        noteOn(note);
    } else {
        noteOff(note);
    }
}

function noteOn(note) {
    if (storage.indexOf(note) === -1) {
        for (var i = 0; i < 3; i++) {
            if (storage[i] === 0) {
                storage[i] = note;
                break;
            }
        }
    }
    output();
}

function noteOff(note) {
    for (var i = 0; i < 3; i++) {
        if (storage[i] === note) {
            storage[i] = 0;
            break;
        }
    }
    output();
}

function output() {
    outlet(0, storage[0]);
    outlet(1, storage[1]);
    outlet(2, storage[2]);
}
