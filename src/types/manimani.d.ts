declare module 'manimani' {
    export function tokenize(dic: string, sentence: string, callback: (moras: string[]) => void): void;
}