
"use strict";

const MoraNode = require("./MoraNode");

/**
 * constructor
 * @param {string} from 
 * @param {number} pos 
 * @param {MoraNode[]} node
 */
function Mora(from, pos, node) {
    this.from = from;
    this.pos = pos;
    this.node = node;
}

module.exports = Mora;