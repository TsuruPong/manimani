declare module 'manimani' {
    export interface Mora {
        from: string;
        pos: number;
        node: MoraNode[];
    }
    export interface MoraNode {
        pos: number;
        val: string;
        children: MoraNode[];
        add(node: string): void;
    }
    export function tokenize(dic: string, sentence: string, callback: (moras: Mora[]) => void): void;
}