import {UserId} from './user';

export type RoomId = number;

// 방정보
export interface Room {
  id: RoomId;
  title: string;
  userId: UserId;
  created_at: string;
  member_limit: number;
  start_time: string;
  end_time: string;
  language: string;
  annual_min?: number;
  annual_max?: number;
  image_url?: string;
}
