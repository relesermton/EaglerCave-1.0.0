var r = await fetch('/EaglerCave-1.0.0/liblwjgl.so');
var buf = await r.arrayBuffer();
export default {
	wasmModule: buf
};
