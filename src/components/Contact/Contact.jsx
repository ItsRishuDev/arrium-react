import {
  ContactContainer,
  ContactInnerContainer,
  ContactTitleText,
  ContactDescriptionText,
  ContactFormContainer,
  ContactNameContainer,
  ContactInput,
  ContactSubmitButton,
} from "./Contact.styled";

const Contact = () => {
  return (
    <ContactContainer>
      <ContactInnerContainer>
        <ContactTitleText>Talk to a human</ContactTitleText>
        <ContactDescriptionText textPadding="2rem">
          At Arrium, your email isn’t going to disappear into a black hole, your
          live chat is going to go unanswered.
          <br />
          <br />
          We provide great customer service because it’s the kind of customer
          service we expect to receive ourselves. So, we deliver it in the same
          way we expect it to receive it.
        </ContactDescriptionText>
      </ContactInnerContainer>
      <ContactInnerContainer>
        <ContactTitleText>Have a question?</ContactTitleText>
        <ContactDescriptionText textPadding="1rem">
          Get in touch and tell us how we can help
        </ContactDescriptionText>
        <ContactFormContainer>
          <ContactNameContainer>
            <ContactInput placeholder="First name" inputWidth="17.2rem" />
            <ContactInput
              placeholder="Surname"
              variant="outlined"
              inputWidth="17.2rem"
            />
          </ContactNameContainer>
          <ContactInput placeholder="Your Email" variant="outlined" />
          <ContactInput
            placeholder="Your Question"
            variant="outlined"
            multiline
            rows={4}
          />
        </ContactFormContainer>
        <ContactSubmitButton variant="contained">Send</ContactSubmitButton>
      </ContactInnerContainer>
    </ContactContainer>
  );
};

export default Contact;
