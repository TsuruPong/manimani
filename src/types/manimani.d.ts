declare module 'manimani' {
    export function tokenize(sentence: string, callback: (moras: string[]) => void): void;
}