/**
 * Converts a character code from Hebrew script to Paleo-Hebrew script.
 *
 * This function is unchecked, meaning it assumes the character code belongs
 * to the Hebrew script, and otherwise returns an undefined value.
 */
export function charCodeUnchecked(charCode: number): number {
	return charCode <= 0x05d9
		? charCode + 0x10330
		: charCode >= 0x05e6
		? charCode + 0x1032b
		: [
				0x1090a, 0x1090a, 0x1090b, 0x1090c, 0x1090c, 0x1090d, 0x1090d, 0x1090e,
				0x1090f, 0x10910, 0x10910, 0x10911,
		  ][charCode - 0x05da];
}

/**
 * Converts a character code from Hebrew script to Paleo-Hebrew script.
 *
 * If the character code is not in the Hebrew script, returns undefined.
 */
export function charCode(charCode: number): number | undefined {
	return 0x05d0 <= charCode && charCode <= 0x05ea
		? charCodeUnchecked(charCode)
		: undefined;
}

/**
 * Converts the given character from Hebrew script to Paleo-Hebrew script.
 *
 * This function is unchecked, meaning it assumes the character belongs
 * to the Hebrew script, and otherwise returns an undefined value.
 */
export function charUnchecked(char: string): string {
	return String.fromCodePoint(charCodeUnchecked(char.charCodeAt(0)));
}

/**
 * Converts a character from Hebrew script to Paleo-Hebrew script.
 *
 * If the character code is not in the Hebrew script, returns undefined.
 */
export function char(char: string): string | undefined {
	const paleoCode = charCode(char.charCodeAt(0));
	return paleoCode ? String.fromCodePoint(paleoCode) : undefined;
}

/** Replaces the Hebrew characters in a string to their Paleo-Hebrew equivalent. */
export function string(str: string): string {
	return [...str]
		.map(char => {
			const paleoCode = charCode(char.charCodeAt(0));
			return paleoCode ? String.fromCodePoint(paleoCode) : char;
		})
		.join("");
}

export default string;
