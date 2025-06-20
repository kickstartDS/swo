/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A button that allows users to select an option from a multiple elements.
 */
export type SelectButtonProps = {
  /**
   * An icon to display on the button.
   */
  icon?: string;
  [k: string]: unknown;
} & Radio;
/**
 * The label for the element
 */
export type Label = string;
/**
 * Whether the input is disabled
 */
export type Disabled = boolean;
/**
 * Wheter the input is invalid
 */
export type Invalid = boolean;
/**
 * Message to show if the input is invalid
 */
export type InvalidMessage = string;
/**
 * Help text that gives more context about what a user needs to input
 */
export type HintMessage = string;
/**
 * Additional css classes attached to the input element
 */
export type Class = string;
/**
 * Optional custom component identifier
 */
export type KsComponentAttribute = string;

export interface Radio {
  label?: Label;
  /**
   * An icon to display on the button.
   */
  icon?: string;
  disabled?: Disabled;
  invalid?: Invalid;
  invalidMessage?: InvalidMessage;
  hint?: HintMessage;
  className?: Class;
  component?: KsComponentAttribute;
}
