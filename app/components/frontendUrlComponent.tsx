import {FrontendUrl} from "@/app/types/frontendUrl";

const frontEndUrlComponent = (frontendUrls: FrontendUrl[]) => {
    return frontendUrls.map((frontEnd) => {
        return (
            <li key={frontEnd.feName}><a href={frontEnd.url}>{frontEnd.feName}</a></li>
        )
    });
}

export default frontEndUrlComponent;