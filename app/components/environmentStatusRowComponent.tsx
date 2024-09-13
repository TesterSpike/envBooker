import {environmentData} from "@/app/types/environmentData";

const environmentStatusComponent = (rows: environmentData[]) => {
    return rows.map((row) => {
        if(row.bookingData) {
            const shareable = (row.bookingData.shareable)? 'bg-amber-200 border' : 'border'
            return (
                <>
                    <tr className={shareable}>
                        <td>{row.env}</td>
                        <td>{row.bookingData.bookedBy}</td>
                        <td>{new Date(row.bookingData.bookingDate).toLocaleDateString("en-uk")}</td>
                        <td>{row.bookingData.untilTime}</td>
                        <td>{row.bookingData.untilTime}</td>
                        <td>{row.bookingData.shareable}</td>
                        <td>{row.bookingData.notes}</td>
                        <td>Remove booking</td>
                    </tr>
                </>
            )
        } else {
           return (
               <>
                <tr>
                    <td>{row.env}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </>
           );
        }

    });
}

export default environmentStatusComponent;