import {frontendUrl} from "@/app/types/frontendUrl";
import {configManagerUrl} from "@/app/types/configManagerUrl";

export type environmentMetadata = {
    frontendUrls: frontendUrl[];
    configManagerUrl: configManagerUrl;
}