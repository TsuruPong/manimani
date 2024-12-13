"use strict";

const MoraNode = require("./MoraNode");

/**
 * constructor
 */
function MoraNodeBuilder () {

}

/**
 * Builds a tree of Mora nodes from an array of Romanized strings.
 * @param {string[]} romans 
 */
MoraNodeBuilder.prototype.build = function (romans) {
    var nodes = [];
    for (const r of romans) {
        var num = 0;
        const chars = [...r];
        let prev;
        for (const c of chars) {
            if (chars.length === 1 && ["n", "x", "l"].includes(c)) {
                const n = new MoraNode(num, c);
                nodes.push(n);
                continue;
            }
            if (!prev){
                const root = nodes.find(n => n.val == c);
                if (root) {
                    prev = root;
                } else {
                    const n = new MoraNode(num, c);
                    num++;
                    nodes.push(n);
                    prev = n;
                }
            } else {
                const current = prev.children.find(n => n.val == c);
                if (current) {
                    prev = current;
                } else {
                    prev.add(c);
                    prev = prev.children.find(n => n.val == c);
                }
            }
        }
    }
    return nodes;
}

module.exports = MoraNodeBuilder;