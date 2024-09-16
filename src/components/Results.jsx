import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
    const resultsData = calculateInvestmentResults(input);

    // İlk yılın yatırım değerlerinden başlangıç yatırımını hesapla
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>

            <tbody>
                {resultsData.map((yearData) => {
                    // `totalInterest` hesaplama
                    const totalInterest = yearData.valueEndOfYear - (input.annualInvestment * yearData.year) - initialInvestment;

                    // `totalAmountInvested` hesaplama
                    const totalAmountInvested = input.initialInvestment + (input.annualInvestment * yearData.year);

                    return (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
