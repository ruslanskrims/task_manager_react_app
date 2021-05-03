import { root, bearerToken } from "./config";

export const api = Object.freeze({
  todo: {
    fetch: () => {
      return fetch(`${root}/v2/todos/tasks`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${bearerToken}`,
        },
      });
    },
    getTaskId: (id) => {
      return fetch(`${root}/v2/todos/tasks/${id}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${bearerToken}`,
        },
      })
    },
    delete: (id) => {
      return fetch(`${root}/v2/todos/tasks/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${bearerToken}`,
        },
      });
    },
    create: (payload) => {
      return fetch(`${root}/v2/todos/tasks`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${bearerToken}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    },
    update: (id, payload) => {
      return fetch(`${root}/v2/todos/tasks/${id}`, {
        method: "PUT",
        headers: {
         "Authorization": `Bearer ${bearerToken}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    },
  },
});
