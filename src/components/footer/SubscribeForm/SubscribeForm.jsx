import {
  Form,
  Input,
  Button,
  FormTitle,
  FormText,
} from "./SubscribeForm.styled";

const SubscribeForm = () => {
  return (
    <>
      <Form>
        <FormTitle>Subscribe to our Newsletter</FormTitle>
        <FormText>
          Subscribe up to our newsletter. Be in touch with latest news and
          special offers, etc.
        </FormText>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
        />
        {/* add svg to placholder  */}

        <Button type="submit">Subscribe</Button>
      </Form>
    </>
  );
};

export default SubscribeForm;
