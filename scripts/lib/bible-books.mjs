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
// may expound a whole collection (the four gospels, the Pauline corpus, I–IV Regum)
// and Migne prints it as one work. Silently filing it under one member would
// misdescribe it, so each collection keeps its own section.
//
// WHERE THEY SIT (Wilson, 2026-07-30): **in their area of the Bible, immediately
// before their first member** — the Pauline collections before Romans, Kings/Samuel
// before I Kings, the gospel harmonies before Matthew. Not gathered in an appendix
// at the end. The page then reads in canonical order the whole way down, and a
// reader going to Romans passes the commentaries on the whole corpus on his way in,
// which is very often what he actually wanted.
//
// Third element is the ANCHOR book: the group sorts just ahead of it.
export const GROUPS = [
  ['Kgs', 'Kings / Samuel (I–IV Regum, as a group)', '1Sam'],
  ['Proph', 'The Prophets (as a group)', 'Isa'],
  ['Gosp', 'The Gospels (as a group)', 'Matt'],
  ['Paul', 'The Pauline Epistles (as a group)', 'Rom'],
  ['Cor', 'Corinthians (I–II)', '1Cor'],
  ['Thess', 'Thessalonians (I–II)', '1Thess'],
  ['Tim', 'Timothy (I–II)', '1Tim'],
  ['Cath', 'The Catholic Epistles (as a group)', 'Jas'],
  ['Pet', 'Peter (I–II)', '1Pet'],
  ['Macc', 'Machabees (I–II)', '1Macc'],
];
export const GROUP_NAME = new Map(GROUPS.map(([k, n]) => [k, n]));

// Sort rank for any key, book or group. A group takes its anchor's rank minus a
// half-step, which places it immediately before that book and nowhere else.
export const rankOf = key =>
  BOOK_ORDER.has(key) ? BOOK_ORDER.get(key)
    : (g => g ? BOOK_ORDER.get(g[2]) - 0.5 : 9999)(GROUPS.find(g => g[0] === key));
