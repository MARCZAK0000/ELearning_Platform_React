import React from "react";
export type NotificationItemType = {
  title: string;
  description: string;
  sender: {
    accountID: string;
    firstName: string;
    surname: string;
  };
  isUnRead: boolean;
  timeSent: Date;
};

export type NotificationItemsType = {
  items: NotificationItemType[];
  firstIndex: number;
  lastIndex: number;
  pageIndex: number;
  pageSize: number;
  totalCount: number;
};

export type NotificationContextType = {
  showNotifications: boolean;
  setShowNotifications: React.Dispatch<React.SetStateAction<boolean>>;
  notifications: NotificationItemsType | null;
  setNotifications: React.Dispatch<
    React.SetStateAction<NotificationItemsType | null>
  >;
};
