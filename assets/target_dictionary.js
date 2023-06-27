const target_dictionary = {"WHEEL": 1, "SHOOK": 1, "RILLS": 1, "EAGLE": 1, "OLDER": 1, "FETCH": 1, "CRIED": 1, "LYING": 1, "HOVER": 1, "TEENS": 1, "NEEDY": 1, "AROSE": 1, "HOOFS": 1, "LONGS": 1, "FACTS": 1, "PLACE": 1, "AWARE": 1, "PATHS": 1, "TANTA": 1, "QUAIL": 1, "OPENS": 1, "NOMAN": 1, "SPEAR": 1, "SILME": 1, "GUILD": 1, "LINES": 1, "WADED": 1, "HOCKS": 1, "REIGN": 1, "CITED": 1, "WALDA": 1, "CHEST": 1, "HATES": 1, "TUNES": 1, "HORDE": 1, "BILBO": 1, "FORTH": 1, "SIXTH": 1, "PLEAS": 1, "AMONG": 1, "TWIST": 1, "KNOCK": 1, "FOLKS": 1, "HEIRS": 1, "RODYN": 1, "HACKS": 1, "SWORE": 1, "HELLO": 1, "FLEWS": 1, "BOLES": 1, "FRAME": 1, "SURLY": 1, "DERRY": 1, "BARER": 1, "PLOTS": 1, "VERGE": 1, "BEARS": 1, "GIFTS": 1, "GRASP": 1, "BROOK": 1, "RIFTS": 1, "FLEET": 1, "FERRY": 1, "NOTES": 1, "HILLY": 1, "MOUSE": 1, "STAIN": 1, "WOVEN": 1, "PATCH": 1, "FLOCK": 1, "REMBE": 1, "CARGO": 1, "BENDS": 1, "RISKS": 1, "FRAIL": 1, "NOBLE": 1, "OFFER": 1, "SPENT": 1, "PATED": 1, "ARWEN": 1, "GELIN": 1, "AHEAD": 1, "PRAYS": 1, "CLEAR": 1, "FLOWS": 1, "BONES": 1, "ALLEY": 1, "DUNES": 1, "TOAST": 1, "AWAIT": 1, "UNGOL": 1, "HABIT": 1, "DRIVE": 1, "HASTY": 1, "HUORN": 1, "CAUSE": 1, "KINDS": 1, "ERAIN": 1, "THICK": 1, "CLASP": 1, "DROGO": 1, "LITHE": 1, "COUNT": 1, "STRIP": 1, "POWER": 1, "CHOKE": 1, "TABLE": 1, "SMART": 1, "SCOWL": 1, "POINT": 1, "SPEAK": 1, "DOMES": 1, "FORGE": 1, "LANDS": 1, "HEWED": 1, "UTTER": 1, "THAIN": 1, "LORDS": 1, "GIDDY": 1, "SHAPE": 1, "QUAYS": 1, "SHIRT": 1, "KIBIL": 1, "BELTS": 1, "BREAD": 1, "GUARD": 1, "VOUCH": 1, "GRASS": 1, "TALAN": 1, "PLANT": 1, "LOCKS": 1, "SWIFT": 1, "ROBED": 1, "ASHEN": 1, "TRUCK": 1, "EATEN": 1, "DATES": 1, "TEMPT": 1, "OSSIR": 1, "VEINS": 1, "DRUNK": 1, "COWER": 1, "TAMED": 1, "LAKES": 1, "BOWER": 1, "GOING": 1, "DULLY": 1, "COMES": 1, "BREGO": 1, "GREAT": 1, "SNAIL": 1, "WROTE": 1, "STINK": 1, "FOLCO": 1, "WINDS": 1, "BLANK": 1, "LOTHL": 1, "VAGUE": 1, "WROTH": 1, "BRAIN": 1, "CARTE": 1, "WORKS": 1, "SHIPS": 1, "LARGE": 1, "LUSTY": 1, "DRINK": 1, "CERTH": 1, "MIGHT": 1, "SLANT": 1, "GALAB": 1, "AWOKE": 1, "FLAGS": 1, "SOUTH": 1, "DRANK": 1, "MARKS": 1, "CEDED": 1, "HUTCH": 1, "VOTES": 1, "AFTER": 1, "FOWLS": 1, "GIVEN": 1, "WORSE": 1, "PAINT": 1, "GUEST": 1, "WISER": 1, "FULLY": 1, "BARNS": 1, "NOOKS": 1, "SNORT": 1, "WEIGH": 1, "HORSE": 1, "CLINK": 1, "SEEMS": 1, "ABOVE": 1, "HOARD": 1, "DREAM": 1, "PUNCH": 1, "FAILS": 1, "WANLY": 1, "WILDS": 1, "LOVER": 1, "SIDED": 1, "BREED": 1, "TRUST": 1, "YARDS": 1, "HALLO": 1, "DRUMS": 1, "CHINK": 1, "SPASM": 1, "QUOTE": 1, "BROTH": 1, "SHEEN": 1, "DELTA": 1, "BLEAK": 1, "ESTEL": 1, "RUINS": 1, "HEAVE": 1, "KNEES": 1, "FOSSE": 1, "LISTS": 1, "USERS": 1, "OCCUR": 1, "THIEF": 1, "SOUND": 1, "GRIEF": 1, "CLAIM": 1, "BUDGE": 1, "COMIC": 1, "PERKY": 1, "SWING": 1, "ISSUE": 1, "BLACK": 1, "HAZES": 1, "WRUNG": 1, "TASTE": 1, "WOMBS": 1, "ROADS": 1, "FURRY": 1, "WORTH": 1, "RUSTY": 1, "SPOON": 1, "FIELD": 1, "UNQUE": 1, "STOPS": 1, "NICHE": 1, "LOVED": 1, "BRIEF": 1, "SNICK": 1, "VOICE": 1, "ISLET": 1, "WHEEW": 1, "STUCK": 1, "ANGER": 1, "NOHOW": 1, "WAXES": 1, "TESTY": 1, "BENCH": 1, "FANGS": 1, "BEGAN": 1, "BALLS": 1, "SLINK": 1, "SMILE": 1, "SHALE": 1, "POSTS": 1, "WALLS": 1, "HELMS": 1, "RUNDA": 1, "PAGES": 1, "LURCH": 1, "WHOOP": 1, "NOBLY": 1, "SHEEP": 1, "FORTS": 1, "BEAST": 1, "THOND": 1, "ROOTS": 1, "SNIPS": 1, "WORMS": 1, "STONE": 1, "FIRES": 1, "WESTU": 1, "MAYBE": 1, "VERSE": 1, "HOURS": 1, "SAWED": 1, "FLUNG": 1, "TRACE": 1, "GATES": 1, "TIMID": 1, "WEARS": 1, "HARMA": 1, "AFORE": 1, "DIKES": 1, "CELEB": 1, "TRUTH": 1, "BOXES": 1, "PIECE": 1, "PEAKS": 1, "PARMA": 1, "CHALK": 1, "SAILS": 1, "SLATE": 1, "TOWER": 1, "ABOUT": 1, "HOPES": 1, "LASSE": 1, "MURKY": 1, "SANDY": 1, "SHORT": 1, "DWARF": 1, "RUDDY": 1, "RALLY": 1, "FORMS": 1, "SNIFF": 1, "VEILS": 1, "GLADE": 1, "CAIRN": 1, "NOSES": 1, "FLAKE": 1, "FISSH": 1, "PACES": 1, "HENCE": 1, "SINCE": 1, "GAYER": 1, "CHASM": 1, "CHUBB": 1, "START": 1, "CHIEF": 1, "MAGIC": 1, "FLEES": 1, "HOLDS": 1, "GUESS": 1, "PLANK": 1, "TILDE": 1, "POSED": 1, "DUSTY": 1, "REEDS": 1, "TITLE": 1, "GALAD": 1, "CAVES": 1, "STING": 1, "BALIN": 1, "WARMS": 1, "EAGER": 1, "DIDST": 1, "STUNG": 1, "CORDS": 1, "SEALS": 1, "ARRAY": 1, "RANGE": 1, "RAZED": 1, "HEALS": 1, "LUNCH": 1, "GIVES": 1, "SOOTH": 1, "TORCH": 1, "LINKS": 1, "SLEEK": 1, "RENTS": 1, "THEME": 1, "BOLTS": 1, "NINNY": 1, "APPLY": 1, "SPLIT": 1, "SPECK": 1, "FLOOR": 1, "CRAWL": 1, "ETHIR": 1, "COOKS": 1, "AFOOT": 1, "GLEDE": 1, "VENOM": 1, "VAULT": 1, "PANIC": 1, "AMBLE": 1, "CLING": 1, "NAMES": 1, "DIRGE": 1, "WARNS": 1, "VIGIL": 1, "CRACK": 1, "FLOWN": 1, "ANGLE": 1, "LURED": 1, "UNCUT": 1, "MINOR": 1, "RISES": 1, "SENDS": 1, "RESIN": 1, "SUAVE": 1, "VENTS": 1, "WAINS": 1, "SHOES": 1, "WAVER": 1, "SHUTS": 1, "HOLLY": 1, "VEDUI": 1, "FLASH": 1, "WIDER": 1, "TILTH": 1, "TURIN": 1, "GHOST": 1, "FARED": 1, "WARDS": 1, "FILLS": 1, "DEALT": 1, "FAINT": 1, "BLARE": 1, "TENTH": 1, "FLANK": 1, "JOKES": 1, "RENEW": 1, "GIMLI": 1, "APACE": 1, "FIXED": 1, "FEINT": 1, "EXITS": 1, "SORRY": 1, "FAULT": 1, "ANVIL": 1, "GIRTH": 1, "TEARS": 1, "FALLS": 1, "DUNNO": 1, "ENEMY": 1, "SCENT": 1, "GULLS": 1, "ZIGIL": 1, "HUGER": 1, "BELLS": 1, "TRIED": 1, "FLINT": 1, "IMLAD": 1, "WEAVE": 1, "DIZZY": 1, "UNITE": 1, "DARTS": 1, "CURLS": 1, "CRUEL": 1, "SHARP": 1, "BLADE": 1, "SLEPT": 1, "GROTS": 1, "PAINS": 1, "IDEAS": 1, "SLUSH": 1, "VANWA": 1, "REFER": 1, "CLOVE": 1, "MARSH": 1, "HITCH": 1, "INDEX": 1, "CLEFT": 1, "BOWLS": 1, "SAFER": 1, "SOLAR": 1, "SOLES": 1, "GREYS": 1, "APPLE": 1, "NORTH": 1, "HASTE": 1, "OUGHT": 1, "MARCH": 1, "LODGE": 1, "CROWN": 1, "REPAY": 1, "DELVE": 1, "CREEP": 1, "TOUCH": 1, "FENCE": 1, "BERRY": 1, "PROUD": 1, "CRUSH": 1, "HEDGE": 1, "EXACT": 1, "ASHES": 1, "NEIGH": 1, "FOOLS": 1, "OTHER": 1, "TOLMA": 1, "EASED": 1, "HATER": 1, "STANK": 1, "BURST": 1, "DIVED": 1, "WILLS": 1, "WEARY": 1, "MIXED": 1, "MIDST": 1, "GULFS": 1, "HUMAN": 1, "BEANS": 1, "BRATS": 1, "PRINT": 1, "COAST": 1, "SIDES": 1, "FRIED": 1, "BOOTS": 1, "KNELL": 1, "EYOTS": 1, "SMAUG": 1, "FIRTH": 1, "SCREW": 1, "SPIES": 1, "GIANT": 1, "DOWNS": 1, "SHALL": 1, "ELVEN": 1, "SKIES": 1, "LOSES": 1, "BONED": 1, "DREAD": 1, "WAKED": 1, "NASAL": 1, "EQUAL": 1, "GASPS": 1, "DIVES": 1, "BANKS": 1, "ROAST": 1, "TWILL": 1, "MOVED": 1, "TYING": 1, "SNARL": 1, "MUSTY": 1, "TROOP": 1, "ALOOF": 1, "PHIAL": 1, "LANCE": 1, "HERDS": 1, "ENTRY": 1, "RULER": 1, "METAL": 1, "FIEFS": 1, "WEEDY": 1, "HORNS": 1, "SACKS": 1, "CRAVE": 1, "COALS": 1, "KHAND": 1, "SEDGE": 1, "FATES": 1, "NIGHT": 1, "EARLY": 1, "BOATS": 1, "APART": 1, "RINDS": 1, "YELLS": 1, "CIVIL": 1, "COVER": 1, "RIVER": 1, "CROWD": 1, "FORDS": 1, "FIBRE": 1, "STUMP": 1, "REEKS": 1, "HARRY": 1, "CEORL": 1, "SORES": 1, "GRADE": 1, "RIGHT": 1, "KNOWN": 1, "STOOD": 1, "DOZED": 1, "CROAK": 1, "AZURE": 1, "CRAFT": 1, "STUFF": 1, "HILLS": 1, "SQUIB": 1, "FLIES": 1, "POURS": 1, "WRIST": 1, "DILLO": 1, "FATED": 1, "CRASH": 1, "FOROD": 1, "CLIFF": 1, "TENDS": 1, "LEECH": 1, "HEELS": 1, "DELLS": 1, "ABUSE": 1, "FLOUT": 1, "PAWNS": 1, "LAVED": 1, "STOCK": 1, "UNDER": 1, "SHOCK": 1, "FEARS": 1, "MERIT": 1, "COULD": 1, "DITCH": 1, "EYRIE": 1, "GAUNT": 1, "HEAVY": 1, "BASES": 1, "WRITE": 1, "PACED": 1, "ROBES": 1, "PLINK": 1, "CROWS": 1, "EXILE": 1, "CHAIR": 1, "READS": 1, "ACHES": 1, "LACKS": 1, "YEARN": 1, "SWARD": 1, "LANES": 1, "SHRED": 1, "FOGGY": 1, "PROOF": 1, "SIGHT": 1, "FADED": 1, "GROUP": 1, "FLICK": 1, "FIERY": 1, "WANED": 1, "RUMBA": 1, "MELUI": 1, "STALE": 1, "PELLA": 1, "GULLY": 1, "ROGUE": 1, "FEATS": 1, "EDAIN": 1, "URGES": 1, "PANES": 1, "SLUGS": 1, "CHECK": 1, "LIGHT": 1, "KNELT": 1, "COVET": 1, "SWOON": 1, "SHINS": 1, "LACED": 1, "BASIN": 1, "STARS": 1, "REACH": 1, "EIDAR": 1, "BUSHY": 1, "NEVER": 1, "SLOPE": 1, "HEATS": 1, "COWED": 1, "PALER": 1, "AIMED": 1, "GLOAT": 1, "SCARS": 1, "GROWN": 1, "BESOM": 1, "SCARY": 1, "FUNNY": 1, "SHELF": 1, "WAFTS": 1, "AMEND": 1, "TENTS": 1, "AGONY": 1, "DOMED": 1, "UNCLE": 1, "GUSTS": 1, "BIDED": 1, "THUMB": 1, "AMISS": 1, "WRONG": 1, "RAIDS": 1, "PLANS": 1, "LEAPT": 1, "CASES": 1, "QUICK": 1, "CAKED": 1, "THROW": 1, "TRULY": 1, "GONGS": 1, "DAZED": 1, "CATCH": 1, "KELEB": 1, "QUEEN": 1, "CARED": 1, "BINDS": 1, "NAMED": 1, "GLEAM": 1, "AMMEN": 1, "GLASS": 1, "THIRD": 1, "GRAIN": 1, "OROME": 1, "MUSED": 1, "UNTIL": 1, "GAZED": 1, "ALDOR": 1, "HEADS": 1, "SNORE": 1, "FARMS": 1, "SPARS": 1, "CEDAR": 1, "SIEGE": 1, "VALAR": 1, "HLOTH": 1, "WIVES": 1, "KUDUK": 1, "SEATS": 1, "ORDER": 1, "FINER": 1, "NOOSE": 1, "CARTS": 1, "WOSES": 1, "TRAIL": 1, "BIERS": 1, "HAUNT": 1, "SPIRE": 1, "SNAGA": 1, "STICK": 1, "KNOWS": 1, "HAWKS": 1, "EERIE": 1, "ALONG": 1, "CONEY": 1, "BEAMS": 1, "CONIN": 1, "BELOW": 1, "MANES": 1, "WALKS": 1, "MOULD": 1, "ERRED": 1, "STAND": 1, "ANKLE": 1, "PELTS": 1, "STIFF": 1, "RIGID": 1, "IAVAS": 1, "LODES": 1, "WOUND": 1, "CHILL": 1, "SMIAL": 1, "FATAL": 1, "ROSIE": 1, "AWAKE": 1, "VOWED": 1, "STAMP": 1, "GUISE": 1, "FRESH": 1, "SHADE": 1, "MIRES": 1, "HAUDH": 1, "FIFTY": 1, "ARNEN": 1, "TAILS": 1, "LEVEL": 1, "GRATE": 1, "NESTS": 1, "FITLY": 1, "MINDS": 1, "BEGUN": 1, "FUMES": 1, "SPRAY": 1, "GRINS": 1, "SPADE": 1, "FOLDS": 1, "SPOKE": 1, "WAFER": 1, "ACUTE": 1, "SHOOT": 1, "BASIS": 1, "TRACK": 1, "CARAS": 1, "ELROS": 1, "DOING": 1, "TRIAL": 1, "SWEAR": 1, "SHEER": 1, "BOOMS": 1, "TURNS": 1, "BROKE": 1, "BELEG": 1, "MATES": 1, "LOWER": 1, "BELIE": 1, "EDICT": 1, "USAGE": 1, "CHAIN": 1, "KASTU": 1, "ORALD": 1, "LENDS": 1, "UNSAY": 1, "NINTH": 1, "MONDS": 1, "WHICH": 1, "PILES": 1, "WISPS": 1, "FEVER": 1, "LOOPS": 1, "NURSE": 1, "CASTS": 1, "MEADS": 1, "ROBIN": 1, "SAUCE": 1, "SLUNG": 1, "TONGS": 1, "HERON": 1, "BRUTE": 1, "STORY": 1, "AMAZE": 1, "FENNY": 1, "YAINY": 1, "RUNES": 1, "CHEER": 1, "FRODO": 1, "BRIDE": 1, "SKILL": 1, "SPURT": 1, "SPOUT": 1, "HALLA": 1, "LOOKS": 1, "SPORT": 1, "FROST": 1, "TYPED": 1, "BUCCA": 1, "AIDED": 1, "CREEK": 1, "DARES": 1, "NAILS": 1, "BRING": 1, "MASKS": 1, "GRAND": 1, "CLICK": 1, "TOUGH": 1, "HEART": 1, "PINCH": 1, "TUNIC": 1, "POUCH": 1, "TOROG": 1, "CHANT": 1, "BLAST": 1, "BLOOM": 1, "GROVE": 1, "LOADS": 1, "FORCE": 1, "CLANS": 1, "ETTEN": 1, "SEEKS": 1, "SNAKE": 1, "SPACE": 1, "GRUBB": 1, "CARVE": 1, "ALIVE": 1, "TREES": 1, "QUEER": 1, "EPHEL": 1, "BOILS": 1, "PACKS": 1, "GAINS": 1, "ASKED": 1, "GAILY": 1, "PEACE": 1, "BARED": 1, "JOOLS": 1, "TWANG": 1, "BONER": 1, "SAGES": 1, "HOWLS": 1, "THANE": 1, "MEANT": 1, "PLIED": 1, "ISLES": 1, "MOANS": 1, "GROND": 1, "FINAL": 1, "WRATH": 1, "ARROW": 1, "UMBAR": 1, "ACRES": 1, "VISIT": 1, "LIMIT": 1, "FRANK": 1, "ROOMS": 1, "ABYSS": 1, "WHERE": 1, "CRUST": 1, "FIGHT": 1, "WILES": 1, "SWEEP": 1, "SUITS": 1, "FAIRS": 1, "SCENE": 1, "GEBIR": 1, "NAKED": 1, "MOTHS": 1, "DOESN": 1, "SIRES": 1, "GABLE": 1, "DIARY": 1, "TRAPS": 1, "MUSST": 1, "MOUTH": 1, "WANTS": 1, "SCARE": 1, "TOOTH": 1, "SPIED": 1, "YOUNG": 1, "SWANS": 1, "RAFTS": 1, "SCARF": 1, "EVENT": 1, "ECHOR": 1, "CIRTH": 1, "YIELD": 1, "ITEMS": 1, "EDGES": 1, "POOLS": 1, "SLABS": 1, "MOIST": 1, "HANGS": 1, "WEEKS": 1, "OWNER": 1, "ENJOY": 1, "WINDY": 1, "SHYLY": 1, "LOYAL": 1, "MOUNT": 1, "MOVER": 1, "JOINS": 1, "ALIEN": 1, "THOSE": 1, "CLACK": 1, "OUTER": 1, "BARAD": 1, "MOTTO": 1, "AGAIN": 1, "UNION": 1, "RACED": 1, "JEWEL": 1, "BORED": 1, "TOMBS": 1, "FOUND": 1, "CRIES": 1, "HULLO": 1, "FRECA": 1, "SLIER": 1, "GUIDE": 1, "RIVAL": 1, "DOUBT": 1, "TALES": 1, "MATCH": 1, "CLIME": 1, "ERROR": 1, "HAPPY": 1, "FACES": 1, "GREEK": 1, "WITCH": 1, "MAYOR": 1, "SMALL": 1, "THYME": 1, "BAKED": 1, "SHOWS": 1, "GARTH": 1, "SMITH": 1, "WAGER": 1, "FIRST": 1, "STRAY": 1, "JUDGE": 1, "BOWED": 1, "MOTOR": 1, "GOOSE": 1, "THANK": 1, "HOOPS": 1, "MOSSY": 1, "PORCH": 1, "CLIMB": 1, "GRIME": 1, "VARDO": 1, "POLES": 1, "SPARK": 1, "LAYER": 1, "BARUK": 1, "LINED": 1, "BRACE": 1, "ODDLY": 1, "LAMPS": 1, "DEATH": 1, "PITCH": 1, "STALK": 1, "MOORS": 1, "MUSIC": 1, "TOOKS": 1, "SILLY": 1, "STRAW": 1, "REDLY": 1, "HERBS": 1, "SLEEP": 1, "TINCO": 1, "POROS": 1, "BROOM": 1, "PLEAD": 1, "BIGHT": 1, "TIRED": 1, "PRESS": 1, "TAKEN": 1, "SIXES": 1, "ATONE": 1, "CLOSE": 1, "STORM": 1, "TOPIC": 1, "GAZES": 1, "WHILE": 1, "ZIRAK": 1, "BEECH": 1, "BUILD": 1, "TREAD": 1, "PEARL": 1, "SPEED": 1, "IMAGE": 1, "TROTH": 1, "HINTS": 1, "JESTS": 1, "MEANS": 1, "SNOWY": 1, "CREPT": 1, "CAGED": 1, "WOODY": 1, "UNLIT": 1, "GRIMY": 1, "HATED": 1, "HOOKS": 1, "LEGAL": 1, "MISTY": 1, "SHIFT": 1, "PENCE": 1, "GALEN": 1, "SIXTY": 1, "KNIFE": 1, "MATTA": 1, "MAIDS": 1, "SEARS": 1, "ALONE": 1, "BRAND": 1, "COILS": 1, "BOUND": 1, "FORAY": 1, "CLUBS": 1, "GROSS": 1, "VITAL": 1, "SHEET": 1, "HADOR": 1, "USING": 1, "OATHS": 1, "BOAST": 1, "CHEEK": 1, "WAVES": 1, "MERRY": 1, "AUGHT": 1, "CLOCK": 1, "TWAIN": 1, "TROLL": 1, "ADOPT": 1, "RAGED": 1, "THREW": 1, "SHAVE": 1, "STOOR": 1, "SWART": 1, "LAUGH": 1, "SLIPS": 1, "TROVE": 1, "SPATE": 1, "FADES": 1, "LEANT": 1, "PRIDE": 1, "BEORN": 1, "IVORY": 1, "WAVED": 1, "THREE": 1, "BHOSH": 1, "DURIN": 1, "NEWLY": 1, "ANNAL": 1, "WIGHT": 1, "GLOBE": 1, "TUSKS": 1, "BATHS": 1, "HEAPS": 1, "IMPLY": 1, "HADST": 1, "EARTH": 1, "BLINK": 1, "TEHTA": 1, "SHAKE": 1, "READY": 1, "ACHED": 1, "MADLY": 1, "BEING": 1, "STOUT": 1, "GRANT": 1, "VOTED": 1, "SWORD": 1, "MILLS": 1, "FANCY": 1, "TERSE": 1, "SPILL": 1, "CRISP": 1, "LOTHO": 1, "GLOOM": 1, "MIDGE": 1, "BOUGH": 1, "MAKIN": 1, "WOULD": 1, "SHANK": 1, "STORE": 1, "HAIRS": 1, "DIMLY": 1, "RAVEN": 1, "BLAME": 1, "ENTER": 1, "CRUMB": 1, "STAGE": 1, "SWORN": 1, "LARKS": 1, "BROAD": 1, "HAZEL": 1, "HALLS": 1, "SILKS": 1, "SNEER": 1, "COATS": 1, "BABEL": 1, "MINES": 1, "LATER": 1, "SONGS": 1, "HEATH": 1, "PAVED": 1, "UNTIE": 1, "LADLE": 1, "EBONY": 1, "ROWAN": 1, "CHIPS": 1, "PINES": 1, "ALLOW": 1, "BROOD": 1, "DUSKY": 1, "MORIA": 1, "DREGS": 1, "FOLLY": 1, "BRICK": 1, "MOATS": 1, "LUINI": 1, "BORIN": 1, "ADMIT": 1, "UPPER": 1, "REALM": 1, "MOVES": 1, "HARSH": 1, "DEALS": 1, "BOGEY": 1, "WEDGE": 1, "STYLE": 1, "PAPER": 1, "BRAVE": 1, "SIZES": 1, "SPIKE": 1, "FRERY": 1, "LURKS": 1, "FLATS": 1, "SUNNY": 1, "LOOSE": 1, "LAMBE": 1, "DAILY": 1, "CURSE": 1, "VANIM": 1, "FAITH": 1, "SERVE": 1, "TEETH": 1, "SOLID": 1, "EVILS": 1, "JOINT": 1, "SABLE": 1, "KNOLL": 1, "ELBOW": 1, "TODAY": 1, "KILLS": 1, "HALTS": 1, "TASTY": 1, "FISTS": 1, "BRISK": 1, "AVAIL": 1, "EDGED": 1, "HYTHE": 1, "SWEPT": 1, "JOLTS": 1, "STAIR": 1, "SAVES": 1, "BUILT": 1, "BRUNT": 1, "TRAIN": 1, "ROWED": 1, "PRICE": 1, "CHAMP": 1, "BARAZ": 1, "GEESE": 1, "COMBS": 1, "LIKEN": 1, "BEADS": 1, "MEALS": 1, "QUILL": 1, "CREAK": 1, "TOWNS": 1, "BANES": 1, "BOOKS": 1, "WHOSE": 1, "BULGE": 1, "TRUCE": 1, "BELCH": 1, "WAITS": 1, "PIPES": 1, "ERECT": 1, "GROAN": 1, "HATCH": 1, "EXIST": 1, "ABACK": 1, "CELOS": 1, "MAJOR": 1, "SEIZE": 1, "LEAFY": 1, "RULES": 1, "SCOUR": 1, "BLUSH": 1, "SENSE": 1, "ROCKS": 1, "AVOID": 1, "CLAWS": 1, "GLINT": 1, "MOONS": 1, "BUNGO": 1, "HOARY": 1, "ACTED": 1, "LINEN": 1, "SCOUT": 1, "THORN": 1, "CAPER": 1, "HELPS": 1, "MAZES": 1, "FINCH": 1, "WOMAN": 1, "ROHAN": 1, "GAMES": 1, "BOSOM": 1, "FILTH": 1, "ABODE": 1, "BONDS": 1, "FLUTE": 1, "TITHE": 1, "TRUNK": 1, "RAISE": 1, "BEARD": 1, "TRYST": 1, "SINEW": 1, "MUSTN": 1, "DURST": 1, "THESE": 1, "STAKE": 1, "AMUSE": 1, "CARES": 1, "ERNIL": 1, "COSTS": 1, "ALDER": 1, "RISEN": 1, "BREEK": 1, "BACKS": 1, "WELSH": 1, "CAKES": 1, "SWUNG": 1, "WAIST": 1, "FILES": 1, "PROBE": 1, "MERGE": 1, "SPOIL": 1, "LIKES": 1, "LABEL": 1, "WREST": 1, "BESET": 1, "STEER": 1, "ADDED": 1, "ACORN": 1, "BADGE": 1, "ANGRY": 1, "BLEST": 1, "PARTH": 1, "FEAST": 1, "SLUNK": 1, "HURTS": 1, "TREAT": 1, "LATIN": 1, "THEIR": 1, "ROOFS": 1, "YANTA": 1, "THROB": 1, "CLANG": 1, "PLATE": 1, "SURGE": 1, "SHALT": 1, "STEEL": 1, "LUMPY": 1, "BEGIN": 1, "AGLAR": 1, "APRIL": 1, "VILYA": 1, "ASTAR": 1, "AFIRE": 1, "BIFUR": 1, "FORTY": 1, "MENOR": 1, "COMER": 1, "SKINS": 1, "NOSER": 1, "ROVER": 1, "PERCH": 1, "PARTS": 1, "SOILS": 1, "NADAN": 1, "LEARN": 1, "SMELL": 1, "CROSS": 1, "CLEAN": 1, "TIMES": 1, "LEAST": 1, "ENDED": 1, "MINAS": 1, "RAINS": 1, "HANDY": 1, "BOOTH": 1, "FROZE": 1, "BRAKE": 1, "LUMPS": 1, "HOPED": 1, "ALOFT": 1, "DADDY": 1, "FRUIT": 1, "EDNEW": 1, "CHARM": 1, "CLOTH": 1, "SCALE": 1, "TOOLS": 1, "GORSE": 1, "WATER": 1, "RACES": 1, "CHILD": 1, "ALLAY": 1, "FLARE": 1, "USUAL": 1, "ELDAR": 1, "SOBER": 1, "BEATS": 1, "DOZEN": 1, "BOOTY": 1, "BOARD": 1, "IRKED": 1, "WANES": 1, "CIRIL": 1, "BEFIT": 1, "GROPE": 1, "YOURS": 1, "BROWS": 1, "PUPIL": 1, "CLUMP": 1, "ARGUE": 1, "STEAL": 1, "HAIRY": 1, "MICES": 1, "SMOKY": 1, "SHOWN": 1, "RIDES": 1, "FLESH": 1, "MIRKY": 1, "WORDS": 1, "SWEET": 1, "NOLDO": 1, "MIRTH": 1, "BERYL": 1, "HUMPS": 1, "STOLE": 1, "STEED": 1, "JUICY": 1, "SNEAK": 1, "NAITH": 1, "TEACH": 1, "TENSE": 1, "DINER": 1, "THONG": 1, "SNOUT": 1, "STEPS": 1, "BLESS": 1, "SLASH": 1, "WOMEN": 1, "CHEAT": 1, "TRUER": 1, "SCORN": 1, "STIES": 1, "HEARS": 1, "NENYA": 1, "MINED": 1, "LEADS": 1, "ROSES": 1, "TIERS": 1, "LEUCA": 1, "SWINE": 1, "DARED": 1, "DENSE": 1, "SCOOP": 1, "DRYAD": 1, "STEAD": 1, "ALERT": 1, "BLOCK": 1, "CERIN": 1, "FLAME": 1, "MERES": 1, "LIEGE": 1, "EARED": 1, "PENNY": 1, "WIELD": 1, "KEEPS": 1, "SHIRE": 1, "MONTH": 1, "DROVE": 1, "BROWN": 1, "GUILE": 1, "FLOAT": 1, "HINGE": 1, "PERIL": 1, "WASTE": 1, "GROWL": 1, "ROARS": 1, "ROPES": 1, "SIZED": 1, "COMBE": 1, "DWELT": 1, "FOODS": 1, "PILED": 1, "WINGS": 1, "CARAN": 1, "GOODS": 1, "EXTRA": 1, "TWICE": 1, "SHORN": 1, "UNFIT": 1, "RAYED": 1, "SPELL": 1, "DAUNT": 1, "SKIRT": 1, "WOODS": 1, "GORGE": 1, "UNDID": 1, "TOTAL": 1, "ANNON": 1, "ODOUR": 1, "BYRES": 1, "SNOWS": 1, "RIDGE": 1, "MASON": 1, "RAPID": 1, "SHARD": 1, "BLAZE": 1, "TIGHT": 1, "DRIED": 1, "REBEL": 1, "GANGS": 1, "RAINY": 1, "NEWER": 1, "SMITE": 1, "RETHE": 1, "WRECK": 1, "SPOTS": 1, "BERTH": 1, "DREAR": 1, "STUDS": 1, "MENEL": 1, "YOUTH": 1, "OMENS": 1, "RIVEN": 1, "DALES": 1, "WEREN": 1, "LASTS": 1, "WIRES": 1, "FIFTH": 1, "NEEDS": 1, "ERECH": 1, "TERMS": 1, "FELLS": 1, "UPSET": 1, "SHARE": 1, "TARRY": 1, "PALMS": 1, "BOGGY": 1, "LIKED": 1, "KINGS": 1, "CALMA": 1, "REPLY": 1, "VOMIT": 1, "SHINE": 1, "CALLS": 1, "GNAWS": 1, "DRAWN": 1, "ROCKY": 1, "FUMED": 1, "RISSK": 1, "NECKS": 1, "SNARE": 1, "GRACE": 1, "SPARE": 1, "BRIAR": 1, "WAKEN": 1, "GLOWS": 1, "SMOKE": 1, "SPAKE": 1, "CAITA": 1, "APRON": 1, "CLAPS": 1, "HARPS": 1, "PALAN": 1, "PAIRS": 1, "WELLS": 1, "DUSST": 1, "MILES": 1, "NOTCH": 1, "CHOSE": 1, "NOISE": 1, "GLORY": 1, "ARISE": 1, "SLAVE": 1, "PRANK": 1, "DANCE": 1, "LASTO": 1, "BRINK": 1, "INSET": 1, "ESTRE": 1, "HEARD": 1, "SLIME": 1, "UNDUE": 1, "SHORE": 1, "DEEPS": 1, "SHADY": 1, "STOOL": 1, "PRIED": 1, "TASKS": 1, "MERCY": 1, "COLDS": 1, "THERE": 1, "STEEP": 1, "TONES": 1, "BREAK": 1, "DIRTY": 1, "HILTS": 1, "COURT": 1, "LEAVE": 1, "SADLY": 1, "FATTY": 1, "HANDS": 1, "SURER": 1, "ABATE": 1, "HORNY": 1, "VINES": 1, "KNOTS": 1, "BEREN": 1, "QUEST": 1, "GAPED": 1, "THINK": 1, "ALIKE": 1, "CURLY": 1, "WATCH": 1, "SWIRL": 1, "PARTY": 1, "HOSTS": 1, "WILYA": 1, "SPELT": 1, "SLACK": 1, "STEMS": 1, "SCORE": 1, "BADLY": 1, "DEPTH": 1, "ARNOR": 1, "MISTS": 1, "PRIME": 1, "GLARE": 1, "HARAD": 1, "LALLA": 1, "PYRES": 1, "WAGES": 1, "CRAZY": 1, "MEATS": 1, "DOLED": 1, "GREEN": 1, "PETTY": 1, "FILED": 1, "WOKEN": 1, "FREER": 1, "CREST": 1, "FRONT": 1, "SWISH": 1, "ALTER": 1, "WORST": 1, "FOLDE": 1, "WINCH": 1, "YULMA": 1, "TIPSY": 1, "FEWER": 1, "TWIGS": 1, "SWOOP": 1, "HOUSE": 1, "SKULL": 1, "ASTIR": 1, "RANKS": 1, "STEAM": 1, "TELLS": 1, "BLOWN": 1, "HOUND": 1, "BITER": 1, "FOUNT": 1, "UNGWE": 1, "CLOAK": 1, "DRESS": 1, "HARDY": 1, "MODEL": 1, "OFTEN": 1, "BLOWS": 1, "STONY": 1, "COCKS": 1, "CHASE": 1, "PENNA": 1, "MUDDY": 1, "DRIFT": 1, "HIDES": 1, "PRIZE": 1, "BATHE": 1, "SITES": 1, "SEVEN": 1, "PROVE": 1, "TAKES": 1, "STAFF": 1, "NOISY": 1, "LEGGY": 1, "BROIL": 1, "WHITE": 1, "RHYME": 1, "LAWKS": 1, "SAVED": 1, "LAZED": 1, "PLUNK": 1, "ONSET": 1, "DONER": 1, "FORKS": 1, "BORNE": 1, "TAMER": 1, "OHTAR": 1, "TALKS": 1, "WHINE": 1, "GNATS": 1, "HAVOC": 1, "PLAIN": 1, "WARGS": 1, "HURRY": 1, "SAITH": 1, "PURER": 1, "BARBS": 1, "ALOUD": 1, "LIVID": 1, "PORED": 1, "ANNUN": 1, "HARRI": 1, "STILL": 1, "BLISS": 1, "FERNY": 1, "NASTY": 1, "LOFTY": 1, "CREAM": 1, "BIRDS": 1, "WEEDS": 1, "NARVI": 1, "SCALP": 1, "LADEN": 1, "RIDER": 1, "TOLLS": 1, "DRAWS": 1, "AISLE": 1, "HOLES": 1, "BOFUR": 1, "INNER": 1, "BLIND": 1, "TRIES": 1, "WITHY": 1, "ELENI": 1, "BURNS": 1, "CASKS": 1, "LOPED": 1, "DEVIL": 1, "RISKY": 1, "THINE": 1, "STAYS": 1, "BARAN": 1, "JOLLY": 1, "VIVID": 1, "FLOOD": 1, "GREED": 1, "FALSE": 1, "SHOUT": 1, "LOCAL": 1, "LATCH": 1, "NARYA": 1, "SHONE": 1, "BITES": 1, "ASIDE": 1, "OWING": 1, "DECAY": 1, "WHIPS": 1, "SQUAT": 1, "LUCKY": 1, "DWELL": 1, "SLOTH": 1, "DRIER": 1, "TARKS": 1, "IDIOM": 1, "SLIMY": 1, "BELLY": 1, "URGED": 1, "ENNOR": 1, "ORGAN": 1, "GRAVE": 1, "SPINY": 1, "STUDY": 1, "SLING": 1, "PAWED": 1, "SMELT": 1, "AGILE": 1, "WORLD": 1, "IDIOT": 1, "IDRIL": 1, "EAVES": 1, "TRICK": 1, "RELLO": 1, "SPURS": 1, "STOOP": 1, "VALUE": 1, "SWATH": 1, "BUYER": 1, "FLETS": 1, "DYING": 1, "LANTA": 1, "TRAMP": 1, "ORION": 1, "SWEAT": 1, "CLUNG": 1, "FLING": 1, "METTA": 1, "GLENS": 1, "SMOTE": 1, "HOOTS": 1, "PUFFS": 1, "BACON": 1, "ROYAL": 1, "FISHY": 1, "FINDS": 1, "GRIND": 1, "TOKEN": 1, "BUCKS": 1, "URUKS": 1, "CEASE": 1, "QUITE": 1, "EWERS": 1, "GROWS": 1, "CLASH": 1, "HARTS": 1, "SHEDS": 1, "NEEDN": 1, "AMBAR": 1, "SHRUG": 1, "YEARS": 1, "MONEY": 1, "DRAKE": 1, "GIVER": 1, "STARE": 1, "VALES": 1, "HOTLY": 1, "HEADY": 1, "CROOK": 1, "EMPTY": 1, "REINS": 1, "WHOLE": 1, "REAMS": 1, "SPEND": 1, "MOUND": 1, "ATANI": 1, "SOCKS": 1, "REVEL": 1, "BANDS": 1, "ABIDE": 1, "HONEY": 1, "SHAFT": 1, "SALES": 1, "BULKY": 1, "LIFTS": 1, "CURVE": 1, "SINKS": 1, "CHINS": 1, "LOVES": 1, "SHINY": 1, "FLASK": 1, "SLAYS": 1, "CONES": 1, "SHELL": 1, "FACED": 1, "PIERS": 1, "COOMB": 1, "BANDY": 1, "WRACK": 1, "CURED": 1, "STATE": 1, "LEDGE": 1, "MAKER": 1, "ELVES": 1, "RINSE": 1, "STERN": 1, "FOURS": 1, "ARMED": 1, "SCION": 1, "SQUAD": 1, "FEUDS": 1, "GREET": 1, "PEATS": 1, "CAMPS": 1, "WIDOW": 1, "COACH": 1, "ROUGH": 1, "LAWNS": 1, "LIMBS": 1, "HOMES": 1, "OLIVE": 1, "PURSE": 1, "BIRTH": 1, "LEAPS": 1, "DELAY": 1, "DROPS": 1, "LISSE": 1, "ADORN": 1, "VOWEL": 1, "NOTED": 1, "MODES": 1, "ALARM": 1, "SWAPS": 1, "SPITE": 1, "PROWS": 1, "WORRY": 1, "ROLLS": 1, "VIOLS": 1, "VARDA": 1, "CLOUD": 1, "COUCH": 1, "OLDEN": 1, "RINGS": 1, "MOURN": 1, "ROPED": 1, "ITHIL": 1, "TELCO": 1, "MAKES": 1, "TOMBA": 1, "WRAPS": 1, "RATED": 1, "PLAYS": 1, "LIVES": 1, "PAUSE": 1, "THING": 1, "GOEST": 1, "ANANN": 1, "FEELS": 1, "MEETS": 1, "LOWLY": 1, "GRIST": 1, "LIMES": 1, "WIDTH": 1, "BEENS": 1, "QUIET": 1, "JUMPS": 1, "OTTER": 1, "CARRY": 1, "EIGHT": 1, "MARRY": 1, "ANIGH": 1, "SWELL": 1, "WOLDS": 1, "DOORS": 1, "HAVEN": 1, "WAKES": 1, "ELDER": 1, "HOODS": 1, "LASSI": 1, "PLUME": 1, "EVERY": 1, "SHAME": 1, "SLAIN": 1, "DEEDS": 1, "LAITA": 1, "PEEPS": 1, "ROUSE": 1, "AGREE": 1, "BIRCH": 1, "VIEWS": 1, "PROWL": 1, "WAXED": 1, "MODEM": 1, "RULED": 1, "SIGNS": 1, "STARK": 1, "CHAPS": 1, "SORTS": 1, "MALTA": 1, "FOLCA": 1, "ROUND": 1, "BRUSH": 1, "BLOOD": 1, "DROWN": 1, "SMASH": 1, "CRAGS": 1, "TIDES": 1, "LIVED": 1, "COINS": 1}