import {environmentBookingData} from "@/app/types/environmentBookingData";
import {environmentMetadata} from "@/app/types/environmentMetadata";

export type environmentData = {
    env: string;
    metadata: environmentMetadata;
    bookingData: environmentBookingData;
};