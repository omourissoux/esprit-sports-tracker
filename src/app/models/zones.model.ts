export interface ActivityZonesData {
    score: number;
    distribution_buckets: Bucket[];
    type: ZoneType;
    sensor_based: boolean;
    points: number;
    custom_zones: boolean;
    max: number;
}

export interface Bucket {
    min: number;
    max: number;
    time: number;
}

enum ZoneType {
    HeartRate = "heartrate",
    Power = "power"
}

export interface AthleteZonesData {
    heart_rate: HearRateZonesData;
    power: PowerZonesData
}

export interface PowerZonesData {
    zones: Boundaries[];
}

export interface HearRateZonesData {
    custom_zones: boolean;
    zones: Boundaries[];
}

export interface Boundaries {
    min: number;
    max: number;
}

export interface Zone {
    zoneNumber: number;
    boundaries: Boundaries;
}