export default function result(result) {
    const result_array = []


    for (let i = 0; i < result.array.length; i++) {
        if(result_array.length !== 0) {
            for (let k = 0; k < result_array.length; k++) {
                if (result.obj[result.array[i]] > result.obj[result_array[k]]) {
                    result_array.splice(k,0,result.array[i])
                    break
                }
                else if (k === result_array.length - 1) {
                    result_array.push(result.array[i])
                    break
                }
            }
            }
        else {
            result_array.push(result.array[i])
        }
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>メンバー</th>
                    <th>スコア</th>
                </tr>
            </thead>
            <tbody>
                {result_array.map((i) => <tr key={i}><td>{i}</td><td>{result.obj[i]}</td></tr>
                )}
            </tbody>
        </table>
    )
}