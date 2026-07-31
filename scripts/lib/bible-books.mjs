// Canonical book order + display names, shared by every page that groups by book.
//
// Extracted from build-scripture-index.mjs 2026-07-30 when /scripture/commentaries/
// needed the same table. Two copies of a 73-row ordering WILL drift, and the drift
// would be silent: a page would simply file a book in the wrong place.
//
// Order is the VULGATE's (Migne's), so a reader of this corpus finds books where he
// expects them — the deuterocanon interleaved, not appended. Display names carry the
// Vulgate name first with the modern one parenthesized where they differ, because
// "I Kings" means 1 Samuel here and a reader who does not know that is lost.
// OSIS codes are exactly what index-work.mjs emits.

export const BOOKS = [
  ['Gen', 'Genesis'], ['Exod', 'Exodus'], ['Lev', 'Leviticus'], ['Num', 'Numbers'],
  ['Deut', 'Deuteronomy'], ['Josh', 'Joshua'], ['Judg', 'Judges'], ['Ruth', 'Ruth'],
  ['1Sam', 'I Kings (1 Samuel)'], ['2Sam', 'II Kings (2 Samuel)'],
  ['1Kgs', 'III Kings (1 Kings)'], ['2Kgs', 'IV Kings (2 Kings)'],
  ['1Chr', 'I Paralipomenon'], ['2Chr', 'II Paralipomenon'],
  ['Ezra', 'I Esdras'], ['Neh', 'II Esdras (Nehemiah)'], ['Tob', 'Tobit'],
  ['Jdt', 'Judith'], ['Esth', 'Esther'], ['Job', 'Job'], ['Ps', 'Psalms'],
  ['Prov', 'Proverbs'], ['Eccl', 'Ecclesiastes'], ['Song', 'Song of Songs'],
  ['Wis', 'Wisdom'], ['Sir', 'Ecclesiasticus'], ['Isa', 'Isaiah'], ['Jer', 'Jeremiah'],
  ['Lam', 'Lamentations'], ['Bar', 'Baruch'], ['Ezek', 'Ezekiel'], ['Dan', 'Daniel'],
  ['Hos', 'Hosea'], ['Joel', 'Joel'], ['Amos', 'Amos'], ['Obad', 'Obadiah'],
  ['Jonah', 'Jonah'], ['Mic', 'Micah'], ['Nah', 'Nahum'], ['Hab', 'Habakkuk'],
  ['Zeph', 'Zephaniah'], ['Hag', 'Haggai'], ['Zech', 'Zechariah'], ['Mal', 'Malachi'],
  ['1Macc', 'I Machabees'], ['2Macc', 'II Machabees'],
  ['Matt', 'Matthew'], ['Mark', 'Mark'], ['Luke', 'Luke'], ['John', 'John'],
  ['Acts', 'Acts'], ['Rom', 'Romans'], ['1Cor', 'I Corinthians'], ['2Cor', 'II Corinthians'],
  ['Gal', 'Galatians'], ['Eph', 'Ephesians'], ['Phil', 'Philippians'], ['Col', 'Colossians'],
  ['1Thess', 'I Thessalonians'], ['2Thess', 'II Thessalonians'],
  ['1Tim', 'I Timothy'], ['2Tim', 'II Timothy'], ['Titus', 'Titus'], ['Phlm', 'Philemon'],
  ['Heb', 'Hebrews'], ['Jas', 'James'], ['1Pet', 'I Peter'], ['2Pet', 'II Peter'],
  ['1John', 'I John'], ['2John', 'II John'], ['3John', 'III John'], ['Jude', 'Jude'],
  ['Rev', 'Apocalypse'],
];

export const BOOK_ORDER = new Map(BOOKS.map(([k], i) => [k, i]));
export const BOOK_NAME = new Map(BOOKS);

// GROUPS are keys the commentary map uses that are NOT single OSIS books: a work
// may expound a whole collection (the four gospels, the Pauline corpus, the twelve
// prophets) and Migne prints it as one work. They sort after the canonical books
// and are rendered in their own section rather than filed under a member book —
// silently picking one member would misdescribe the work.
export const GROUPS = [
  ['Gosp', 'The Gospels (as a group)'],
  ['Paul', 'The Pauline Epistles (as a group)'],
  ['Cath', 'The Catholic Epistles (as a group)'],
  ['Proph', 'The Prophets (as a group)'],
  ['Kgs', 'Kings / Samuel (I–IV Regum)'],
  ['Cor', 'Corinthians (I–II)'], ['Thess', 'Thessalonians (I–II)'],
  ['Tim', 'Timothy (I–II)'], ['Pet', 'Peter (I–II)'], ['Macc', 'Machabees (I–II)'],
];
export const GROUP_NAME = new Map(GROUPS);
