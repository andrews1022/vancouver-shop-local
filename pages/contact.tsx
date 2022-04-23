import Image from 'next/image';
import type { NextPage } from 'next';

// components
import ExternalLink from '../components/ExternalLink/ExternalLink';

// styled components
import { Box } from '../components/UI/Box';
import { Copy } from '../components/UI/Copy';
import { Flex } from '../components/UI/Flex';

// constants
import { SLUG_REDDIT_THREAD } from '../constants/urls';

// images
import ContactImg from '../public/images/contact.jpg';

const Contact: NextPage = () => (
  <Flex>
    <Box>
      <Image
        src={ContactImg}
        alt='person accepting a package from a local business'
        placeholder='blur'
      />
    </Box>

    <Box>
      <h1>Contact</h1>

      <Copy>
        For all contact related details, please see the post on the{' '}
        <ExternalLink href={SLUG_REDDIT_THREAD}>subreddit</ExternalLink>.
      </Copy>
    </Box>
  </Flex>
);

export default Contact;
