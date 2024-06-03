"use client";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const SubHeading = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;
  margin-top: 30px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 16px;
`;

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Heading>Privacy Policy / End User License Agreement (EULA)</Heading>
        <Paragraph>Last updated: 03.06.2024</Paragraph>
        <Paragraph>
          This Privacy Policy / End User License Agreement (&quot;Policy&quot;)
          describes how GoalFusion (&quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;) collects, uses, and shares information about you when
          you access or use our website, services, or applications
          (&quot;Services&quot;).
        </Paragraph>
        <Paragraph>
          By accessing or using our Services, you agree to this Policy. If you
          do not agree to this Policy, please do not use our Services.
        </Paragraph>
        <SubHeading>1. Information We Collect</SubHeading>
        <Paragraph>
          We collect information about you when you provide it to us, when you
          use our Services, and when other sources provide it to us. The types
          of information we collect include:
        </Paragraph>
        <ul>
          <li>
            Personal Information: Information that can be used to identify you,
            such as your name, email address, and any other information you
            provide voluntarily.
          </li>
          <li>
            Usage Information: Information about how you use our Services, such
            as your interactions with our website, the content you view, and
            your preferences.
          </li>
          <li>
            Device Information: Information about your device, such as your IP
            address, browser type, operating system, and device identifiers.
          </li>
          <li>
            Cookies and Tracking Technologies: We use cookies and similar
            tracking technologies to collect information about your interactions
            with our Services.
          </li>
        </ul>
        <SubHeading>2. How We Use Your Information</SubHeading>
        <Paragraph>We use the information we collect to:</Paragraph>
        <ul>
          <li>Provide, maintain, and improve our Services.</li>
          <li>
            Communicate with you about our Services, including updates and
            announcements.
          </li>
          <li>Personalize your experience and provide tailored content.</li>
          <li>Analyze usage trends and optimize our Services.</li>
          <li>Comply with legal obligations and enforce our policies.</li>
        </ul>
        <SubHeading>3. Information Sharing and Disclosure</SubHeading>
        <Paragraph>We may share your information with:</Paragraph>
        <ul>
          <li>
            Service Providers: We may share your information with third-party
            service providers who help us operate our Services.
          </li>
          <li>
            Business Partners: We may share your information with trusted
            business partners who provide complementary services.
          </li>
          <li>
            Legal Compliance: We may disclose your information to comply with
            legal obligations or respond to lawful requests from government
            authorities.
          </li>
        </ul>
        <SubHeading>4. Data Retention</SubHeading>
        <Paragraph>
          We retain your information for as long as necessary to fulfill the
          purposes outlined in this Policy or as required by law. We will delete
          or anonymize your information when it is no longer needed.
        </Paragraph>
        <SubHeading>5. Your Rights</SubHeading>
        <Paragraph>
          You have certain rights regarding your information, including the
          right to access, correct, or delete your information. Please contact
          us if you would like to exercise these rights.
        </Paragraph>
        <SubHeading>6. GDPR Compliance</SubHeading>
        <Paragraph>
          We comply with the General Data Protection Regulation (GDPR) and other
          applicable data protection laws. If you are a resident of the European
          Economic Area (EEA), you have certain rights under GDPR, including the
          right to access, rectify, or erase your personal data.
        </Paragraph>
        <SubHeading>7. Changes to This Policy</SubHeading>
        <Paragraph>
          We may update this Policy from time to time by posting the updated
          version on our website. We encourage you to review this Policy
          periodically for any changes.
        </Paragraph>
        <SubHeading>8. Contact Us</SubHeading>
        <Paragraph>
          If you have any questions or concerns about this Policy, please
          contact us at ipz213_dyum@student.ztu.edu.ua.
        </Paragraph>
      </Container>
    </ThemeProvider>
  );
}
