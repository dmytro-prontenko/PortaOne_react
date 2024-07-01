import { useState } from 'react';
import {
    calculateAverage,
    decreasingSequence,
    findMaxValue,
    findMedian,
    findMinValue,
    increasingSequence
} from "./helpers/calc_functions.js";

const App = () => {
    const [fileContent, setFileContent] = useState('');
    const [results, setResults] = useState({
        minValue: null,
        maxValue: null,
        increasingSequenceValue: null,
        decreasingSequenceValue: null,
        median: null,
        average: null,
    });

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target.result;
                setFileContent(content);

            };
            reader.readAsText(file);
        }
    };

    const handleCalculate = (event) => {
        event.preventDefault();
        if (fileContent) {
            const numbersArr = fileContent.split("\n").map(Number);
            const sortedArr = numbersArr.toSorted();
            const minValue = findMinValue(sortedArr);
            const maxValue = findMaxValue(sortedArr);
            const increasingSequenceValue = increasingSequence(numbersArr);
            const decreasingSequenceValue = decreasingSequence(numbersArr);
            const median = findMedian(sortedArr);
            const average = calculateAverage(numbersArr);
            setResults({
                minValue,
                maxValue,
                increasingSequenceValue,
                decreasingSequenceValue,
                median,
                average,
            });
            setFileContent('');
        } else {
            console.error("No file content available for processing.");
        }
    };

    const clearResult = () => {
        setResults({
            minValue: null,
            maxValue: null,
            increasingSequenceValue: null,
            decreasingSequenceValue: null,
            median: null,
            average: null,
        })
        document.getElementById("form").reset();
    }

    return (
        <main>
            <h1>Тестове завдання PortaOne</h1>
            <h2>Застосунок дозволяє визначити на послідовності чисел наступні показники:</h2>
            <div className="results">
                <div className={"result-row"}>
                    <p>Мінімальне число в файлі: </p>
                    <span className={"result-span"}>{results.minValue || ""}</span>
                </div>
                <div className={"result-row"}>
                    <p>Максимальне число в файлі: </p>
                    <span className={"result-span"}>{results.maxValue || ""}</span>
                </div>
                <div className={"result-row"}>
                    <p>Медіана: </p>
                    <span className={"result-span"}>{results.median || ""}</span>
                </div>
                <div className={"result-row"}>
                    <p>Середнє арифметичне значення: </p>
                    <span className={"result-span"}>{results.average || ""}</span>
                </div>
                <div className={"result-row"}>
                    <p>Найбільша зростаюча послідовність чисел: </p>
                    <span
                        className={"result-span"}>{results.increasingSequenceValue || ""}</span>
                </div>
                <div className={"result-row"}>
                    <p>Найбільша спадаюча послідовність чисел: </p>
                    <span
                        className={"result-span"}>{results.decreasingSequenceValue || ""}</span>
                </div>
            </div>
            <form onSubmit={handleCalculate} className={"form"} id={"form"}>
                <p>Для запуску застосунку натисніть на кнопку та оберіть потрібний файл з послідовністю чисел</p>
                <input type="file" onChange={handleFileChange}/>
                <div className={"buttons-wrapper"}>
                    <button disabled={!fileContent}>Вирахувати</button>
                    <button onClick={clearResult} disabled={!results.minValue}>Очистити результати</button>
                </div>
            </form>
        </main>
);
};

export default App;
