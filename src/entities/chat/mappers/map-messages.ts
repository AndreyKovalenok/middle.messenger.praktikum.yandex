import { dateTimeUtils } from "shared/utils";

import type { TMessage } from "../types";

export const mapMessages = (data: any, userId: number): TMessage[] => {
  return data.map((item: any) => ({
    isUserMessage: item.user_id === userId,
    text: item.content,
    time: dateTimeUtils.getReadableHours(item.time),
  }));
};
