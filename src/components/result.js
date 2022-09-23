export default function result(result) {
    return (
        <table>
            <thead>
                <tr>
                    <th>メンバー</th>
                    <th>スコア</th>
                </tr>
            </thead>
            <tbody>
                {result.array.map((i) => <tr key={i}><td>{i}</td><td>{result.obj[i]}</td></tr>
                )}
            </tbody>
        </table>
    )
}