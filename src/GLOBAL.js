const GLOBAL = {
	formatCreditNumber(value) {
		return value?.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ");
	}
}
export default GLOBAL
