var KanaDictienaries = require("./KanaDictionaries");

const gojuon = new Map([
    // あ行
    [KanaDictienaries.A, { shiins: [], boin: 'a' }],
    [KanaDictienaries.I, { shiins: [], boin: 'i' }],
    [KanaDictienaries.U, { shiins: [], boin: 'u' }],
    [KanaDictienaries.E, { shiins: [], boin: 'e' }],
    [KanaDictienaries.O, { shiins: [], boin: 'o' }],
    
    // か行
    [KanaDictienaries.KA, { shiins: ['k', 'c'], boin: 'a' }],
    [KanaDictienaries.KI, { shiins: ['k'], boin: 'i' }],
    [KanaDictienaries.KU, { shiins: ['k', 'c'], boin: 'u' }],
    [KanaDictienaries.KE, { shiins: ['k'], boin: 'e' }],
    [KanaDictienaries.KO, { shiins: ['k', 'c'], boin: 'o' }],
    
    // さ行
    [KanaDictienaries.SA, { shiins: ['s'], boin: 'a' }],
    [KanaDictienaries.SI, { shiins: ['s', 'sh', 'c'], boin: 'i' }],
    [KanaDictienaries.SU, { shiins: ['s'], boin: 'u' }],
    [KanaDictienaries.SE, { shiins: ['s', 'c'], boin: 'e' }],
    [KanaDictienaries.SO, { shiins: ['s'], boin: 'o' }],
    
    // た行
    [KanaDictienaries.TA, { shiins: ['t'], boin: 'a' }],
    [KanaDictienaries.TI, { shiins: ['t', 'ch'], boin: 'i' }],
    [KanaDictienaries.TU, { shiins: ['t', 'ts'], boin: 'u' }],
    [KanaDictienaries.TE, { shiins: ['t'], boin: 'e' }],
    [KanaDictienaries.TO, { shiins: ['t'], boin: 'o' }],
    
    // な行
    [KanaDictienaries.NA, { shiins: ['n'], boin: 'a' }],
    [KanaDictienaries.NI, { shiins: ['n'], boin: 'i' }],
    [KanaDictienaries.NU, { shiins: ['n'], boin: 'u' }],
    [KanaDictienaries.NE, { shiins: ['n'], boin: 'e' }],
    [KanaDictienaries.NO, { shiins: ['n'], boin: 'o' }],
    
    // は行
    [KanaDictienaries.HA, { shiins: ['h'], boin: 'a' }],
    [KanaDictienaries.HI, { shiins: ['h'], boin: 'i' }],
    [KanaDictienaries.HU, { shiins: ['h'], boin: 'u' }],
    [KanaDictienaries.HE, { shiins: ['h'], boin: 'e' }],
    [KanaDictienaries.HO, { shiins: ['h'], boin: 'o' }],
    
    // ま行
    [KanaDictienaries.MA, { shiins: ['m'], boin: 'a' }],
    [KanaDictienaries.MI, { shiins: ['m'], boin: 'i' }],
    [KanaDictienaries.MU, { shiins: ['m'], boin: 'u' }],
    [KanaDictienaries.ME, { shiins: ['m'], boin: 'e' }],
    [KanaDictienaries.MO, { shiins: ['m'], boin: 'o' }],
    
    // や行
    [KanaDictienaries.YA, { shiins: ['y'], boin: 'a' }],
    [KanaDictienaries.YU, { shiins: ['y'], boin: 'u' }],
    [KanaDictienaries.YO, { shiins: ['y'], boin: 'o' }],
    
    // ら行
    [KanaDictienaries.RA, { shiins: ['r'], boin: 'a' }],
    [KanaDictienaries.RI, { shiins: ['r'], boin: 'i' }],
    [KanaDictienaries.RU, { shiins: ['r'], boin: 'u' }],
    [KanaDictienaries.RE, { shiins: ['r'], boin: 'e' }],
    [KanaDictienaries.RO, { shiins: ['r'], boin: 'o' }],
    
    // わ行
    [KanaDictienaries.WA, { shiins: ['w'], boin: 'a' }],
    [KanaDictienaries.WO, { shiins: ['w'], boin: 'o' }],    
    [KanaDictienaries.N, { shiins: ['n', 'x'], boin: 'n' }]
]);

const dakuon = new Map([
    // が行
    [KanaDictienaries.GA, { shiins: ['g'], boin: 'a' }],
    [KanaDictienaries.GI, { shiins: ['g'], boin: 'i' }],
    [KanaDictienaries.GU, { shiins: ['g'], boin: 'u' }],
    [KanaDictienaries.GE, { shiins: ['g'], boin: 'e' }],
    [KanaDictienaries.GO, { shiins: ['g'], boin: 'o' }],

    // ざ行
    [KanaDictienaries.ZA, { shiins: ['z'], boin: 'a' }],
    [KanaDictienaries.ZI, { shiins: ['z', 'j'], boin: 'i' }],
    [KanaDictienaries.ZU, { shiins: ['z'], boin: 'u' }],
    [KanaDictienaries.ZE, { shiins: ['z'], boin: 'e' }],
    [KanaDictienaries.ZO, { shiins: ['z'], boin: 'o' }],

    // だ行
    [KanaDictienaries.DA, { shiins: ['d'], boin: 'a' }],
    [KanaDictienaries.DI, { shiins: ['d'], boin: 'i' }],
    [KanaDictienaries.DU, { shiins: ['d'], boin: 'u' }],
    [KanaDictienaries.DE, { shiins: ['d'], boin: 'e' }],
    [KanaDictienaries.DO, { shiins: ['d'], boin: 'o' }],

    // ば行
    [KanaDictienaries.BA, { shiins: ['b'], boin: 'a' }],
    [KanaDictienaries.BI, { shiins: ['b'], boin: 'i' }],
    [KanaDictienaries.BU, { shiins: ['b'], boin: 'u' }],
    [KanaDictienaries.BE, { shiins: ['b'], boin: 'e' }],
    [KanaDictienaries.BO, { shiins: ['b'], boin: 'o' }],

    // ヴぁ行
    [KanaDictienaries.VA, { shiins: ['v'], boin: 'a' }],
    [KanaDictienaries.VI, { shiins: ['v'], boin: 'i' }],
    [KanaDictienaries.VU, { shiins: ['v'], boin: 'u' }],
    [KanaDictienaries.VE, { shiins: ['v'], boin: 'e' }],
    [KanaDictienaries.VO, { shiins: ['v'], boin: 'o' }]
]);

const handakuon = new Map([
    // ぱ行
    [KanaDictienaries.PA, { shiins: ['p'], boin: 'a' }],
    [KanaDictienaries.PI, { shiins: ['p'], boin: 'i' }],
    [KanaDictienaries.PU, { shiins: ['p'], boin: 'u' }],
    [KanaDictienaries.PE, { shiins: ['p'], boin: 'e' }],
    [KanaDictienaries.PO, { shiins: ['p'], boin: 'o' }]
]);

const kogaki = new Map([
    // ぁ行
    [KanaDictienaries.XA, { shiins: ['x', 'l'], boin: 'a' }],
    [KanaDictienaries.XI, { shiins: ['x', 'l'], boin: 'i' }],
    [KanaDictienaries.XU, { shiins: ['x', 'l'], boin: 'u' }],
    [KanaDictienaries.XE, { shiins: ['x', 'l'], boin: 'e' }],
    [KanaDictienaries.XO, { shiins: ['x', 'l'], boin: 'o' }],

    // っ
    [KanaDictienaries.XTU, { shiins: ['xt', 'lt', 'xts', 'lts'], boin: 'u' }],

    // ゃ行
    [KanaDictienaries.XYA, { shiins: ['xy', 'ly'], boin: 'a' }],
    [KanaDictienaries.XYU, { shiins: ['xy', 'ly'], boin: 'u' }],
    [KanaDictienaries.XYO, { shiins: ['xy', 'ly'], boin: 'o' }],

    // ゎ
    [KanaDictienaries.XWA, { shiins: ['xw', 'lw'], boin: 'a' }]
]);

const youon = new Map([
    // あ行
    [KanaDictienaries.YE, { shiins: ['y'], boin: 'e', origin: gojuon.get(KanaDictienaries.I), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.WI, { shiins: ['w'], boin: 'i', origin: gojuon.get(KanaDictienaries.U), kogaki: kogaki.get(KanaDictienaries.XI) }],
    [KanaDictienaries.WE, { shiins: ['w'], boin: 'e', origin: gojuon.get(KanaDictienaries.U), kogaki: kogaki.get(KanaDictienaries.XE) }],

    // きゃ行
    [KanaDictienaries.KYA, { shiins: ['ky'], boin: 'a', origin: gojuon.get(KanaDictienaries.KI), kogaki: kogaki.get(KanaDictienaries.XYA) }],
    [KanaDictienaries.KYI, { shiins: ['ky'], boin: 'i', origin: gojuon.get(KanaDictienaries.KI), kogaki: kogaki.get(KanaDictienaries.XI) }],
    [KanaDictienaries.KYU, { shiins: ['ky'], boin: 'u', origin: gojuon.get(KanaDictienaries.KI), kogaki: kogaki.get(KanaDictienaries.XYU) }],
    [KanaDictienaries.KYE, { shiins: ['ky'], boin: 'e', origin: gojuon.get(KanaDictienaries.KI), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.KYO, { shiins: ['ky'], boin: 'o', origin: gojuon.get(KanaDictienaries.KI), kogaki: kogaki.get(KanaDictienaries.XYO) }],

    // ぎゃ行
    [KanaDictienaries.GYA, { shiins: ['gy'], boin: 'a', origin: dakuon.get(KanaDictienaries.GI), kogaki: kogaki.get(KanaDictienaries.XYA) }],
    [KanaDictienaries.GYI, { shiins: ['gy'], boin: 'i', origin: dakuon.get(KanaDictienaries.GI), kogaki: kogaki.get(KanaDictienaries.XI) }],
    [KanaDictienaries.GYU, { shiins: ['gy'], boin: 'u', origin: dakuon.get(KanaDictienaries.GI), kogaki: kogaki.get(KanaDictienaries.XYU) }],
    [KanaDictienaries.GYE, { shiins: ['gy'], boin: 'e', origin: dakuon.get(KanaDictienaries.GI), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.GYO, { shiins: ['gy'], boin: 'o', origin: dakuon.get(KanaDictienaries.GI), kogaki: kogaki.get(KanaDictienaries.XYO) }],

    // くぁ行
    [KanaDictienaries.QA, { shiins: ['q', 'kw'], boin: 'a', origin: gojuon.get(KanaDictienaries.KU), kogaki: kogaki.get(KanaDictienaries.XA) }],
    [KanaDictienaries.QI, { shiins: ['q', 'kw'], boin: 'i', origin: gojuon.get(KanaDictienaries.KU), kogaki: kogaki.get(KanaDictienaries.XI) }],
    [KanaDictienaries.QE, { shiins: ['q', 'kw'], boin: 'e', origin: gojuon.get(KanaDictienaries.KU), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.QO, { shiins: ['q', 'kw'], boin: 'o', origin: gojuon.get(KanaDictienaries.KU), kogaki: kogaki.get(KanaDictienaries.XO) }],

    // しゃ行
    [KanaDictienaries.SHA, { shiins: ['sh', 'sy', 'shy'], boin: 'a', origin: gojuon.get(KanaDictienaries.SI), kogaki: kogaki.get(KanaDictienaries.XYA) }],
    [KanaDictienaries.SYI, { shiins: ['sy', 'shy'], boin: 'i', origin: gojuon.get(KanaDictienaries.SI), kogaki: kogaki.get(KanaDictienaries.XI) }],
    [KanaDictienaries.SHU, { shiins: ['sh', 'sy', 'shy'], boin: 'u', origin: gojuon.get(KanaDictienaries.SI), kogaki: kogaki.get(KanaDictienaries.XYU) }],
    [KanaDictienaries.SHE, { shiins: ['sh', 'sy', 'shy'], boin: 'e', origin: gojuon.get(KanaDictienaries.SI), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.SHO, { shiins: ['sh', 'sy', 'shy'], boin: 'o', origin: gojuon.get(KanaDictienaries.SI), kogaki: kogaki.get(KanaDictienaries.XYO) }],

    // じゃ行
    [KanaDictienaries.JA, { shiins: ['j', 'jy'], boin: 'a', origin: dakuon.get(KanaDictienaries.ZI), kogaki: kogaki.get(KanaDictienaries.XYA) }],
    [KanaDictienaries.JYI, { shiins: ['jy'], boin: 'i', origin: dakuon.get(KanaDictienaries.ZI), kogaki: kogaki.get(KanaDictienaries.XI) }],
    [KanaDictienaries.JU, { shiins: ['j', 'jy'], boin: 'u', origin: dakuon.get(KanaDictienaries.ZI), kogaki: kogaki.get(KanaDictienaries.XYU) }],
    [KanaDictienaries.JE, { shiins: ['j', 'jy'], boin: 'e', origin: dakuon.get(KanaDictienaries.ZI), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.JO, { shiins: ['j', 'jy'], boin: 'o', origin: dakuon.get(KanaDictienaries.ZI), kogaki: kogaki.get(KanaDictienaries.XYO) }],

    // ちゃ行
    [KanaDictienaries.CHA, { shiins: ['ch', 'cy','ty', 'chy'], boin: 'a', origin: gojuon.get(KanaDictienaries.TI), kogaki: kogaki.get(KanaDictienaries.XYA) }],
    [KanaDictienaries.CYI, { shiins: ['ch', 'cy','ty', 'chy'], boin: 'i', origin: gojuon.get(KanaDictienaries.TI), kogaki: kogaki.get(KanaDictienaries.XI) }],
    [KanaDictienaries.CHU, { shiins: ['ch', 'cy','ty', 'chy'], boin: 'u', origin: gojuon.get(KanaDictienaries.TI), kogaki: kogaki.get(KanaDictienaries.XYU) }],
    [KanaDictienaries.CHE, { shiins: ['ch', 'cy','ty', 'chy'], boin: 'e', origin: gojuon.get(KanaDictienaries.TI), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.CHO, { shiins: ['ch', 'cy','ty', 'chy'], boin: 'o', origin: gojuon.get(KanaDictienaries.TI), kogaki: kogaki.get(KanaDictienaries.XYO) }],

    // ぢゃ行
    [KanaDictienaries.DYA, { shiins: ['dy'], boin: 'a', origin: dakuon.get(KanaDictienaries.DI), kogaki: kogaki.get(KanaDictienaries.XYA) }],
    [KanaDictienaries.DYI, { shiins: ['dy'], boin: 'i', origin: dakuon.get(KanaDictienaries.DI), kogaki: kogaki.get(KanaDictienaries.XI) }],
    [KanaDictienaries.DYU, { shiins: ['dy'], boin: 'u', origin: dakuon.get(KanaDictienaries.DI), kogaki: kogaki.get(KanaDictienaries.XYU) }],
    [KanaDictienaries.DYE, { shiins: ['dy'], boin: 'e', origin: dakuon.get(KanaDictienaries.DI), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.DYO, { shiins: ['dy'], boin: 'o', origin: dakuon.get(KanaDictienaries.DI), kogaki: kogaki.get(KanaDictienaries.XYO) }],

    // つぁ行
    [KanaDictienaries.TSA, { shiins: ['ts'], boin: 'a', origin: gojuon.get(KanaDictienaries.TU), kogaki: kogaki.get(KanaDictienaries.XA) }],
    [KanaDictienaries.TSI, { shiins: ['ts'], boin: 'i', origin: gojuon.get(KanaDictienaries.TU), kogaki: kogaki.get(KanaDictienaries.XI) }],
    [KanaDictienaries.TSE, { shiins: ['ts'], boin: 'e', origin: gojuon.get(KanaDictienaries.TU), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.TSO, { shiins: ['ts'], boin: 'o', origin: gojuon.get(KanaDictienaries.TU), kogaki: kogaki.get(KanaDictienaries.XO) }],

    // でゃ行
    [KanaDictienaries.DHA, { shiins: ['dh'], boin: 'a', origin: dakuon.get(KanaDictienaries.DE), kogaki: kogaki.get(KanaDictienaries.XYA) }],
    [KanaDictienaries.DHI, { shiins: ['dh'], boin: 'i', origin: dakuon.get(KanaDictienaries.DE), kogaki: kogaki.get(KanaDictienaries.XI) }],
    [KanaDictienaries.DHU, { shiins: ['dh'], boin: 'u', origin: dakuon.get(KanaDictienaries.DE), kogaki: kogaki.get(KanaDictienaries.XYU) }],
    [KanaDictienaries.DHE, { shiins: ['dh'], boin: 'e', origin: dakuon.get(KanaDictienaries.DE), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.DHO, { shiins: ['dh'], boin: 'o', origin: dakuon.get(KanaDictienaries.DE), kogaki: kogaki.get(KanaDictienaries.XYO) }],

    // にゃ行
    [KanaDictienaries.NYA, { shiins: ['ny'], boin: 'a', origin: gojuon.get(KanaDictienaries.NI), kogaki: kogaki.get(KanaDictienaries.XYA) }],
    [KanaDictienaries.NYI, { shiins: ['ny'], boin: 'i', origin: gojuon.get(KanaDictienaries.NI), kogaki: kogaki.get(KanaDictienaries.XI) }],    
    [KanaDictienaries.NYU, { shiins: ['ny'], boin: 'u', origin: gojuon.get(KanaDictienaries.NI), kogaki: kogaki.get(KanaDictienaries.XYU) }],
    [KanaDictienaries.NYE, { shiins: ['ny'], boin: 'e', origin: gojuon.get(KanaDictienaries.NI), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.NYO, { shiins: ['ny'], boin: 'o', origin: gojuon.get(KanaDictienaries.NI), kogaki: kogaki.get(KanaDictienaries.XYO) }],

    // ひゃ行
    [KanaDictienaries.HYA, { shiins: ['hy'], boin: 'a', origin: gojuon.get(KanaDictienaries.HI), kogaki: kogaki.get(KanaDictienaries.XYA) }],
    [KanaDictienaries.HYI, { shiins: ['hy'], boin: 'i', origin: gojuon.get(KanaDictienaries.HI), kogaki: kogaki.get(KanaDictienaries.XI) }],    
    [KanaDictienaries.HYU, { shiins: ['hy'], boin: 'u', origin: gojuon.get(KanaDictienaries.HI), kogaki: kogaki.get(KanaDictienaries.XYU) }],
    [KanaDictienaries.HYE, { shiins: ['hy'], boin: 'e', origin: gojuon.get(KanaDictienaries.HI), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.HYO, { shiins: ['hy'], boin: 'o', origin: gojuon.get(KanaDictienaries.HI), kogaki: kogaki.get(KanaDictienaries.XYO) }],

    // びゃ行
    [KanaDictienaries.BYA, { shiins: ['by'], boin: 'a', origin: dakuon.get(KanaDictienaries.BI), kogaki: kogaki.get(KanaDictienaries.XYA) }],
    [KanaDictienaries.BYI, { shiins: ['by'], boin: 'i', origin: dakuon.get(KanaDictienaries.BI), kogaki: kogaki.get(KanaDictienaries.XI) }],    
    [KanaDictienaries.BYU, { shiins: ['by'], boin: 'u', origin: dakuon.get(KanaDictienaries.BI), kogaki: kogaki.get(KanaDictienaries.XYU) }],
    [KanaDictienaries.BYE, { shiins: ['by'], boin: 'e', origin: dakuon.get(KanaDictienaries.BI), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.BYO, { shiins: ['by'], boin: 'o', origin: dakuon.get(KanaDictienaries.BI), kogaki: kogaki.get(KanaDictienaries.XYO) }],

    // ぴゃ行
    [KanaDictienaries.PYA, { shiins: ['py'], boin: 'a', origin: handakuon.get(KanaDictienaries.PI), kogaki: kogaki.get(KanaDictienaries.XYA) }],
    [KanaDictienaries.PYI, { shiins: ['py'], boin: 'i', origin: handakuon.get(KanaDictienaries.PI), kogaki: kogaki.get(KanaDictienaries.XI) }],    
    [KanaDictienaries.PYU, { shiins: ['py'], boin: 'u', origin: handakuon.get(KanaDictienaries.PI), kogaki: kogaki.get(KanaDictienaries.XYU) }],
    [KanaDictienaries.PYE, { shiins: ['py'], boin: 'e', origin: handakuon.get(KanaDictienaries.PI), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.PYO, { shiins: ['py'], boin: 'o', origin: handakuon.get(KanaDictienaries.PI), kogaki: kogaki.get(KanaDictienaries.XYO) }],

    // ふぁ行
    [KanaDictienaries.FA, { shiins: ['f', 'hw', 'fw'], boin: 'a', origin: gojuon.get(KanaDictienaries.HU), kogaki: kogaki.get(KanaDictienaries.XA) }],
    [KanaDictienaries.FI, { shiins: ['f', 'fy', 'hw', 'fw'], boin: 'i', origin: gojuon.get(KanaDictienaries.HU), kogaki: kogaki.get(KanaDictienaries.XI) }],    
    [KanaDictienaries.FE, { shiins: ['f', 'fy', 'hw', 'fw'], boin: 'e', origin: gojuon.get(KanaDictienaries.HU), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.FO, { shiins: ['f', 'hw', 'fw'], boin: 'o', origin: gojuon.get(KanaDictienaries.HU), kogaki: kogaki.get(KanaDictienaries.XO) }],

    // ふゃ行
    [KanaDictienaries.FYA, { shiins: ['fy'], boin: 'a', origin: gojuon.get(KanaDictienaries.HU), kogaki: kogaki.get(KanaDictienaries.XYA) }],
    [KanaDictienaries.FYU, { shiins: ['fy'], boin: 'u', origin: gojuon.get(KanaDictienaries.HU), kogaki: kogaki.get(KanaDictienaries.XYU) }],
    [KanaDictienaries.FYO, { shiins: ['fy'], boin: 'o', origin: gojuon.get(KanaDictienaries.HU), kogaki: kogaki.get(KanaDictienaries.XYO) }],

    // みゃ行
    [KanaDictienaries.MYA, { shiins: ['my'], boin: 'a', origin: gojuon.get(KanaDictienaries.MI), kogaki: kogaki.get(KanaDictienaries.XYA) }],
    [KanaDictienaries.MYI, { shiins: ['my'], boin: 'i', origin: gojuon.get(KanaDictienaries.MI), kogaki: kogaki.get(KanaDictienaries.XI) }],    
    [KanaDictienaries.MYU, { shiins: ['my'], boin: 'u', origin: gojuon.get(KanaDictienaries.MI), kogaki: kogaki.get(KanaDictienaries.XYU) }],
    [KanaDictienaries.MYE, { shiins: ['my'], boin: 'e', origin: gojuon.get(KanaDictienaries.MI), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.MYO, { shiins: ['my'], boin: 'o', origin: gojuon.get(KanaDictienaries.MI), kogaki: kogaki.get(KanaDictienaries.XYO) }],

    // りゃ行
    [KanaDictienaries.RYA, { shiins: ['ry'], boin: 'a', origin: gojuon.get(KanaDictienaries.RI), kogaki: kogaki.get(KanaDictienaries.XYA) }],
    [KanaDictienaries.RYI, { shiins: ['ry'], boin: 'i', origin: gojuon.get(KanaDictienaries.RI), kogaki: kogaki.get(KanaDictienaries.XI) }],    
    [KanaDictienaries.RYU, { shiins: ['ry'], boin: 'u', origin: gojuon.get(KanaDictienaries.RI), kogaki: kogaki.get(KanaDictienaries.XYU) }],
    [KanaDictienaries.RYE, { shiins: ['ry'], boin: 'e', origin: gojuon.get(KanaDictienaries.RI), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.RYO, { shiins: ['ry'], boin: 'o', origin: gojuon.get(KanaDictienaries.RI), kogaki: kogaki.get(KanaDictienaries.XYO) }],

]);

const KanaRomanDictionaries = new Map([...gojuon, ...dakuon, ...handakuon, ...kogaki, ...youon]);

module.exports = {gojuon, dakuon, handakuon, kogaki, youon, KanaRomanDictionaries};