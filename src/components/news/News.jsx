import {
	ContainerNews,
	NewsContent,
	NewsImg,
	NewsText,
	NewsTitle
} from './styles';

const News = () => {
	return (
		<ContainerNews>
			<NewsTitle>Lo último</NewsTitle>
			<NewsContent>
				<NewsImg
					src='https://www.andrescastellanos.com/s/cc_images/cache_2493629907.jpg?t=1688038344'
					alt=''
				/>
				<NewsText>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
					aliquid at accusamus consectetur esse similique quisquam nam.
				</NewsText>
			</NewsContent>
		</ContainerNews>
	);
};
export default News;
