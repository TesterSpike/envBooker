import {EnvironmentData} from "@/app/types/environmentData";

export const initialEnvironmentData: EnvironmentData[] = [
    {
        env: "TST1",
        metadata: {
            frontendUrls: [
                {
                    feName: "FE1",
                    url: "https://localhost:8080"
                },
                {
                    feName: "FE2",
                    url: "https://localhost:8080"
                }
            ],
            configManagerUrl: {
                cmName: "CM1",
                url: "https://localhost:8080"
            }
        }
    },
    {
        env: "TST2",
        metadata: {
            frontendUrls: [{
                feName: "FE1",
                url: "https://localhost:8080"
            }],
            configManagerUrl: {
                cmName: "CM1",
                url: "https://localhost:8080"
            }
        }
    },
    {
        env: "TST3",
        metadata: {
            frontendUrls: [{
                feName: "FE1",
                url: "https://localhost:8080"
            }],
            configManagerUrl: {
                cmName: "CM2",
                url: "https://localhost:8080"
            }
        }
    },
    {
        env: "TST4",
        metadata: {
            frontendUrls: [{
                feName: "FE1",
                url: "https://localhost:8080"
            }],
            configManagerUrl: {
                cmName: "CM3",
                url: "https://localhost:8080"
            }
        }
    },
    {
        env: "TST5",
        metadata: {
            frontendUrls: [{
                feName: "FE1",
                url: "https://localhost:8080"
            }],
            configManagerUrl: {
                cmName: "CM1",
                url: "https://localhost:8080"
            }
        }
    },
    {
        env: "TST6",
        metadata: {
            frontendUrls: [{
                feName: "FE1",
                url: "https://localhost:8080"
            }],
            configManagerUrl: {
                cmName: "CM2",
                url: "https://localhost:8080"
            }
        },
        bookingData: {
            bookedBy: "user1",
            bookingDate: "30/09/2024",
            untilTime: "6:00:00",
            shareable: true,
            notes: "temporarily shareable"
        }
    },
    {
        env: "TST7",
        metadata: {
            frontendUrls: [{
                feName: "FE1",
                url: "https://localhost:8080"
            }],
            configManagerUrl: {
                cmName: "CM1",
                url: "https://localhost:8080"
            }
        }
    },
    {
        env: "TST8",
        metadata: {
            frontendUrls: [{
                feName: "FE1",
                url: "https://localhost:8080"
            }],
            configManagerUrl: {
                cmName: "CM3",
                url: "https://localhost:8080"
            }
        }
    },
    {
        env: "TST9",
        metadata: {
            frontendUrls: [{
                feName: "FE1",
                url: "https://localhost:8080"
            }],
            configManagerUrl: {
                cmName: "CM3",
                url: "https://localhost:8080"
            }
        }
    }
];