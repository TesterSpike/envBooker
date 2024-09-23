import {FrontendUrl} from "@/app/types/frontendUrl";
import {ConfigManagerUrl} from "@/app/types/configManagerUrl";

export type EnvironmentMetadata = {
    frontendUrls: FrontendUrl[];
    configManagerUrl: ConfigManagerUrl;
}