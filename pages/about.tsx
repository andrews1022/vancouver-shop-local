import Image from 'next/image';
import type { NextPage } from 'next';

// components
import ExternalLink from '../components/ExternalLink';

// styled components
import { Copy } from '../components/UI/Copy';
import { FiftyFiftyBox } from '../components/UI/FiftyFiftyBox';
import { FiftyFiftyWrapper } from '../components/UI/FiftyFiftyWrapper';

// constants
import { SLUG_REDDIT_THREAD } from '../constants/urls';

// images
import AboutImg from '../public/images/about.jpg';

const About: NextPage = () => (
  <FiftyFiftyWrapper>
    <FiftyFiftyBox>
      <Image src={AboutImg} alt='woman paying cashier in local business' />
    </FiftyFiftyBox>

    <FiftyFiftyBox>
      <h1>What is Vancouver Shop Local?</h1>

      <Copy>
        Vancouver Shop Local is an effort that started on the{' '}
        <ExternalLink href={SLUG_REDDIT_THREAD}>Vancouver subreddit</ExternalLink> to help support
        local businesses in the Greater Vancouver Area during the holiday shopping season, instead
        of buying from big chain retailors or online from sites like Amazon.
      </Copy>

      <Copy>There you can also find:</Copy>

      <ul>
        <li>Shop of the Week</li>
        <li>Deals</li>
        <li>Most up to date list of stores/businesses</li>
      </ul>
    </FiftyFiftyBox>
  </FiftyFiftyWrapper>
);

export default About;
