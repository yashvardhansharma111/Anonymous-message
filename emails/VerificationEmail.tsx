/*import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text
} from '@react-email/components';

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({ username, otp }: VerificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Here&apos;s your verification code: {otp}</Preview>
      <Section>
        <Row>
          <Heading as="h2">Hello {username},</Heading>
        </Row>
        <Row>
          <Text>
            Thank you for registering. Please use the following verification
            code to complete your registration:
          </Text>
        </Row>
        <Row>
          <Text>{otp}</Text> 
        </Row>
        <Row>
          <Text>
            If you did not request this code, please ignore this email.
          </Text>
        </Row>
        {/* <Row>
          <Button
            href={`http://localhost:3000/verify/${username}`}
            style={{ color: '#61dafb' }}
          >
            Verify here
          </Button>
        </Row> }
      </Section>
    </Html>
  );
} */

  import {
    Html,
    Head,
    Font,
    Preview,
    Heading,
    Row,
    Section,
    Text,
    Container
  } from '@react-email/components';
  
  interface VerificationEmailProps {
    username: string;
    otp: string;
  }
  
  export default function VerificationEmail({ username, otp }: VerificationEmailProps) {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <title>Verification Code</title>
          <Font
            fontFamily="Roboto"
            fallbackFontFamily="Verdana"
            webFont={{
              url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
              format: 'woff2',
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Preview>Your Anonymous Message verification code: {otp}</Preview>
        <Section style={{ backgroundColor: '#f4f4f7', padding: '20px' }}>
          <Container style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            {/* Header Section */}
            <Section style={{ textAlign: 'center', borderBottom: '2px solid #eaeaea', paddingBottom: '20px' }}>
              <Heading as="h1" style={{ color: '#1a202c', fontSize: '24px', marginBottom: '5px' }}>Welcome to Anonymous Message!</Heading>
              <Text style={{ fontSize: '16px', color: '#6b7280' }}>We're thrilled to have you onboard, from Yashvardhan Sharma</Text>
            </Section>
            
            {/* Body Section */}
            <Section style={{ padding: '20px 0', textAlign: 'left' }}>
              <Text style={{ fontSize: '18px', color: '#1a202c' }}>Hello {username},</Text>
              <Text style={{ fontSize: '16px', color: '#4a5568', marginTop: '10px' }}>
                Thank you for registering! Please use the verification code below to complete your registration for Anonymous Message:
              </Text>
              <Text style={{
                fontSize: '36px',
                color: '#2563eb',
                fontWeight: 'bold',
                textAlign: 'center',
                margin: '20px 0'
              }}>
                {otp}
              </Text>
              <Text style={{ fontSize: '16px', color: '#4a5568' }}>
                If you did not request this code, please ignore this email.
              </Text>
            </Section>
  
            {/* Footer Section */}
            <Section style={{ borderTop: '2px solid #eaeaea', paddingTop: '20px', textAlign: 'center' }}>
              <Text style={{ fontSize: '14px', color: '#9ca3af' }}>
                © {new Date().getFullYear()} Anonymous Message. All rights reserved.
              </Text>
              <Text style={{ fontSize: '14px', color: '#9ca3af', marginTop: '5px' }}>
                Need help? <a href="mailto:support@anonymousmessage.com" style={{ color: '#2563eb', textDecoration: 'none' }}>Contact Support</a>
              </Text>
              <Text style={{ fontSize: '14px', color: '#9ca3af', marginTop: '5px' }}>
                From Yashvardhan Sharma, Founder of Anonymous Message
              </Text>
            </Section>
          </Container>
        </Section>
      </Html>
    );
  }
  