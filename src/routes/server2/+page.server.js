export function load() {
    // データ取得の処理
    async function count() {
        const x = 1 + 2 + 3;
        return {"num" : x};
    }
    return count()
}