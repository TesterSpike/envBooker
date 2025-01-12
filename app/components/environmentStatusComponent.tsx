import environmentStatusRowComponent from "@/app/components/environmentStatusRowComponent";
import { EnvironmentData } from "../types/environmentData";

const environmentStatusComponent = (rows: EnvironmentData[]) => (
    <table>
        <thead>
        <tr>
            <th>Environment</th>
            <th>Front End</th>
            <th>Config URL</th>
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