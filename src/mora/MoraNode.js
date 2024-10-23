"use strict";

/**
 * constructor
 * @param {number} pos 
 * @param {string} val 
 * @param {MoraNode[]} children 
 */
function MoraNode(pos, val, children) {
    this.pos = pos;
    this.val = val;
    this.children = children ?? [];
}

/**
 * Adds a new node or updates the existing ones in the children array.
 * @param {string} node 
 */
MoraNode.prototype.add = function(node) {
    if (!this.children.some(v => v == node)) {
        this.children.push(new MoraNode(this.pos + 1, node))
        return;
    }
    this.children.map(n => n.add(node));
}

module.exports = MoraNode;