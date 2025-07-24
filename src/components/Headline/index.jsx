import { HeadlineContainer, HeadlineWrapper, HeadlineTexts, HeadlineTitle, HeadlineDescription, HeadlineButton } from './HeadlineElements';

const Headline = ({title, description, button, buttonHref, alignRight, image}) => {
  return (
  <>
    <HeadlineContainer $image={image}>
        <HeadlineWrapper>
            <HeadlineTexts alignRight={alignRight}>
                <HeadlineTitle>{title}</HeadlineTitle>
                <HeadlineDescription>{description}</HeadlineDescription>
                <HeadlineButton href={buttonHref}>{button}</HeadlineButton>
            </HeadlineTexts>
        </HeadlineWrapper>
    </HeadlineContainer>
  </>
  )
};

export default Headline;