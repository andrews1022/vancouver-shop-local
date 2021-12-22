import React from 'react';

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

// types
import { Business } from '../../types/types';

// utils
import renderCategoryIcon from '../../utils/renderCategoryIcon';

// styled components
import { Description, Heading, Tag, Tags, Wrapper } from './styles';

const BusinessesItem = ({ category, description, link, location, name }: Business) => (
	<Wrapper key={name}>
		<Heading>{name}</Heading>
		<Description>{description}</Description>
		<Tags>
			<Tag mode='category'>
				{category}
				<FontAwesomeIcon icon={renderCategoryIcon(category)} size='1x' />
			</Tag>
			<Tag mode='link'>
				<a href={link} target='_blank' rel='noopener noreferrer'>
					Visit Site
					<FontAwesomeIcon icon={faDesktop} size='1x' />
				</a>
			</Tag>
			{location ? (
				<Tag mode='directions'>
					<a
						href={`https://www.google.com/maps/place/${location.replaceAll(' ', '+')}`}
						target='_blank'
						rel='noopener noreferrer'
					>
						Get Directions <FontAwesomeIcon icon={faMapMarkerAlt} size='1x' />
					</a>
				</Tag>
			) : null}
		</Tags>
	</Wrapper>
);

export default BusinessesItem;
