import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import SocialLinkStyled from './socialLink.styled';

const SocialLink = () => {
  return (
    <SocialLinkStyled.Wrapper>
      <SocialLinkStyled.Item>
        <SocialLinkStyled.Link href="www.google.com" target="_blank">
          <FaFacebookF />
        </SocialLinkStyled.Link>
      </SocialLinkStyled.Item>
      <SocialLinkStyled.Item>
        <SocialLinkStyled.Link href="www.google.com" target="_blank">
          <FaTwitter />
        </SocialLinkStyled.Link>
      </SocialLinkStyled.Item>
      <SocialLinkStyled.Item>
        <SocialLinkStyled.Link href="www.google.com" target="_blank">
          <FaInstagram />
        </SocialLinkStyled.Link>
      </SocialLinkStyled.Item>
      <SocialLinkStyled.Item>
        <SocialLinkStyled.Link href="www.google.com" target="_blank">
          <FaYoutube />
        </SocialLinkStyled.Link>
      </SocialLinkStyled.Item>
    </SocialLinkStyled.Wrapper>
  );
};

export default SocialLink;
