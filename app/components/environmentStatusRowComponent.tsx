import {environmentData} from "@/app/types/environmentData";
import frontendUrlComponent from "@/app/components/frontendUrlComponent";

const environmentStatusComponent = (rows: environmentData[]) => {
    return rows.map((row) => {
        const bookingData = row.bookingData;
        const shareable = (row.bookingData?.shareable) ? 'bg-amber-200 border' : 'border'
        return (
            <tr className={shareable} key={row.env}>
                <td>{row.env}</td>
                <td>
                    <ul>{frontendUrlComponent(row.metadata.frontendUrls)}</ul>
                </td>
                <td><a href={row.metadata.configManagerUrl.url}>{row.metadata.configManagerUrl.cmName}</a></td>
                <td>{(bookingData) ? bookingData.bookedBy : ''}</td>
                <td>{(bookingData) ? new Date(bookingData.bookingDate).toLocaleDateString("en-uk") : ''}</td>
                <td>{(bookingData) ? bookingData.untilTime : ''}</td>
                <td>{(bookingData) ? bookingData.untilTime : ''}</td>
                <td>{(bookingData) ? bookingData.shareable : ''}</td>
                <td>{(bookingData) ? bookingData.notes : ''}</td>
                <td>{(bookingData) ? 'Remove' : ''}</td>
            </tr>
        )
    });
}

export default environmentStatusComponent;