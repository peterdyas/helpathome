/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Helpers } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function HelpersCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    birth: "",
    nationality: "",
    maritalStatus: "",
    Religion: "",
    salary: "",
    languages: "",
    experienceYears: "",
    experienceKids: "",
    jobType: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [email, setEmail] = React.useState(initialValues.email);
  const [birth, setBirth] = React.useState(initialValues.birth);
  const [nationality, setNationality] = React.useState(
    initialValues.nationality
  );
  const [maritalStatus, setMaritalStatus] = React.useState(
    initialValues.maritalStatus
  );
  const [Religion, setReligion] = React.useState(initialValues.Religion);
  const [salary, setSalary] = React.useState(initialValues.salary);
  const [languages, setLanguages] = React.useState(initialValues.languages);
  const [experienceYears, setExperienceYears] = React.useState(
    initialValues.experienceYears
  );
  const [experienceKids, setExperienceKids] = React.useState(
    initialValues.experienceKids
  );
  const [jobType, setJobType] = React.useState(initialValues.jobType);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setPhone(initialValues.phone);
    setEmail(initialValues.email);
    setBirth(initialValues.birth);
    setNationality(initialValues.nationality);
    setMaritalStatus(initialValues.maritalStatus);
    setReligion(initialValues.Religion);
    setSalary(initialValues.salary);
    setLanguages(initialValues.languages);
    setExperienceYears(initialValues.experienceYears);
    setExperienceKids(initialValues.experienceKids);
    setJobType(initialValues.jobType);
    setErrors({});
  };
  const validations = {
    name: [],
    phone: [],
    email: [],
    birth: [],
    nationality: [],
    maritalStatus: [],
    Religion: [],
    salary: [],
    languages: [],
    experienceYears: [],
    experienceKids: [],
    jobType: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          phone,
          email,
          birth,
          nationality,
          maritalStatus,
          Religion,
          salary,
          languages,
          experienceYears,
          experienceKids,
          jobType,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Helpers(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "HelpersCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              phone,
              email,
              birth,
              nationality,
              maritalStatus,
              Religion,
              salary,
              languages,
              experienceYears,
              experienceKids,
              jobType,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone: value,
              email,
              birth,
              nationality,
              maritalStatus,
              Religion,
              salary,
              languages,
              experienceYears,
              experienceKids,
              jobType,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone,
              email: value,
              birth,
              nationality,
              maritalStatus,
              Religion,
              salary,
              languages,
              experienceYears,
              experienceKids,
              jobType,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Birth"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={birth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone,
              email,
              birth: value,
              nationality,
              maritalStatus,
              Religion,
              salary,
              languages,
              experienceYears,
              experienceKids,
              jobType,
            };
            const result = onChange(modelFields);
            value = result?.birth ?? value;
          }
          if (errors.birth?.hasError) {
            runValidationTasks("birth", value);
          }
          setBirth(value);
        }}
        onBlur={() => runValidationTasks("birth", birth)}
        errorMessage={errors.birth?.errorMessage}
        hasError={errors.birth?.hasError}
        {...getOverrideProps(overrides, "birth")}
      ></TextField>
      <TextField
        label="Nationality"
        isRequired={false}
        isReadOnly={false}
        value={nationality}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone,
              email,
              birth,
              nationality: value,
              maritalStatus,
              Religion,
              salary,
              languages,
              experienceYears,
              experienceKids,
              jobType,
            };
            const result = onChange(modelFields);
            value = result?.nationality ?? value;
          }
          if (errors.nationality?.hasError) {
            runValidationTasks("nationality", value);
          }
          setNationality(value);
        }}
        onBlur={() => runValidationTasks("nationality", nationality)}
        errorMessage={errors.nationality?.errorMessage}
        hasError={errors.nationality?.hasError}
        {...getOverrideProps(overrides, "nationality")}
      ></TextField>
      <TextField
        label="Marital status"
        isRequired={false}
        isReadOnly={false}
        value={maritalStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone,
              email,
              birth,
              nationality,
              maritalStatus: value,
              Religion,
              salary,
              languages,
              experienceYears,
              experienceKids,
              jobType,
            };
            const result = onChange(modelFields);
            value = result?.maritalStatus ?? value;
          }
          if (errors.maritalStatus?.hasError) {
            runValidationTasks("maritalStatus", value);
          }
          setMaritalStatus(value);
        }}
        onBlur={() => runValidationTasks("maritalStatus", maritalStatus)}
        errorMessage={errors.maritalStatus?.errorMessage}
        hasError={errors.maritalStatus?.hasError}
        {...getOverrideProps(overrides, "maritalStatus")}
      ></TextField>
      <TextField
        label="Religion"
        isRequired={false}
        isReadOnly={false}
        value={Religion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone,
              email,
              birth,
              nationality,
              maritalStatus,
              Religion: value,
              salary,
              languages,
              experienceYears,
              experienceKids,
              jobType,
            };
            const result = onChange(modelFields);
            value = result?.Religion ?? value;
          }
          if (errors.Religion?.hasError) {
            runValidationTasks("Religion", value);
          }
          setReligion(value);
        }}
        onBlur={() => runValidationTasks("Religion", Religion)}
        errorMessage={errors.Religion?.errorMessage}
        hasError={errors.Religion?.hasError}
        {...getOverrideProps(overrides, "Religion")}
      ></TextField>
      <TextField
        label="Salary"
        isRequired={false}
        isReadOnly={false}
        value={salary}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone,
              email,
              birth,
              nationality,
              maritalStatus,
              Religion,
              salary: value,
              languages,
              experienceYears,
              experienceKids,
              jobType,
            };
            const result = onChange(modelFields);
            value = result?.salary ?? value;
          }
          if (errors.salary?.hasError) {
            runValidationTasks("salary", value);
          }
          setSalary(value);
        }}
        onBlur={() => runValidationTasks("salary", salary)}
        errorMessage={errors.salary?.errorMessage}
        hasError={errors.salary?.hasError}
        {...getOverrideProps(overrides, "salary")}
      ></TextField>
      <TextField
        label="Languages"
        isRequired={false}
        isReadOnly={false}
        value={languages}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone,
              email,
              birth,
              nationality,
              maritalStatus,
              Religion,
              salary,
              languages: value,
              experienceYears,
              experienceKids,
              jobType,
            };
            const result = onChange(modelFields);
            value = result?.languages ?? value;
          }
          if (errors.languages?.hasError) {
            runValidationTasks("languages", value);
          }
          setLanguages(value);
        }}
        onBlur={() => runValidationTasks("languages", languages)}
        errorMessage={errors.languages?.errorMessage}
        hasError={errors.languages?.hasError}
        {...getOverrideProps(overrides, "languages")}
      ></TextField>
      <TextField
        label="Experience years"
        isRequired={false}
        isReadOnly={false}
        value={experienceYears}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone,
              email,
              birth,
              nationality,
              maritalStatus,
              Religion,
              salary,
              languages,
              experienceYears: value,
              experienceKids,
              jobType,
            };
            const result = onChange(modelFields);
            value = result?.experienceYears ?? value;
          }
          if (errors.experienceYears?.hasError) {
            runValidationTasks("experienceYears", value);
          }
          setExperienceYears(value);
        }}
        onBlur={() => runValidationTasks("experienceYears", experienceYears)}
        errorMessage={errors.experienceYears?.errorMessage}
        hasError={errors.experienceYears?.hasError}
        {...getOverrideProps(overrides, "experienceYears")}
      ></TextField>
      <TextField
        label="Experience kids"
        isRequired={false}
        isReadOnly={false}
        value={experienceKids}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone,
              email,
              birth,
              nationality,
              maritalStatus,
              Religion,
              salary,
              languages,
              experienceYears,
              experienceKids: value,
              jobType,
            };
            const result = onChange(modelFields);
            value = result?.experienceKids ?? value;
          }
          if (errors.experienceKids?.hasError) {
            runValidationTasks("experienceKids", value);
          }
          setExperienceKids(value);
        }}
        onBlur={() => runValidationTasks("experienceKids", experienceKids)}
        errorMessage={errors.experienceKids?.errorMessage}
        hasError={errors.experienceKids?.hasError}
        {...getOverrideProps(overrides, "experienceKids")}
      ></TextField>
      <TextField
        label="Job type"
        isRequired={false}
        isReadOnly={false}
        value={jobType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone,
              email,
              birth,
              nationality,
              maritalStatus,
              Religion,
              salary,
              languages,
              experienceYears,
              experienceKids,
              jobType: value,
            };
            const result = onChange(modelFields);
            value = result?.jobType ?? value;
          }
          if (errors.jobType?.hasError) {
            runValidationTasks("jobType", value);
          }
          setJobType(value);
        }}
        onBlur={() => runValidationTasks("jobType", jobType)}
        errorMessage={errors.jobType?.errorMessage}
        hasError={errors.jobType?.hasError}
        {...getOverrideProps(overrides, "jobType")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
