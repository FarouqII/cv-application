export default function SummaryForm({summary, setSummary}) {
    const handleChange = (e) => {
        const { name, value } = e.target;

        setSummary({
        ...summary,
        [name]: value,
        });
    };

    return (
        <div className="form">
            <h2>Professional Summary</h2>

            <textarea name="summary" rows="20" cols="50" maxLength={445} placeholder="Summary.." onChange={handleChange}></textarea>
        </div>
    )
}