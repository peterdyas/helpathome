/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Helpers } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HelpersUpdateFormInputValues = {
    name?: string;
    phone?: string;
    email?: string;
    birth?: string;
    nationality?: string;
    maritalStatus?: string;
    Religion?: string;
    salary?: string;
    languages?: string;
    experienceYears?: string;
    experienceKids?: string;
    jobType?: string;
};
export declare type HelpersUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    birth?: ValidationFunction<string>;
    nationality?: ValidationFunction<string>;
    maritalStatus?: ValidationFunction<string>;
    Religion?: ValidationFunction<string>;
    salary?: ValidationFunction<string>;
    languages?: ValidationFunction<string>;
    experienceYears?: ValidationFunction<string>;
    experienceKids?: ValidationFunction<string>;
    jobType?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HelpersUpdateFormOverridesProps = {
    HelpersUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    birth?: PrimitiveOverrideProps<TextFieldProps>;
    nationality?: PrimitiveOverrideProps<TextFieldProps>;
    maritalStatus?: PrimitiveOverrideProps<TextFieldProps>;
    Religion?: PrimitiveOverrideProps<TextFieldProps>;
    salary?: PrimitiveOverrideProps<TextFieldProps>;
    languages?: PrimitiveOverrideProps<TextFieldProps>;
    experienceYears?: PrimitiveOverrideProps<TextFieldProps>;
    experienceKids?: PrimitiveOverrideProps<TextFieldProps>;
    jobType?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HelpersUpdateFormProps = React.PropsWithChildren<{
    overrides?: HelpersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    helpers?: Helpers;
    onSubmit?: (fields: HelpersUpdateFormInputValues) => HelpersUpdateFormInputValues;
    onSuccess?: (fields: HelpersUpdateFormInputValues) => void;
    onError?: (fields: HelpersUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HelpersUpdateFormInputValues) => HelpersUpdateFormInputValues;
    onValidate?: HelpersUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HelpersUpdateForm(props: HelpersUpdateFormProps): React.ReactElement;
