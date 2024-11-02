var KanaDictienaries = require("./KanaDictionaries");

const gojuon = new Map([
    // あ行
    [KanaDictienaries.A, { from: KanaDictienaries.A, shiins: [], boin: 'a' }],
    [KanaDictienaries.I, { from: KanaDictienaries.I, shiins: ['y'], boin: 'i' }],
    [KanaDictienaries.U, { from: KanaDictienaries.U, shiins: ['w', 'wh'], boin: 'u' }],
    [KanaDictienaries.E, { from: KanaDictienaries.E, shiins: [], boin: 'e' }],
    [KanaDictienaries.O, { from: KanaDictienaries.O, shiins: [], boin: 'o' }],
    
    // か行
    [KanaDictienaries.KA, { from: KanaDictienaries.KA, shiins: ['k', 'c'], boin: 'a' }],
    [KanaDictienaries.KI, { from: KanaDictienaries.KI, shiins: ['k'], boin: 'i' }],
    [KanaDictienaries.KU, { from: KanaDictienaries.KU, shiins: ['k', 'c', 'q'], boin: 'u' }],
    [KanaDictienaries.KE, { from: KanaDictienaries.KE, shiins: ['k'], boin: 'e' }],
    [KanaDictienaries.KO, { from: KanaDictienaries.KO, shiins: ['k', 'c'], boin: 'o' }],
    
    // さ行
    [KanaDictienaries.SA, { from: KanaDictienaries.SA, shiins: ['s'], boin: 'a' }],
    [KanaDictienaries.SI, { from: KanaDictienaries.SI, shiins: ['s', 'sh', 'c'], boin: 'i' }],
    [KanaDictienaries.SU, { from: KanaDictienaries.SU, shiins: ['s'], boin: 'u' }],
    [KanaDictienaries.SE, { from: KanaDictienaries.SE, shiins: ['s', 'c'], boin: 'e' }],
    [KanaDictienaries.SO, { from: KanaDictienaries.SO, shiins: ['s'], boin: 'o' }],
    
    // た行
    [KanaDictienaries.TA, { from: KanaDictienaries.TA, shiins: ['t'], boin: 'a' }],
    [KanaDictienaries.TI, { from: KanaDictienaries.TI, shiins: ['t', 'ch'], boin: 'i' }],
    [KanaDictienaries.TU, { from: KanaDictienaries.TU, shiins: ['t', 'ts'], boin: 'u' }],
    [KanaDictienaries.TE, { from: KanaDictienaries.TE, shiins: ['t'], boin: 'e' }],
    [KanaDictienaries.TO, { from: KanaDictienaries.TO, shiins: ['t'], boin: 'o' }],
    
    // な行
    [KanaDictienaries.NA, { from: KanaDictienaries.NA, shiins: ['n'], boin: 'a' }],
    [KanaDictienaries.NI, { from: KanaDictienaries.NI, shiins: ['n'], boin: 'i' }],
    [KanaDictienaries.NU, { from: KanaDictienaries.NU, shiins: ['n'], boin: 'u' }],
    [KanaDictienaries.NE, { from: KanaDictienaries.NE, shiins: ['n'], boin: 'e' }],
    [KanaDictienaries.NO, { from: KanaDictienaries.NO, shiins: ['n'], boin: 'o' }],
    
    // は行
    [KanaDictienaries.HA, { from: KanaDictienaries.HA, shiins: ['h'], boin: 'a' }],
    [KanaDictienaries.HI, { from: KanaDictienaries.HI, shiins: ['h'], boin: 'i' }],
    [KanaDictienaries.HU, { from: KanaDictienaries.HU, shiins: ['h', 'f'], boin: 'u' }],
    [KanaDictienaries.HE, { from: KanaDictienaries.HE, shiins: ['h'], boin: 'e' }],
    [KanaDictienaries.HO, { from: KanaDictienaries.HO, shiins: ['h'], boin: 'o' }],
    
    // ま行
    [KanaDictienaries.MA, { from: KanaDictienaries.MA, shiins: ['m'], boin: 'a' }],
    [KanaDictienaries.MI, { from: KanaDictienaries.MI, shiins: ['m'], boin: 'i' }],
    [KanaDictienaries.MU, { from: KanaDictienaries.MU, shiins: ['m'], boin: 'u' }],
    [KanaDictienaries.ME, { from: KanaDictienaries.ME, shiins: ['m'], boin: 'e' }],
    [KanaDictienaries.MO, { from: KanaDictienaries.MO, shiins: ['m'], boin: 'o' }],
    
    // や行
    [KanaDictienaries.YA, { from: KanaDictienaries.YA, shiins: ['y'], boin: 'a' }],
    [KanaDictienaries.YU, { from: KanaDictienaries.YU, shiins: ['y'], boin: 'u' }],
    [KanaDictienaries.YO, { from: KanaDictienaries.YO, shiins: ['y'], boin: 'o' }],
    
    // ら行
    [KanaDictienaries.RA, { from: KanaDictienaries.RA, shiins: ['r'], boin: 'a' }],
    [KanaDictienaries.RI, { from: KanaDictienaries.RI, shiins: ['r'], boin: 'i' }],
    [KanaDictienaries.RU, { from: KanaDictienaries.RU, shiins: ['r'], boin: 'u' }],
    [KanaDictienaries.RE, { from: KanaDictienaries.RE, shiins: ['r'], boin: 'e' }],
    [KanaDictienaries.RO, { from: KanaDictienaries.RO, shiins: ['r'], boin: 'o' }],
    
    // わ行
    [KanaDictienaries.WA, { from: KanaDictienaries.WA, shiins: ['w'], boin: 'a' }],
    [KanaDictienaries.WO, { from: KanaDictienaries.WO, shiins: ['w'], boin: 'o' }],    
    [KanaDictienaries.N, { from: KanaDictienaries.N, shiins: ['n', 'x'], boin: 'n' }]
]);

const dakuon = new Map([
    // が行
    [KanaDictienaries.GA, { from: KanaDictienaries.GA, shiins: ['g'], boin: 'a' }],
    [KanaDictienaries.GI, { from: KanaDictienaries.GI, shiins: ['g'], boin: 'i' }],
    [KanaDictienaries.GU, { from: KanaDictienaries.GU, shiins: ['g'], boin: 'u' }],
    [KanaDictienaries.GE, { from: KanaDictienaries.GE, shiins: ['g'], boin: 'e' }],
    [KanaDictienaries.GO, { from: KanaDictienaries.GO, shiins: ['g'], boin: 'o' }],

    // ざ行
    [KanaDictienaries.ZA, { from: KanaDictienaries.ZA, shiins: ['z'], boin: 'a' }],
    [KanaDictienaries.ZI, { from: KanaDictienaries.ZI, shiins: ['z', 'j'], boin: 'i' }],
    [KanaDictienaries.ZU, { from: KanaDictienaries.ZU, shiins: ['z'], boin: 'u' }],
    [KanaDictienaries.ZE, { from: KanaDictienaries.ZE, shiins: ['z'], boin: 'e' }],
    [KanaDictienaries.ZO, { from: KanaDictienaries.ZO, shiins: ['z'], boin: 'o' }],

    // だ行
    [KanaDictienaries.DA, { from: KanaDictienaries.DA, shiins: ['d'], boin: 'a' }],
    [KanaDictienaries.DI, { from: KanaDictienaries.DI, shiins: ['d'], boin: 'i' }],
    [KanaDictienaries.DU, { from: KanaDictienaries.DU, shiins: ['d'], boin: 'u' }],
    [KanaDictienaries.DE, { from: KanaDictienaries.DE, shiins: ['d'], boin: 'e' }],
    [KanaDictienaries.DO, { from: KanaDictienaries.DO, shiins: ['d'], boin: 'o' }],

    // ば行
    [KanaDictienaries.BA, { from: KanaDictienaries.BA, shiins: ['b'], boin: 'a' }],
    [KanaDictienaries.BI, { from: KanaDictienaries.BI, shiins: ['b'], boin: 'i' }],
    [KanaDictienaries.BU, { from: KanaDictienaries.BU, shiins: ['b'], boin: 'u' }],
    [KanaDictienaries.BE, { from: KanaDictienaries.BE, shiins: ['b'], boin: 'e' }],
    [KanaDictienaries.BO, { from: KanaDictienaries.BO, shiins: ['b'], boin: 'o' }],

    // ヴぁ行
    [KanaDictienaries.VA, { from: KanaDictienaries.VA, shiins: ['v'], boin: 'a' }],
    [KanaDictienaries.VI, { from: KanaDictienaries.VA, shiins: ['v'], boin: 'i' }],
    [KanaDictienaries.VU, { from: KanaDictienaries.VU, shiins: ['v'], boin: 'u' }],
    [KanaDictienaries.VE, { from: KanaDictienaries.VE, shiins: ['v'], boin: 'e' }],
    [KanaDictienaries.VO, { from: KanaDictienaries.VO, shiins: ['v'], boin: 'o' }]
]);

const handakuon = new Map([
    // ぱ行
    [KanaDictienaries.PA, { from: KanaDictienaries.PA, shiins: ['p'], boin: 'a' }],
    [KanaDictienaries.PI, { from: KanaDictienaries.PI, shiins: ['p'], boin: 'i' }],
    [KanaDictienaries.PU, { from: KanaDictienaries.PU, shiins: ['p'], boin: 'u' }],
    [KanaDictienaries.PE, { from: KanaDictienaries.PE, shiins: ['p'], boin: 'e' }],
    [KanaDictienaries.PO, { from: KanaDictienaries.PO, shiins: ['p'], boin: 'o' }]
]);

const kogaki = new Map([
    // ぁ行
    [KanaDictienaries.XA, { from: KanaDictienaries.XA, shiins: ['x', 'l'], boin: 'a' }],
    [KanaDictienaries.XI, { from: KanaDictienaries.XI, shiins: ['x', 'l'], boin: 'i' }],
    [KanaDictienaries.XU, { from: KanaDictienaries.XU, shiins: ['x', 'l'], boin: 'u' }],
    [KanaDictienaries.XE, { from: KanaDictienaries.XE, shiins: ['x', 'l'], boin: 'e' }],
    [KanaDictienaries.XO, { from: KanaDictienaries.XO, shiins: ['x', 'l'], boin: 'o' }],

    // っ
    [KanaDictienaries.XTU, { from: KanaDictienaries.XYU, shiins: ['xt', 'lt', 'xts', 'lts'], boin: 'u' }],

    // ゃ行
    [KanaDictienaries.XYA, { from: KanaDictienaries.XYA, shiins: ['xy', 'ly'], boin: 'a' }],
    [KanaDictienaries.XYU, { from: KanaDictienaries.XYU, shiins: ['xy', 'ly'], boin: 'u' }],
    [KanaDictienaries.XYO, { from: KanaDictienaries.XYO, shiins: ['xy', 'ly'], boin: 'o' }],

    // ゎ
    [KanaDictienaries.XWA, { from: KanaDictienaries.XWA, shiins: ['xw', 'lw'], boin: 'a' }]
]);

const youon = new Map([
    // あ行
    [KanaDictienaries.YE, { from: KanaDictienaries.YE, shiins: ['y'], boin: 'e', origin: gojuon.get(KanaDictienaries.I), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.WI, { from: KanaDictienaries.WI, shiins: ['w'], boin: 'i', origin: gojuon.get(KanaDictienaries.U), kogaki: kogaki.get(KanaDictienaries.XI) }],
    [KanaDictienaries.WE, { from: KanaDictienaries.WE, shiins: ['w'], boin: 'e', origin: gojuon.get(KanaDictienaries.U), kogaki: kogaki.get(KanaDictienaries.XE) }],

    // きゃ行
    [KanaDictienaries.KYA, { from: KanaDictienaries.KYA, shiins: ['ky'], boin: 'a', origin: gojuon.get(KanaDictienaries.KI), kogaki: kogaki.get(KanaDictienaries.XYA) }],
    [KanaDictienaries.KYI, { from: KanaDictienaries.KYI, shiins: ['ky'], boin: 'i', origin: gojuon.get(KanaDictienaries.KI), kogaki: kogaki.get(KanaDictienaries.XI) }],
    [KanaDictienaries.KYU, { from: KanaDictienaries.KYU, shiins: ['ky'], boin: 'u', origin: gojuon.get(KanaDictienaries.KI), kogaki: kogaki.get(KanaDictienaries.XYU) }],
    [KanaDictienaries.KYE, { from: KanaDictienaries.KYE, shiins: ['ky'], boin: 'e', origin: gojuon.get(KanaDictienaries.KI), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.KYO, { from: KanaDictienaries.KYO, shiins: ['ky'], boin: 'o', origin: gojuon.get(KanaDictienaries.KI), kogaki: kogaki.get(KanaDictienaries.XYO) }],

    // ぎゃ行
    [KanaDictienaries.GYA, { from: KanaDictienaries.GYA, shiins: ['gy'], boin: 'a', origin: dakuon.get(KanaDictienaries.GI), kogaki: kogaki.get(KanaDictienaries.XYA) }],
    [KanaDictienaries.GYI, { from: KanaDictienaries.GYI, shiins: ['gy'], boin: 'i', origin: dakuon.get(KanaDictienaries.GI), kogaki: kogaki.get(KanaDictienaries.XI) }],
    [KanaDictienaries.GYU, { from: KanaDictienaries.GYU, shiins: ['gy'], boin: 'u', origin: dakuon.get(KanaDictienaries.GI), kogaki: kogaki.get(KanaDictienaries.XYU) }],
    [KanaDictienaries.GYE, { from: KanaDictienaries.GYE, shiins: ['gy'], boin: 'e', origin: dakuon.get(KanaDictienaries.GI), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.GYO, { from: KanaDictienaries.GYO, shiins: ['gy'], boin: 'o', origin: dakuon.get(KanaDictienaries.GI), kogaki: kogaki.get(KanaDictienaries.XYO) }],

    // くぁ行
    [KanaDictienaries.QA, { from: KanaDictienaries.QA, shiins: ['q', 'kw'], boin: 'a', origin: gojuon.get(KanaDictienaries.KU), kogaki: kogaki.get(KanaDictienaries.XA) }],
    [KanaDictienaries.QI, { from: KanaDictienaries.QI, shiins: ['q', 'kw'], boin: 'i', origin: gojuon.get(KanaDictienaries.KU), kogaki: kogaki.get(KanaDictienaries.XI) }],
    [KanaDictienaries.QE, { from: KanaDictienaries.QE, shiins: ['q', 'kw'], boin: 'e', origin: gojuon.get(KanaDictienaries.KU), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.QO, { from: KanaDictienaries.QO, shiins: ['q', 'kw'], boin: 'o', origin: gojuon.get(KanaDictienaries.KU), kogaki: kogaki.get(KanaDictienaries.XO) }],

    // しゃ行
    [KanaDictienaries.SHA, { from: KanaDictienaries.SHA, shiins: ['sh', 'sy'], boin: 'a', origin: gojuon.get(KanaDictienaries.SI), kogaki: kogaki.get(KanaDictienaries.XYA) }],
    [KanaDictienaries.SYI, { from: KanaDictienaries.SYI, shiins: ['sy'], boin: 'i', origin: gojuon.get(KanaDictienaries.SI), kogaki: kogaki.get(KanaDictienaries.XI) }],
    [KanaDictienaries.SHU, { from: KanaDictienaries.SHU, shiins: ['sh', 'sy'], boin: 'u', origin: gojuon.get(KanaDictienaries.SI), kogaki: kogaki.get(KanaDictienaries.XYU) }],
    [KanaDictienaries.SHE, { from: KanaDictienaries.SHE, shiins: ['sh', 'sy'], boin: 'e', origin: gojuon.get(KanaDictienaries.SI), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.SHO, { from: KanaDictienaries.SHO, shiins: ['sh', 'sy'], boin: 'o', origin: gojuon.get(KanaDictienaries.SI), kogaki: kogaki.get(KanaDictienaries.XYO) }],

    // じゃ行
    [KanaDictienaries.JA, { from: KanaDictienaries.JA, shiins: ['j', 'jy'], boin: 'a', origin: dakuon.get(KanaDictienaries.ZI), kogaki: kogaki.get(KanaDictienaries.XYA) }],
    [KanaDictienaries.JYI, { from: KanaDictienaries.JYI, shiins: ['jy'], boin: 'i', origin: dakuon.get(KanaDictienaries.ZI), kogaki: kogaki.get(KanaDictienaries.XI) }],
    [KanaDictienaries.JU, { from: KanaDictienaries.JU, shiins: ['j', 'jy'], boin: 'u', origin: dakuon.get(KanaDictienaries.ZI), kogaki: kogaki.get(KanaDictienaries.XYU) }],
    [KanaDictienaries.JE, { from: KanaDictienaries.JE, shiins: ['j', 'jy'], boin: 'e', origin: dakuon.get(KanaDictienaries.ZI), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.JO, { from: KanaDictienaries.JO, shiins: ['j', 'jy'], boin: 'o', origin: dakuon.get(KanaDictienaries.ZI), kogaki: kogaki.get(KanaDictienaries.XYO) }],

    // ちゃ行
    [KanaDictienaries.CHA, { from: KanaDictienaries.CHA, shiins: ['ch', 'cy','ty'], boin: 'a', origin: gojuon.get(KanaDictienaries.TI), kogaki: kogaki.get(KanaDictienaries.XYA) }],
    [KanaDictienaries.CYI, { from: KanaDictienaries.CYI, shiins: ['cy','ty'], boin: 'i', origin: gojuon.get(KanaDictienaries.TI), kogaki: kogaki.get(KanaDictienaries.XI) }],
    [KanaDictienaries.CHU, { from: KanaDictienaries.CHU, shiins: ['ch', 'cy','ty'], boin: 'u', origin: gojuon.get(KanaDictienaries.TI), kogaki: kogaki.get(KanaDictienaries.XYU) }],
    [KanaDictienaries.CHE, { from: KanaDictienaries.CHE, shiins: ['ch', 'cy','ty'], boin: 'e', origin: gojuon.get(KanaDictienaries.TI), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.CHO, { from: KanaDictienaries.CHO, shiins: ['ch', 'cy','ty'], boin: 'o', origin: gojuon.get(KanaDictienaries.TI), kogaki: kogaki.get(KanaDictienaries.XYO) }],

    // ぢゃ行
    [KanaDictienaries.DYA, { from: KanaDictienaries.DYA, shiins: ['dy'], boin: 'a', origin: dakuon.get(KanaDictienaries.DI), kogaki: kogaki.get(KanaDictienaries.XYA) }],
    [KanaDictienaries.DYI, { from: KanaDictienaries.DYI, shiins: ['dy'], boin: 'i', origin: dakuon.get(KanaDictienaries.DI), kogaki: kogaki.get(KanaDictienaries.XI) }],
    [KanaDictienaries.DYU, { from: KanaDictienaries.DYU, shiins: ['dy'], boin: 'u', origin: dakuon.get(KanaDictienaries.DI), kogaki: kogaki.get(KanaDictienaries.XYU) }],
    [KanaDictienaries.DYE, { from: KanaDictienaries.DYE, shiins: ['dy'], boin: 'e', origin: dakuon.get(KanaDictienaries.DI), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.DYO, { from: KanaDictienaries.DYO, shiins: ['dy'], boin: 'o', origin: dakuon.get(KanaDictienaries.DI), kogaki: kogaki.get(KanaDictienaries.XYO) }],

    // つぁ行
    [KanaDictienaries.TSA, { from: KanaDictienaries.TSA, shiins: ['ts'], boin: 'a', origin: gojuon.get(KanaDictienaries.TU), kogaki: kogaki.get(KanaDictienaries.XA) }],
    [KanaDictienaries.TSI, { from: KanaDictienaries.TSI, shiins: ['ts'], boin: 'i', origin: gojuon.get(KanaDictienaries.TU), kogaki: kogaki.get(KanaDictienaries.XI) }],
    [KanaDictienaries.TSE, { from: KanaDictienaries.TSE, shiins: ['ts'], boin: 'e', origin: gojuon.get(KanaDictienaries.TU), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.TSO, { from: KanaDictienaries.TSO, shiins: ['ts'], boin: 'o', origin: gojuon.get(KanaDictienaries.TU), kogaki: kogaki.get(KanaDictienaries.XO) }],

    // てゃ行
    [KanaDictienaries.THA, { from: KanaDictienaries.THA, shiins: ['th'], boin: 'a', origin: gojuon.get(KanaDictienaries.TE), kogaki: kogaki.get(KanaDictienaries.XYA) }],
    [KanaDictienaries.THI, { from: KanaDictienaries.THI, shiins: ['th'], boin: 'i', origin: gojuon.get(KanaDictienaries.TE), kogaki: kogaki.get(KanaDictienaries.XI) }],
    [KanaDictienaries.THU, { from: KanaDictienaries.THU, shiins: ['th'], boin: 'u', origin: gojuon.get(KanaDictienaries.TE), kogaki: kogaki.get(KanaDictienaries.XYU) }],
    [KanaDictienaries.THE, { from: KanaDictienaries.THE, shiins: ['th'], boin: 'e', origin: gojuon.get(KanaDictienaries.TE), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.THO, { from: KanaDictienaries.THO, shiins: ['th'], boin: 'o', origin: gojuon.get(KanaDictienaries.TE), kogaki: kogaki.get(KanaDictienaries.XYO) }],

    // でゃ行
    [KanaDictienaries.DHA, { from: KanaDictienaries.DHA, shiins: ['dh'], boin: 'a', origin: dakuon.get(KanaDictienaries.DE), kogaki: kogaki.get(KanaDictienaries.XYA) }],
    [KanaDictienaries.DHI, { from: KanaDictienaries.DHI, shiins: ['dh'], boin: 'i', origin: dakuon.get(KanaDictienaries.DE), kogaki: kogaki.get(KanaDictienaries.XI) }],
    [KanaDictienaries.DHU, { from: KanaDictienaries.DHU, shiins: ['dh'], boin: 'u', origin: dakuon.get(KanaDictienaries.DE), kogaki: kogaki.get(KanaDictienaries.XYU) }],
    [KanaDictienaries.DHE, { from: KanaDictienaries.DHE, shiins: ['dh'], boin: 'e', origin: dakuon.get(KanaDictienaries.DE), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.DHO, { from: KanaDictienaries.DHO, shiins: ['dh'], boin: 'o', origin: dakuon.get(KanaDictienaries.DE), kogaki: kogaki.get(KanaDictienaries.XYO) }],

    // にゃ行
    [KanaDictienaries.NYA, { from: KanaDictienaries.NYA, shiins: ['ny'], boin: 'a', origin: gojuon.get(KanaDictienaries.NI), kogaki: kogaki.get(KanaDictienaries.XYA) }],
    [KanaDictienaries.NYI, { from: KanaDictienaries.NYI, shiins: ['ny'], boin: 'i', origin: gojuon.get(KanaDictienaries.NI), kogaki: kogaki.get(KanaDictienaries.XI) }],    
    [KanaDictienaries.NYU, { from: KanaDictienaries.NYU, shiins: ['ny'], boin: 'u', origin: gojuon.get(KanaDictienaries.NI), kogaki: kogaki.get(KanaDictienaries.XYU) }],
    [KanaDictienaries.NYE, { from: KanaDictienaries.NYE, shiins: ['ny'], boin: 'e', origin: gojuon.get(KanaDictienaries.NI), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.NYO, { from: KanaDictienaries.NYO, shiins: ['ny'], boin: 'o', origin: gojuon.get(KanaDictienaries.NI), kogaki: kogaki.get(KanaDictienaries.XYO) }],

    // ひゃ行
    [KanaDictienaries.HYA, { from: KanaDictienaries.HYA, shiins: ['hy'], boin: 'a', origin: gojuon.get(KanaDictienaries.HI), kogaki: kogaki.get(KanaDictienaries.XYA) }],
    [KanaDictienaries.HYI, { from: KanaDictienaries.HYI, shiins: ['hy'], boin: 'i', origin: gojuon.get(KanaDictienaries.HI), kogaki: kogaki.get(KanaDictienaries.XI) }],    
    [KanaDictienaries.HYU, { from: KanaDictienaries.HYU, shiins: ['hy'], boin: 'u', origin: gojuon.get(KanaDictienaries.HI), kogaki: kogaki.get(KanaDictienaries.XYU) }],
    [KanaDictienaries.HYE, { from: KanaDictienaries.HYE, shiins: ['hy'], boin: 'e', origin: gojuon.get(KanaDictienaries.HI), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.HYO, { from: KanaDictienaries.HYO, shiins: ['hy'], boin: 'o', origin: gojuon.get(KanaDictienaries.HI), kogaki: kogaki.get(KanaDictienaries.XYO) }],

    // びゃ行
    [KanaDictienaries.BYA, { from: KanaDictienaries.BYA, shiins: ['by'], boin: 'a', origin: dakuon.get(KanaDictienaries.BI), kogaki: kogaki.get(KanaDictienaries.XYA) }],
    [KanaDictienaries.BYI, { from: KanaDictienaries.BYI, shiins: ['by'], boin: 'i', origin: dakuon.get(KanaDictienaries.BI), kogaki: kogaki.get(KanaDictienaries.XI) }],    
    [KanaDictienaries.BYU, { from: KanaDictienaries.BYU, shiins: ['by'], boin: 'u', origin: dakuon.get(KanaDictienaries.BI), kogaki: kogaki.get(KanaDictienaries.XYU) }],
    [KanaDictienaries.BYE, { from: KanaDictienaries.BYE, shiins: ['by'], boin: 'e', origin: dakuon.get(KanaDictienaries.BI), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.BYO, { from: KanaDictienaries.BYO, shiins: ['by'], boin: 'o', origin: dakuon.get(KanaDictienaries.BI), kogaki: kogaki.get(KanaDictienaries.XYO) }],

    // ぴゃ行
    [KanaDictienaries.PYA, { from: KanaDictienaries.PYA, shiins: ['py'], boin: 'a', origin: handakuon.get(KanaDictienaries.PI), kogaki: kogaki.get(KanaDictienaries.XYA) }],
    [KanaDictienaries.PYI, { from: KanaDictienaries.PYI, shiins: ['py'], boin: 'i', origin: handakuon.get(KanaDictienaries.PI), kogaki: kogaki.get(KanaDictienaries.XI) }],    
    [KanaDictienaries.PYU, { from: KanaDictienaries.PYU, shiins: ['py'], boin: 'u', origin: handakuon.get(KanaDictienaries.PI), kogaki: kogaki.get(KanaDictienaries.XYU) }],
    [KanaDictienaries.PYE, { from: KanaDictienaries.PYE, shiins: ['py'], boin: 'e', origin: handakuon.get(KanaDictienaries.PI), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.PYO, { from: KanaDictienaries.PYO, shiins: ['py'], boin: 'o', origin: handakuon.get(KanaDictienaries.PI), kogaki: kogaki.get(KanaDictienaries.XYO) }],

    // ふぁ行
    [KanaDictienaries.FA, { from: KanaDictienaries.FA, shiins: ['f', 'fw'], boin: 'a', origin: gojuon.get(KanaDictienaries.HU), kogaki: kogaki.get(KanaDictienaries.XA) }],
    [KanaDictienaries.FI, { from: KanaDictienaries.FI, shiins: ['f', 'fy', 'fw'], boin: 'i', origin: gojuon.get(KanaDictienaries.HU), kogaki: kogaki.get(KanaDictienaries.XI) }],    
    [KanaDictienaries.FE, { from: KanaDictienaries.FE, shiins: ['f', 'fy', 'fw'], boin: 'e', origin: gojuon.get(KanaDictienaries.HU), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.FO, { from: KanaDictienaries.FO, shiins: ['f', 'fw'], boin: 'o', origin: gojuon.get(KanaDictienaries.HU), kogaki: kogaki.get(KanaDictienaries.XO) }],

    // ふゃ行
    [KanaDictienaries.FYA, { from: KanaDictienaries.FYA, shiins: ['fy'], boin: 'a', origin: gojuon.get(KanaDictienaries.HU), kogaki: kogaki.get(KanaDictienaries.XYA) }],
    [KanaDictienaries.FYU, { from: KanaDictienaries.FYU, shiins: ['fy'], boin: 'u', origin: gojuon.get(KanaDictienaries.HU), kogaki: kogaki.get(KanaDictienaries.XYU) }],
    [KanaDictienaries.FYO, { from: KanaDictienaries.FYO, shiins: ['fy'], boin: 'o', origin: gojuon.get(KanaDictienaries.HU), kogaki: kogaki.get(KanaDictienaries.XYO) }],

    // みゃ行
    [KanaDictienaries.MYA, { from: KanaDictienaries.MYA, shiins: ['my'], boin: 'a', origin: gojuon.get(KanaDictienaries.MI), kogaki: kogaki.get(KanaDictienaries.XYA) }],
    [KanaDictienaries.MYI, { from: KanaDictienaries.MYI, shiins: ['my'], boin: 'i', origin: gojuon.get(KanaDictienaries.MI), kogaki: kogaki.get(KanaDictienaries.XI) }],    
    [KanaDictienaries.MYU, { from: KanaDictienaries.MYU, shiins: ['my'], boin: 'u', origin: gojuon.get(KanaDictienaries.MI), kogaki: kogaki.get(KanaDictienaries.XYU) }],
    [KanaDictienaries.MYE, { from: KanaDictienaries.MYE, shiins: ['my'], boin: 'e', origin: gojuon.get(KanaDictienaries.MI), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.MYO, { from: KanaDictienaries.MYO, shiins: ['my'], boin: 'o', origin: gojuon.get(KanaDictienaries.MI), kogaki: kogaki.get(KanaDictienaries.XYO) }],

    // りゃ行
    [KanaDictienaries.RYA, { from: KanaDictienaries.RYA, shiins: ['ry'], boin: 'a', origin: gojuon.get(KanaDictienaries.RI), kogaki: kogaki.get(KanaDictienaries.XYA) }],
    [KanaDictienaries.RYI, { from: KanaDictienaries.RYI, shiins: ['ry'], boin: 'i', origin: gojuon.get(KanaDictienaries.RI), kogaki: kogaki.get(KanaDictienaries.XI) }],    
    [KanaDictienaries.RYU, { from: KanaDictienaries.RYU, shiins: ['ry'], boin: 'u', origin: gojuon.get(KanaDictienaries.RI), kogaki: kogaki.get(KanaDictienaries.XYU) }],
    [KanaDictienaries.RYE, { from: KanaDictienaries.RYE, shiins: ['ry'], boin: 'e', origin: gojuon.get(KanaDictienaries.RI), kogaki: kogaki.get(KanaDictienaries.XE) }],
    [KanaDictienaries.RYO, { from: KanaDictienaries.RYO, shiins: ['ry'], boin: 'o', origin: gojuon.get(KanaDictienaries.RI), kogaki: kogaki.get(KanaDictienaries.XYO) }],

]);

const KanaRomanDictionaries = new Map([...gojuon, ...dakuon, ...handakuon, ...kogaki, ...youon]);

module.exports = {gojuon, dakuon, handakuon, kogaki, youon, KanaRomanDictionaries};