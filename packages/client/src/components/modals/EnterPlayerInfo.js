import React from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { playerActions } from "../../redux";
import { useDispatch } from "react-redux";
import {
  VStack,
  Input,
  FormControl,
  Heading,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

export const EnterPlayerInfo = ({ playerNum = 1 }) => {
  const dispatch = useDispatch();
  const initialValues = { name: "" };
  const validationSchema = Yup.object({
    name: Yup.string(),
  });
  const onSubmit = ({ values }) => {
    dispatch(playerActions.addPlayer({ num: playerNum, ...values }));
  };
  const formikProps = { initialValues, validationSchema, onSubmit };
  return (
    <VStack>
      <Heading>{`Enter Player ${playerNum} Info`}</Heading>
      <Formik {...formikProps}>
        <Form>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" />
            <FormErrorMessage />
          </FormControl>
        </Form>
      </Formik>
    </VStack>
  );
};

EnterPlayerInfo.propTypes = {
  playerNum: PropTypes.number,
};
