import { Tags } from "../../Windows/Tags/Tags";
import styles from "./Sidebar.module.css";
import { Profile } from "../../Windows/Profile/Profile";
import { NotificationList } from "../../Notifications/NotificationList/NotificationList";
import { Overlay } from "../../Windows/Overlay/Overlay";
import { Snapshot } from "../../Windows/Snapshot/Snapshot";

export function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<Profile />
			<Tags />
			<Overlay />
			<Snapshot />
			<NotificationList />
		</div>
	);
}
