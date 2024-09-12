import environmentStatusRowComponent from "@/app/components/environmentStatusRowComponent";
import { environmentData } from "../types/environmentData";

const environmentStatusComponent = (rows: environmentData[]) => (
    <table>
        <thead>
        <tr>
            <th>Environment</th>
            <th>Booked by</th>
            <th>Date</th>
            <th>Available from (PST)</th>
            <th>Available from (BST)</th>
            <th>Shareable</th>
            <th>Notes</th>
            <th>Remove booking</th>
        </tr>
        </thead>
        <tbody id="environmentStatusBody">
        {environmentStatusRowComponent(rows)}
        </tbody>
    </table>
);
export default environmentStatusComponent;