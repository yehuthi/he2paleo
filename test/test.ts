import * as he2paleo from "../src/index";
import { describe, it } from "mocha";
import * as assert from "assert";

const testCases: [string, string][] = [
	["א", "𐤀"],
	["ב", "𐤁"],
	["ג", "𐤂"],
	["ד", "𐤃"],
	["ה", "𐤄"],
	["ו", "𐤅"],
	["ז", "𐤆"],
	["ח", "𐤇"],
	["ט", "𐤈"],
	["י", "𐤉"],
	["כ", "𐤊"],
	["ך", "𐤊"],
	["ל", "𐤋"],
	["מ", "𐤌"],
	["ם", "𐤌"],
	["נ", "𐤍"],
	["ן", "𐤍"],
	["ס", "𐤎"],
	["ע", "𐤏"],
	["פ", "𐤐"],
	["ף", "𐤐"],
	["צ", "𐤑"],
	["ץ", "𐤑"],
	["ק", "𐤒"],
	["ר", "𐤓"],
	["ש", "𐤔"],
	["ת", "𐤕"],
];

describe("he2paleo", () => {
	describe("char", () => {
		for (const [hebrew, paleo] of testCases) {
			it(`${hebrew} yields ${paleo}`, () =>
				assert.equal(he2paleo.char(hebrew), paleo));
		}

		describe("yields undefined for non-Hebrew", () => {
			const examples = ["b", " ", "\n", "'", '"', "5", "!", "𐤋", ""];
			for (const example of examples)
				it(JSON.stringify(example), () =>
					assert.equal(he2paleo.char(example), undefined)
				);
		});
	});

	it("string", () => {
		assert.equal(he2paleo.string("שלwm עwלm!"), "𐤔𐤋wm 𐤏w𐤋m!");
	});

	describe("unchecked", () => {
		describe("char", () => {
			for (const [hebrew, paleo] of testCases) {
				it(`${hebrew} yields ${paleo}`, () =>
					assert.equal(he2paleo.charUnchecked(hebrew), paleo));
			}
		});
	});
});
