import { useState } from "react";
import CustomModal from "./Modal";


const TextLength = ({ content, limit, title }) => {
	// const [showAll, setShowAll] = useState(false);

	const [showComponent, setShowComponent] = useState(false);

	const handleClick = () => {
		setShowComponent(!showComponent);
		// setShowComponent(false);
	}

	// const showMore = () => setShowAll(true);
	// const showLess = () => setShowAll(false);

	if (content.length <= limit) {
		// there is nothing more to show
		return <p>{content}</p>
	}
	// if (showAll) {
	// 	// We show the extended text and a link to reduce it
	// 	const toShow = content + "...";
	// 	return <p>
	// 		{toShow}
	// 		<p onClick={showLess} className="text-primary" style={{ cursor: "pointer" }}>
	// 			Read less
	// 		</p>
	// 	</p>
	// }
	// In the final case, we show a text with ellipsis and a `Read more` button
	const toShow = content.substring(0, limit) + "...";
	return (
		<div>
			<p>{toShow}</p>
			<p
				onClick={handleClick}
				className="text-primary"
				style={{ cursor: "pointer" }}
			>
				Read more
			</p>
			{
				showComponent &&
				<CustomModal
					title={title}
					onClose={() => setShowComponent(false)}
					content={content}
				/>
			}
		</div>
	);
}

export default TextLength;