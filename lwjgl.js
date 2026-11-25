var r = await fetch('/liblwjgl.so');
var buf = await r.arrayBuffer();
export default {
	wasmModule: buf
};
