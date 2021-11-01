import { v4 as uuidv4 } from "uuid";
// utils
import fakeRequest from "../utils/fakeRequest";
//
import mock from "../mock/mock";

const users = [
  {
    id: uuidv4(),
    email: "test@mail.ru",
    password: "12345",
  },
];

mock.onPost("/api/auth/login").reply(async (config) => {
  try {
    await fakeRequest(1000);

    const { email, password } = JSON.parse(config.data);
    const user = users.find((user) => user.email === email);

    if (!user) {
      return [400, { message: "Пользователь с данным email не найден" }];
    }

    if (user.password !== password) {
      return [400, { message: "Неверный пароль" }];
    }

    return [200, { user }];
  } catch (error) {
    console.error(error);
    return [500, { message: "Ошибка на сервере" }];
  }
});
