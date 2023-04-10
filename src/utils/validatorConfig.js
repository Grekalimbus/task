const validatorConfig = {
  username: {
    isRequired: { message: 'Обязательнено для заполнения' },
    isEmail: { message: 'Корректно введите email' },
  },
  password: {
    isRequired: { message: 'Обязательно для заполнения' },
    isLength: { message: 'Пароль должен иметь от 4 до 12 символов' },
  },
  labelText: {
    isRequired: { message: 'Обязательно для заполнения' },
  },
};

export default validatorConfig;
