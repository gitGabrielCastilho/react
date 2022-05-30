import React, { useEffect, useState } from "react";
import images from "./data"
import { SRLWrapper } from 'simple-react-lightbox';



function Apps() {
	const [tag, setTag] = useState('all');
	const [filteredImages, setFilteredImages] = useState([]);
	
	

	useEffect(
		() => {
			tag === 'all' ? setFilteredImages(images) : 
            setFilteredImages(images.filter(image => image.tag === tag));
		},
		[tag] 
	);

	return (
		
		<div className="App">
			
			
			<div className="tags">
				<TagButton  name="all" tagActive={tag === 'all' ? true : false} handleSetTag={setTag} /> /
				<TagButton  name="new" tagActive={tag === 'new' ? true : false} handleSetTag={setTag} /> /
				<TagButton  name="free" tagActive={tag === 'free' ? true : false} handleSetTag={setTag} /> /
				<TagButton  name="pro" tagActive={tag === 'pro' ? true : false} handleSetTag={setTag} />
			</div>
			<SRLWrapper>
				<div className="container">
					{ filteredImages.map(image => (
						<div key={image.id} className="image-card">
							<a href={`/images/${image.imageName}`}>
								<img id="myImg" className="image" src={`/images/${image.imageName}`} alt="" />
							</a>
						</div>
					))}
				</div>
			</SRLWrapper>
			
		</div>
	);
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
	return (
		<button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
			{name.toUpperCase()}
		</button>
	);
};

export default Apps;