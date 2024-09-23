import {EnvironmentBookingData} from "@/app/types/environmentBookingData";
import {EnvironmentMetadata} from "@/app/types/environmentMetadata";

export type EnvironmentData = {
    env: string;
    metadata: EnvironmentMetadata;
    bookingData?: EnvironmentBookingData;
};