import * as localTypes from "./local-types";
import * as remoteTypes from "./remote-types";

const types = { ...localTypes.default, ...remoteTypes.default };

export default types;
