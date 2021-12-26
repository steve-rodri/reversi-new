import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { playerActions } from "../../redux";
import { useDispatch } from "react-redux";
import {
  VStack,
  Center,
  Button,
  Divider,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";

export const EnterPlayerInfo = ({ num = 1, setModalView }) => {
  const dispatch = useDispatch();
  const initialValues = { name: "" };
  const validationSchema = Yup.object({
    name: Yup.string(),
  });
  const onSubmit = values => {
    dispatch(playerActions.addPlayer({ num, ...values }));
    setModalView("choose-color");
  };
  const formikProps = { initialValues, validationSchema, onSubmit };
  return (
    <VStack spacing={8}>
      <Heading as="h3" fontSize="2xl">{`Enter Player ${num}`}</Heading>
      <Divider />
      <Formik {...formikProps}>
        <Form>
          <VStack spacing={10}>
            <NameField />
            <Center>
              <Button type="submit">Submit</Button>
            </Center>
          </VStack>
        </Form>
      </Formik>
    </VStack>
  );
};

const NameField = () => {
  const [field, meta] = useField("name");
  return (
    <FormControl>
      <FormLabel>Name</FormLabel>
      <Input {...field} type="text" />
      {meta.touched && meta.error ? (
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      ) : null}
    </FormControl>
  );
};

EnterPlayerInfo.propTypes = {
  num: PropTypes.number,
  setModalView: PropTypes.func,
};
