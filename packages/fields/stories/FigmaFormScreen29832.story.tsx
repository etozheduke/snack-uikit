import { Meta, StoryObj } from '@storybook/react';
import { FormEvent, useState } from 'react';

import { ButtonFilled } from '@snack-uikit/button';
import { FieldText } from '@snack-uikit/fields';
import { ArrowRightSVG } from '@snack-uikit/icons';
import { Checkbox } from '@snack-uikit/toggles';

import componentChangelog from '../CHANGELOG.md';
import componentPackage from '../package.json';
import componentReadme from '../README.md';

/**
 * Экран по макету Figma (node 29832:20568, Snack UI Kit 6.0.6).
 * Соответствие пропсов макету (Code Connect / имена в Figma):
 * - FieldS/Text → FieldText size="s", state по умолчанию (Default).
 * - CheckboxS → Checkbox size="s".
 * - ButtonFilledS + Primary + иконка → ButtonFilled size="s", appearance="primary", icon (после текста по умолчанию).
 * Подпись к чекбоксу: в макете отдельный текст; у Checkbox нет пропа label — разметка label + span.
 * TODO: в макете у обоих полей placeholder «Ваше имя» — для фамилии уточнить у дизайна.
 */
export function FigmaFormScreen29832() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        width: 256,
        boxSizing: 'border-box',
      }}
    >
      <FieldText
        id='figma-form-29832-first-name'
        name='firstName'
        label='Имя'
        placeholder='Ваше имя'
        inputMode='text'
        size='s'
        value={firstName}
        onChange={setFirstName}
      />

      <FieldText
        id='figma-form-29832-last-name'
        name='lastName'
        label='Фамилия'
        placeholder='Ваше имя'
        inputMode='text'
        size='s'
        value={lastName}
        onChange={setLastName}
      />

      <label
        htmlFor='figma-form-29832-remember'
        style={{
          display: 'flex',
          alignItems: 'center',
          columnGap: 8,
          cursor: 'pointer',
        }}
      >
        <Checkbox
          id='figma-form-29832-remember'
          size='s'
          checked={rememberMe}
          onChange={setRememberMe}
          data-test-id='figma-form-29832-remember'
        />
        <span>Запомнить меня</span>
      </label>

      <ButtonFilled type='submit' label='Отправить' size='s' appearance='primary' icon={<ArrowRightSVG />} fullWidth />
    </form>
  );
}

const meta: Meta<typeof FigmaFormScreen29832> = {
  title: 'Components/Fields/Figma Form Screen (29832-20568)',
  component: FigmaFormScreen29832,
};

export default meta;

export const figmaFormScreen29832: StoryObj<typeof FigmaFormScreen29832> = {
  render: () => <FigmaFormScreen29832 />,
  parameters: {
    readme: {
      sidebar: [`Latest version: ${componentPackage.version}`, componentReadme, componentChangelog],
    },
    packageName: componentPackage.name,
    design: {
      name: 'Figma',
      type: 'figma',
      url: 'https://www.figma.com/design/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-6.0.6?node-id=29832-20568',
    },
  },
};
