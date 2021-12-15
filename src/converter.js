import proj4 from "proj4";
import getProj4Defs from "./Proj4EPSG";

const allProj4Defs = getProj4Defs();

class Converter {
	static allProj4Defs = getProj4Defs();

	constructor(inProj, outProj = 4326) {
		this.converter = proj4(
			allProj4Defs[`EPSG:${inProj}`],
			allProj4Defs[`EPSG:${outProj}`]
		);
	}
	convertToLatLng(x, y) {
		return this.converter.forward([x, y]);
	}

	convertFromLatLng(x, y) {
		return this.converter.inverse([x, y]);
	}
}

const defaultConverter = new Converter(2039, 4326);

export { defaultConverter, Converter };
