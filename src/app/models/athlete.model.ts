export interface Bike {
  id: string;
  primary: boolean;
  name: string;
  resource_state: number;
  distance: number;
}

export interface Shoe {
  id: string;
  primary: boolean;
  name: string;
  resource_state: number;
  distance: number;
}

export interface Athlete {
  id: number;
  username: string;
  resource_state: number;
  firstname: string;
  lastname: string;
  city: string;
  state: string;
  country: string;
  sex: string;
  premium: boolean;
  created_at: Date;
  updated_at: Date;
  badge_type_id: number;
  profile_medium: string;
  profile: string;
  friend?: any;
  follower?: any;
  follower_count: number;
  friend_count: number;
  mutual_friend_count: number;
  athlete_type: number;
  date_preference: string;
  measurement_preference: string;
  clubs: any[];
  ftp?: any;
  weight: number;
  bikes: Bike[];
  shoes: Shoe[];
}

export interface Club {
  id: number;
  resource_state: number;
  name: string;
  profile_medium: string;
  cover_photo: string;
  cover_photo_small: string;
  sport_type: string;
  city: string;
  state: string;
  country: string;
  private: boolean;
  member_count: number;
  featured: boolean;
  verified: boolean;
  url: string;
}

export enum SportType {
  CYCLING = 'cycling',
  RUNNING = 'running',
  TRIATHLON = 'triathlon',
  OTHER = 'other'
}

export enum ActivityType {
  ALPINE_SKI = 'AlpineSki',
  BACKCOUNTRY_SKI = 'BackcountrySki',
  CANOEING = 'Canoeing',
  CROSSFIT = 'Crossfit',
  E_BIKE_RIDE = 'EBikeRide',
  ELLIPTICAL = 'Elliptical',
  GOLF = 'Golf',
  HANDCYCLE = 'Handcycle',
  HIKE = 'Hike',
  ICE_SKATE = 'IceSkate',
  INLINE_SKATE = 'InlineSkate',
  KAYAKING = 'Kayaking',
  KITESURF = 'Kitesurf',
  NORDIC_SKI = 'NordicSki',
  RIDE = 'Ride',
  ROCK_CLIMBING = 'RockClimbing',
  ROLLER_SKI = 'RollerSki',
  ROWING = 'Rowing',
  RUN = 'Run',
  SAIL = 'Sail',
  SKATEBOARD = 'Skateboard',
  SNOWBOARD = 'Snowboard',
  SNOWSHOE = 'Snowshoe',
  SOCCER = 'Soccer',
  STAIRSTEPPER = 'StairStepper',
  STANDUPPADDLING = 'StandUpPaddling',
  SURFING = 'Surfing',
  SWIM = 'Swim',
  VELOMOBILE = 'Velomobile',
  VIRTUALRIDE = 'VirtualRide',
  VIRTUALRUN = 'VirtualRun',
  WALK = 'Walk',
  WEIGHTTRAINING = 'WeightTraining',
  WHEELCHAIR = 'Wheelchair',
  WINDSURF = 'Windsurf',
  WORKOUT = 'Workout',
  YOGA = 'Yoga'
}
