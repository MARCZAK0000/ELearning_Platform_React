import React from "react";
export type NotificationType = {
  title: string;
  description: string;
};

export type NotificationContextType = {
  showNotifications: boolean;
  setShowNotifications: React.Dispatch<React.SetStateAction<boolean>>;
  notifications: NotificationType[] | null;
  setNotifications: React.Dispatch<
    React.SetStateAction<NotificationType[] | null>
  >;
};
