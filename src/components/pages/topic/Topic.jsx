import { markdown } from "markdown";
import styles from "./Topic.module.scss";

const Topic = () => {
	const md =
		"# Описание\n Данное Api реализовано в RESTful стиле, также была соблюдена 3 нормальная форма базы данных, и проект был разбит на 3 составляющие: \n#![alt-text](https://sun9-44.userapi.com/impg/Av8cxJ7fINHUtJr6DUXCFKe7IrOdXwk4JqhJNw/cFVLaHLAiKw.jpg?size=583x404&quality=96&sign=354c820be3e3d6dfa201505a5f775d14&type=album)"
        + "\n- _Модели_ (TikTakToe.Domain) \n- _Абстракция-доступ к_  *базе данных* \n- _https://localhost:7241/api/User_";

	const mdToHtml = markdown.toHTML(md);
	console.log(mdToHtml);

	return (
		<div className={styles.topic}>
			<div className={styles.topicCredentials}>
				<img src="https://i.ytimg.com/vi/lOJQl9UtdkE/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgWihPMA8=&rs=AOn4CLD8TbXBjU1VJp28lo6ONV11genawA" />
				<div className={styles.topicCredentialsInfo}>
					<p className={styles.topicTitle}>Мы запускаемся. Let`s celebrate and ...</p>
					<p className={styles.topicDate}>
						Дата создания: 11.11.2011
					</p>
					<div className={styles.badges}>
						<p className={`${styles.topicType} ${styles.typeInfo}`}>All</p>
						<p className={styles.topicLanguage}>English</p>
					</div>
				</div>
			</div>
			<div
				className={styles.topicContent}
				dangerouslySetInnerHTML={{ __html: mdToHtml }}
			></div>
		</div>
	);
};

export default Topic;
