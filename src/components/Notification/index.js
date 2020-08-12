import {NotificationManager} from "react-notifications";

export  const successNotification = () => {
    NotificationManager.success("Successfully Record Created");
};
export  const updatedNotification = () => {
    NotificationManager.success("Successfully Record Updated");
};
export const DeletedNotification = () => {
    NotificationManager.success("Successfully Record Deleted");
};
export const errorNotification = () => {
    NotificationManager.error("Something went to Wrong ! Try Again Later");
};
