
import Markdown from "react-markdown";
import styles from "./Topic.module.scss";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getTopicByIdAsync } from "../../../services/api/topics/topics";
import Loading from "../../ui/loading/Loading.jsx";

const Topic = () => {

	const levelTypes = new Map();
	levelTypes.set("info", "typeInfo");
	levelTypes.set("beginner", "typeBeginner");
	levelTypes.set("intermediate", "typeIntermediate");
	levelTypes.set("advanced", "typeAdvanced");
	
    let { id } = useParams();
	const [topic, setTopic] = useState();
	const [language, setLanguage] = useState();
	const [level, setLevel] = useState();

	useEffect(() => {
		const fetchData = async () => {
			const result = await getTopicByIdAsync(id);
			console.log(result);
			setTopic(result.data.data);
			setLanguage(result.data.data.language.name);
			setLevel(result.data.data.topicLevel.levelName)
			console.log(styles[levelTypes.get(result.data.data.topicLevel.levelName)]);
		}

		fetchData();
	}, []);

	return !(topic && level) ? <Loading/> : (
		<div className={styles.topic}>
			<div className={styles.topicCredentials}>
				<img src={topic.icon} />
				<div className={styles.topicCredentialsInfo}>
					<p className={styles.topicTitle}>{topic.title}</p>
					<p className={styles.topicDate}>
						Дата создания: {topic.creationalDate}
					</p>
					<div className={styles.badges}>
						<p className={`${styles.topicType} ${styles[levelTypes.get(level)]}`}>{level}</p>
						<p className={styles.topicLanguage}>{language}</p>
					</div>
				</div>
			</div>
            <Markdown 
				className={styles.topicContent}>
                {topic.content}
            </Markdown>
		</div>
	);
};

export default Topic;
