import React from 'react';

const AddFavourite = () => {
	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<span style={{ marginRight: '10px', fontWeight: 'bold', color: 'white' }}>
				Add to Favourites
			</span>
			<svg
				width='1.5em'
				height='1.5em'
				viewBox='0 0 16 16'
				className='bi bi-heart-fill'
				fill='red'
				xmlns='http://www.w3.org/2000/svg'
				style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
			>
				<path
					fillRule='evenodd'
					d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
				/>
			</svg>
		</div>
	);
};

export default AddFavourite;
