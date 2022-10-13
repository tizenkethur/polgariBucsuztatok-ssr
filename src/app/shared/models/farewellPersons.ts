import { Track } from 'ngx-audio-player';

export interface farewellPerson {
  id: number;
  name: string;
  pictureUrl: string;
  introduction: string;
  quote: string;
  phone: string[];
  email: string;
  web?: string;
  facebook?: string;
  videoId?: string;
  playlist?: Track[];
}
